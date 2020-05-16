import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Question extends Component {
  render() {
    const {question, users} = this.props
    const author = users[question.author]

    return (
      <Card className="question">
        <Card.Header>{author.name} asks:</Card.Header>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4">
              <Card.Img variant="top" src={author.avatarURL} className="avatar"/>
            </div>
            <div className="col-md-8">
            <Card.Body className="card-block px-2">
              <Card.Title>Would you rather?</Card.Title>
              <Card.Text>
                ...{question.optionOne.text}...
              </Card.Text>
              <Button variant="primary">View poll</Button>
             </Card.Body>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

function mapStateToProps({questions, users}, {id}) {
  const question = questions[id]
  return {
    question,
    users,
  }
}

export default connect(mapStateToProps)(Question)
