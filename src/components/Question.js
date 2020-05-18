import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'


class Question extends Component {
  toPool = (event, id) => {
    event.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  render() {
    const {question, users} = this.props
    const author = users[question.author]

    return (
      <Card className="question">
        <Card.Header>{author.name} asks:</Card.Header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 card-img-cont">
              <Card.Img variant="top" src={author.avatarURL} className="avatar rounded"/>
            </div>
            <div className="col-md-8">
                <Card.Title>Would you rather?</Card.Title>
                <Card.Text>
                  ...{question.optionOne.text}...
                </Card.Text>
                <Button
                  variant="outline-info"
                  onClick={e => this.toPool(e, question.id)}
                >
                  View poll
                </Button>
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

export default withRouter(connect(mapStateToProps)(Question))
