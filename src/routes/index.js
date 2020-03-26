import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import loadable from '@loadable/component'

import Loading from 'components/Common/Loading'

const Dashboard = loadable(() => import('../containers/Dashboard'), {
  fallback: <Loading />
})

const Home = loadable(() => import('../containers/Home'), {
  fallback: <Loading />
})

const Post = loadable(() => import('../containers/Post'), {
  fallback: <Loading />
})

const Comment = loadable(() => import('../containers/Comment'), {
  fallback: <Loading />
})

export default history => {
  const pathUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : ''
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)

  return (
    <ConnectedRouter history={history}>
      <Dashboard history={history}>
        <Switch>
          <Route component={Home} exact path={`${pathUrl}/`} />
          <Route component={Post} exact path={`${pathUrl}/user:id/posts`} />
          <Route component={Comment} exact path={`${pathUrl}/post:id/comments`} />
        </Switch>
      </Dashboard>
    </ConnectedRouter>
  )
}
