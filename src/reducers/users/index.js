import base from 'reducers/base'

import { getUsers } from './sagas'
import { takeEvery } from 'redux-saga/effects'

export default base({
  initialState: {
    data: []
  },
  namespace: 'crassa',
  store    : 'users'
}).extend({
  creators: ({ types }) => ({
    getUsers: () => ({ type: types.FETCH })
  }),
  sagas: duck => ({
    getUsers: getUsers(duck)
  }),
  selectors: ({ store }) => ({
    getUsers: state => state[store].items
  }),
  takes: (duck) => ([
    takeEvery(duck.types.FETCH, duck.sagas.getUsers)
  ])
})
