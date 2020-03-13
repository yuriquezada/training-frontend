import React from 'react'

import commentsDucks  from 'reducers/comments'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid, Card, CardContent, makeStyles, Button } from '@material-ui/core'

const { getCommentsByPost, resetComments } = commentsDucks.creators

const useStyles = makeStyles(({ spacing }) =>({
  root: {
    padding: spacing(4)
  }
}))

export default function Comment(props) {
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

  const comments = useSelector(state => state.comments)

  React.useEffect(() => {
    dispatch(getCommentsByPost(id))

    return () => {
      dispatch(resetComments())
    }
  }, [])

  const _handleClickBack = () => {
    history.push('/')
  }

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h4'>Comments By {id}:</Typography>
        <Button onClick={_handleClickBack} variant='outlined' >Ir atrás</Button>
      </Grid>
      {
        comments.status === 'LOADING' && (
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
        comments.data.map(({ id, name, email, body }) => (
          <Grid
            item
            key={`comment-${id}`}
            lg={3}
            md={4}
            xs={12}>
            <Card>
              <CardContent>
                <Typography>Name: {name}</Typography>
                <Typography>Email: {email}</Typography>
                <Typography>Body: {body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}
