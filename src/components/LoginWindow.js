import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {setLoggedUser} from '../actions/loggedUser'


class LoginWindow extends Component {
  state = {
    selectedUser: ""
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({
      selectedUser: event.target.value
    })
  }

  logIn = (event) => {
    const {selectedUser} = this.state
    const {dispatch} = this.props
    if (selectedUser !== "") {
      dispatch(setLoggedUser(selectedUser))
      // history.back()
    }
  }

  render() {
    const {users} = this.props

    return (
      <Card className="text-center">
        <Card.Header>Welcome to the Would You Rather game!</Card.Header>
        <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/61qsWw4O5IL.png" className="game-image" />
        <Card.Body>
          <Card.Title>Log in</Card.Title>
          <Card.Text>
            Select the user you want to log in.
          </Card.Text>
          <div>
          <select value={this.state.selectedUser} onChange={this.onChange}>
            <option key="" value="" disabled>Choose user</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          </div>
          <Button variant="primary" onClick={this.logIn} className="log-in">Log in</Button>
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.values(users).sort((a, b) => a.name.localeCompare(b.name))
  }
}

export default connect(mapStateToProps)(LoginWindow)
