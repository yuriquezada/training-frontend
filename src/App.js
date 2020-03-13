import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import { hot } from 'react-hot-loader'
import Title from './Title'
import SubTitle from './SubTitle'

function App() {
  const [ title, setTitle ] = React.useState('')
  const [ subTitle, setSubTitle ] = React.useState('')

  const { REACT_APP_SITE } = process.env

  return (
    <div className='App'>
      <Typography>{REACT_APP_SITE}</Typography>
      <TextField onChange={ev => setTitle(ev.target.value)} value={title} />
      <TextField onChange={ev => setSubTitle(ev.target.value)} value={subTitle} />
      <Title title={title} />
      <SubTitle subTitle={subTitle} />
      {/* <SubTitle user={user} /> */}
    </div>
  )
}

export default hot(module)(App)
