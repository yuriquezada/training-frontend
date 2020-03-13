import base from 'reducers/base'

import { getCommentsByPost } from './sagas'
import { takeEvery } from 'redux-saga/effects'

export default base({
  initialState: {
    data: []
  },
  namespace: 'crassa',
  store    : 'comments'
}).extend({
  creators: ({ types }) => ({
    getCommentsByPost: id => ({ id, type: types.FETCH }),
    resetComments    : () => ({ type: types.RESET })
  }),
  sagas: duck => ({
    getCommentsByPost: getCommentsByPost(duck)
  }),
  takes: (duck) => ([
    takeEvery(duck.types.FETCH, duck.sagas.getCommentsByPost)
  ])
})
