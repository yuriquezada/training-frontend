import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid, Card, CardContent, makeStyles, Button } from '@material-ui/core'

import profileDucks from 'reducers/profile'

const { getProfileByUser, resetProfile } = profileDucks.creators

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(4)
  }
}))

export default function Profile(props) {
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

  const profile = useSelector(state => state.profile)

  React.useEffect(() => {
    dispatch(getProfileByUser(id))

    return () => {
      dispatch(resetProfile())
    }
  }, [])

  const _handleClickProfile = (id) => () => {
    history.push(`/user${id}/posts`)
  }
  const _handleClickBack = () => {
    history.push('/')
  }

  const profileData = []
  profileData.push(profile.data)
  console.log('Este es el profile.data')
  console.log(profile.data)

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h4'>Profile By User {id}:</Typography>
        <Button onClick={_handleClickBack} variant='outlined' >Ir atrás</Button>
      </Grid>
      {
        profile.status === 'LOADING' && (
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
        profileData.map(({ id, name, username }) => (
          <Grid
            item
            key={`user-${id}`}
            lg={3}
            md={4}
            xs={12}>
            <Card>
              <CardContent>
                <Typography>Nombre: {name}</Typography>
                <Typography>Nombre de usuario: {username}</Typography>
                <Button
                  color='primary'
                  onClick={_handleClickProfile(id)}
                  variant='outlined'>
                  Ver publicaciones
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}
