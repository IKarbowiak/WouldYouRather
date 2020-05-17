import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingBar from 'react-redux-loading'
import {Route} from 'react-router-dom'

import {handleInitialData} from '../actions/shared'
// import {setLoggedUser} from '../actions/loggedUser'
import AppNav from './AppNav'
import LoginWindow from './LoginWindow'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'


 class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {loggedUser, loading} = this.props
    console.log("loggedUser", loggedUser)
    console.log("loading", loading)

    // if (!loggedUser) {
    //   return (
    //     <div>
    //       <LoadingBar />
    //       {this.props.loading === true
    //         ? null
    //         : <LoginWindow />
    //       }
    //     </div>
    //   )
    // }
    
    return (
      <div className="App">
        <LoadingBar />
        <div>
          <AppNav />
          {this.props.loading === true 
            ? null
            : <div>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/add" component={NewQuestion}/>
                <Route path="/leaderboard" component={LeaderBoard}/>
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
