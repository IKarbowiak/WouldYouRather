import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import {logOut} from '../actions/loggedUser'


class AppNav extends Component {
  handleLogOut = (event) => {
    event.preventDefault()
    this.props.dispatch(logOut())
  }

  render () {
    const {user} = this.props
    console.log("user", user)
    return (
      <Navbar className="bg-light app-navbar">
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <Nav.Item>
              <NavLink className="nav-link" exact to="/" >Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/add" >New Question</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/leaderboard" >Leader Board</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <span>{user !== undefined && `Hello, ${user.name}` }</span>
          </Navbar.Text>
          <Button
            variant="outline-secondary"
            className="btn-sm log-out"
            onClick={this.handleLogOut}
          >
            Log out
          </Button>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

function mapStateToProps({loggedUser, users}) {
  const user = users[loggedUser]
  return {
    user
  }
}

export default connect(mapStateToProps)(AppNav)
