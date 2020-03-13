import base from 'reducers/base'

import { getPosts } from './sagas'
import { takeEvery } from 'redux-saga/effects'

export default base({
  initialState: {
    data: []
  },
  namespace: 'crassa',
  store    : 'posts'
}).extend({
  creators: ({ types }) => ({
    getPosts: () => ({ type: types.FETCH })
  }),
  sagas: duck => ({
    getPosts: getPosts(duck)
  }),
  selectors: ({ store }) => ({
    getPosts: state => state[store].items
  }),
  takes: (duck) => ([
    takeEvery(duck.types.FETCH, duck.sagas.getPosts)
  ])
})
