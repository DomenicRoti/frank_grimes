//@flow
import React, { PropTypes as pt } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { browserHistory } from 'react-router'

const Layout = React.createClass({
  propTypes: {
    children: pt.element.isRequired
  },

  handleTouchTap() {
    browserHistory.push('/companies')
  },

  handleRightIconTouchTap() {
    browserHistory.push('/companies/new')
  },

  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    }

    return <div>
      <AppBar
        title={<span style={styles.title}>Companies</span>}
        onTitleTouchTap={this.handleTouchTap}
        showMenuIconButton={false}
        iconElementRight={<FlatButton label='Add a Company' />}
        onRightIconButtonTouchTap={this.handleRightIconTouchTap} />
      {this.props.children}
    </div>
  }
})

export default Layout
