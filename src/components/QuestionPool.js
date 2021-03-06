import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Results from './Results'
import Pool from './Pool'


class QuestionPool extends Component {
  render () {
    const {question, users, loggedUser, id} = this.props

    if (question === undefined) {
      return <Redirect to="/404" />
    }

    const author = users[question.author]
    const showResults = question.id in users[loggedUser].answers

    return (
      <Card className="pool">
        <Card.Header>{author.name} asks:</Card.Header>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 card-img-cont">
              <Card.Img variant="top" src={author.avatarURL} className="avatar"/>
            </div>
            <div className="col-md-8">
              {showResults === true
                ? <Results id={id} />
                : <Pool id={id} />
              }
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

function mapStateToProps({questions, users, loggedUser}, props) {
  const {id} = props.match.params
  const question = questions[id]
  return {
    question,
    users,
    loggedUser,
    id,
  }
}

export default connect(mapStateToProps)(QuestionPool)
