import { browserHistory } from 'react-router'
import { put, takeEvery } from 'redux-saga/effects'
import * as api from '~/app/api'
import { SAGA_NEW_COMPANY } from '~/app/reducers/NewCompany'
import { SET_COMPANIES } from '~/app/reducers/Company'
import { createAction } from 'redux-actions'

function* perform(_action) {
  try {
    const companies = yield api.postCompany(_action.payload)
    yield put(createAction(SET_COMPANIES)({companies}))
    yield browserHistory.push('/companies')
  } catch (err) { console.log(err) }
}

function* watch() {
  yield takeEvery(SAGA_NEW_COMPANY, perform)
}

export default watch
