
import { call, put } from 'redux-saga/effects'

import { Get } from 'lib/Request'

export const getUsers = ({ types }) => function* () {
  try {
    yield put({ type: types.FETCH_PENDING })

    const payload = yield call(Get, 'users')

    yield put({ payload, type: types.FETCH_FULFILLED })
  } catch (err) {
    const { type, message, response: { data: { message: messageResponse } = {} } = {} } = err
    switch (type) {
      case 'cancel':
        yield put({ type: types.FETCH_CANCEL })
        break
      default:
        yield put({
          error: messageResponse || message,
          type : types.FETCH_FAILURE
        })
        break
    }
  }
}
