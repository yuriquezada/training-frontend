import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, Grid, CardActions, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import usersDucks from 'reducers/users'

const { getUsers } = usersDucks.creators

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  user: {
    cursor: 'pointer',
    margin: theme.spacing(1)
  }
}))

export default function Home({ history }) {
  const dispatch = useDispatch()
  const classes = useStyles()

  const users = useSelector(state => state.users)

  React.useEffect(()=> {
    dispatch(getUsers())
  },[])

  const _handleClickUser = (id) => () => {
    history.push(`/posts/${id}`)
  }

  return (
    <Grid className={classes.root} container>
      {
        users.data.map(user => (
          <Grid
            item
            key={`user-${user.id}`}
            lg={4}
            md={6}
            xs={12}>
            <Card className={classes.user}>
              <CardContent>
                <Typography variant='h5'>{user.username}</Typography>
                <CardActions>
                  <Button
                    color='primary'
                    onClick={_handleClickUser(user.id)}
                    variant='outlined'>
                    Ver publicaciones
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}
