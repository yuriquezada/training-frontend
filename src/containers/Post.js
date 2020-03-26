import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid, Card, CardContent, makeStyles, Button } from '@material-ui/core'

import postsDucks  from 'reducers/posts'

const { getPostsByUser, resetPosts } = postsDucks.creators

const useStyles = makeStyles(({ spacing }) =>({
  root: {
    padding: spacing(4)
  }
}))

export default function Post(props) {
  const dispatch = useDispatch()
  const {
    match: {
      params: {
        id
      }
    },
    history
  } = props

  const classes = useStyles()

  const posts = useSelector(state => state.posts)

  React.useEffect(() => {
    dispatch(getPostsByUser(id))

    return () => {
      dispatch(resetPosts())
    }
  }, [])
  const _handleClickPost = (id) => () => {
    history.push(`/post${id}/comments`)
  }
  const _handleClickBack = () => {
    history.push('/')
  }

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h4'>Posts By User {id}:</Typography>
        <Button onClick={_handleClickBack} variant='outlined' >Ir atrás</Button>
      </Grid>
      {
        posts.status === 'LOADING' && (
          <Grid
            container
            item
            justify='center'
            xs={12}>
            <img alt='Loading' src='https://cdn.krowdy.com/images/loader.gif' />
          </Grid>
        )
      }
      {
        posts.data.map(({ id, title, body }) => (
          <Grid
            item
            key={`post-${id}`}
            lg={3}
            md={4}
            xs={12}>
            <Card>
              <CardContent>
                <Typography>Titulo: {title}</Typography>
                <Typography>Body: {body}</Typography>
                <Button
                  color='primary'
                  onClick={_handleClickPost(id)}
                  variant='outlined'>
                    Ver comentarios
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}
