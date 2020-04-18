import base from 'reducers/base'

import { getProfileByUser } from './sagas'
import { takeEvery } from 'redux-saga/effects'

export default base({
  initialState: {
    data: []
  },
  namespace: 'crassa',
  store    : 'profile'
}).extend({
  creators: ({ types }) => ({
    getProfileByUser: id => ({ id, type: types.FETCH }),
    resetProfile    : () => ({ type: types.RESET })
  }),
  sagas: duck => ({
    getProfileByUser: getProfileByUser(duck)
  }),
  takes: (duck) => ([
    takeEvery(duck.types.FETCH, duck.sagas.getProfileByUser)
  ])
})
