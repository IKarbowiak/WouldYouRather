import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


class LeaderBoard extends Component {
  render () {
    const {users} = this.props
    console.log('props', this.props)
    return (
      <div className="leaders-board">
        {users.map(user => (
          <Card key={user.id}>
            <div className="container">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <Card.Img variant="top" src={user.avatarURL} className="avatar"/>
                </div>
                <div className="col-md-6">
                  <h4>{user.name}</h4>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Answered questions:</td>
                        <td>{Object.keys(user.answers).length}</td>
                      </tr>
                      <tr>
                        <td>Created questions:</td>
                        <td>{user.questions.length}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="col-md-3">
                  <h4>Score</h4>
                  {Object.keys(user.answers).length + user.questions.length}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.values(users).sort((a, b) => (
      (Object.keys(b.answers).length + b.questions.length)
      - (Object.keys(a.answers).length + a.questions.length)
      )
    )
  }
}

export default connect(mapStateToProps)(LeaderBoard)
