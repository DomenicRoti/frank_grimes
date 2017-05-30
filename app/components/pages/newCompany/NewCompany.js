//@flow
import React, { PropTypes as pt } from 'react'
import { Container, Header } from './NewCompanyStyle'
import { RaisedButton, TextField } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const NewCompany = React.createClass({
  propTypes: {
    postCompany: pt.func.isRequired,
  },

  handleTouchTap() {
    if (this.state.companyName.length >= 3) {
      this.props.postCompany({ name: this.state.companyName })
    } else {
      this.setState({'errorText': 'Company name must be at least 3 characters.'})
    }
  },

  handleNameChange(event) {
    this.setState({'companyName': event.target.value})
  },

  getInitialState() {
    return {
      companyName: '',
      errorText: ''
    }
  },

  render() {
    return <Container>
      <Header>New Company</Header>
      <TextField value={this.state.companyName} onChange={this.handleNameChange} errorText={this.state.errorText} floatingLabelText='Company Name' fullWidth={true} />
      <br />
      <RaisedButton onTouchTap={this.handleTouchTap} label='Add Company' />
    </Container>
  }
})

export default NewCompany
