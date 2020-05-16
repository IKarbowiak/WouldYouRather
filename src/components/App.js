import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import {handleInitialData} from '../actions/shared'
import LoginWindow from './LoginWindow'


 class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {loggedUser, users, questions} = this.props

    if (!loggedUser) {
      return <LoginWindow />
    }
    
    return (
      <div className="App">
        Welcome
      </div>
    );
  }
}

export default connect()(App)
