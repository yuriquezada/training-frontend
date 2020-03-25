import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { all } from 'redux-saga/effects'

import theme from './theme'
import products from './products'
import users from './users'
import posts from './posts'
import comments from './comments'

export default history => combineReducers({
  router          : connectRouter(history),
  [theme.store]   : theme.reducer,
  [products.store]: products.reducer,
  [users.store]   : users.reducer,
  [posts.store]   : posts.reducer,
  [comments.store]: comments.reducer
})

export function* rootSaga() {
  yield all([
    ...products.takes,
    ...users.takes,
    ...posts.takes,
    ...comments.takes
  ])
}
