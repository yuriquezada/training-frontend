import base from 'reducers/base'

import { getPostsByUser } from './sagas'
import { takeEvery } from 'redux-saga/effects'

export default base({
  initialState: {
    data: []
  },
  namespace: 'crassa',
  store    : 'posts'
}).extend({
  creators: ({ types }) => ({
    getPostsByUser: id => ({ id, type: types.FETCH }),
    resetPosts    : () => ({ type: types.RESET })
  }),
  sagas: duck => ({
    getPostsByUser: getPostsByUser(duck)
  }),
  takes: (duck) => ([
    takeEvery(duck.types.FETCH, duck.sagas.getPostsByUser)
  ])
})
