import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingBar from 'react-redux-loading'
import {Route, Redirect, Switch} from 'react-router-dom'

import {handleInitialData} from '../actions/shared'
import AppNav from './AppNav'
import LoginWindow from './LoginWindow'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionPool from './QuestionPool'
import NotFoundPage from './NotFoundPage'


 class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {loggedUser, loading} = this.props
    
    return (
      <div className="App">
        <LoadingBar />
        <div>
          <AppNav />
          {loading === true
            ? null
            :  loggedUser === null
                ? <LoginWindow />
                : <div>
                    <Switch>
                    <Route path="/" exact component={Dashboard}/>
                      <Route path="/add" component={NewQuestion}/>
                      <Route path="/leaderboard" component={LeaderBoard}/>
                      <Route path="/questions/:id" component={QuestionPool}/>
                      <Route path="/404" component={NotFoundPage} />
                      <Redirect to="/404" />
                    </Switch>
                  </div>
          }
        </div>
      </div>
    );
  }
}


function mapStateToProps({questions, loggedUser}) {
  return {
    loading: Object.keys(questions).length === 0,
    loggedUser
  }
}

export default connect(mapStateToProps)(App)
