// @flow
import type Action from '~/app/Types'
import update from 'immutability-helper'
export const SAGA_NEW_COMPANY = 'company/SAGA_NEW_COMPANY'

export default function reducer(state: Object = {}, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SAGA_NEW_COMPANY:
      return update(state, {companies: {$set: p.companies}})
    default:
      return state
  }
}
