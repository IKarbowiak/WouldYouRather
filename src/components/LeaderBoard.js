import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'


class LeaderBoard extends Component {
  render () {
    const {users} = this.props
    console.log('props', this.props)
    return (
      <div className="leaders-board">
        {users.map((user, index) => (
          <Card key={user.id} className="leader">
            <div className="container">
              <div className="row">
                <div className="col-md-1 place-cnt">
                  <span className="place">
                    {index + 1}
                  </span>
                </div>
                <div className="col-md-3 card-img-cont">
                  <Card.Img variant="top" src={user.avatarURL} className="avatar rounded"/>
                </div>
                <div className="col-md-6 leader-info">
                  <h4 className="leader-name">{user.name}</h4>
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
                <div className="col-md-2 score-cnt">
                  <span className="score">
                    <h4>Score</h4>
                    <span className="p-3 mb-2 bg-warning text-dark rounded-circle">
                      {Object.keys(user.answers).length + user.questions.length}
                    </span>
                  </span>
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
