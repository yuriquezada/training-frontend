
import { call, put } from 'redux-saga/effects'

import { Get } from 'lib/Request'

export const getCommentsByPost = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.FETCH_PENDING })

    const payload = yield call(Get, `posts/${id}/comments`)

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
