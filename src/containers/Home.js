import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, Grid, CardActions, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import usersDucks from 'reducers/users'

const { getUsers } = usersDucks.creators

const useStyles = makeStyles(theme => ({
  bgWhite: {
    backgroundColor: 'red'
  },
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
  // console.log(users.data)

  React.useEffect(() => {
    dispatch(getUsers())
  }, [])

  const _handleClickUser = (id) => () => {
    history.push(`/user${id}/posts`)
  }
  const _handleClickUserProfile = (id) => () => {
    history.push(`/user${id}`)
  }
  console.log(users.data)

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.bgWhite, 'holita'} container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h6'>Mis contactos</Typography>
        </Grid>
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
                    <Button
                      color='primary'
                      onClick={_handleClickUserProfile(user.id)}
                      variant='outlined'>
                      Ver perfil
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>

    </Grid>
  )
}
