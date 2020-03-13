import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, Grid, CardActions, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import postsDucks from 'reducers/posts'

const { getPosts } = postsDucks.creators

const useStyles = makeStyles(theme => ({
  post: {
    cursor: 'pointer',
    margin: theme.spacing(1)
  },
  root: {
    padding: theme.spacing(4)
  }
}))

export default function Home({ history }) {
  const dispatch = useDispatch()
  const classes = useStyles()

  const posts = useSelector(state => state.posts)

  React.useEffect(()=> {
    dispatch(getPosts())
  },[])

  const _handleClickPost = (id) => () => {
    history.push(`/comment/${id}`)
  }

  return (
    <Grid className={classes.root} container>
      {
        posts.data.map(post => (
          <Grid
            item
            key={`post-${post.id}`}
            lg={4}
            md={6}
            xs={12}>
            <Card className={classes.post}>
              <CardContent>
                <Typography variant='h5'>{post.title}</Typography>
                <CardActions>
                  <Button
                    color='primary'
                    onClick={_handleClickPost(post.id)}
                    variant='outlined'>
                    Ver comentarios
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
