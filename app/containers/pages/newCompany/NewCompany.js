//@flow
import { connect } from 'react-redux'
import NewCompany from '~/app/components/pages/newCompany/NewCompany'
import { createAction } from 'redux-actions'
import { SAGA_NEW_COMPANY } from '~/app/reducers/NewCompany'

export const mapStateToProps = (): Object => ({
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  postCompany: (company) =>
    dispatch(createAction(SAGA_NEW_COMPANY)(company))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCompany)
