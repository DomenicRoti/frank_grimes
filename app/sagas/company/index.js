//@flow
import watchGetCompanies from '~/app/sagas/company/GetCompanies'
import watchNewCompany from '~/app/sagas/company/NewCompany'

const sagas = [
  watchGetCompanies(),
  watchNewCompany()
]

export default sagas
