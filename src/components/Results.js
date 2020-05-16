import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'


class Results extends Component {
  render () {
    const {question, loggedUser} = this.props
    const optionOneVotes = question.optionOne.votes
    const optionTwoVotes = question.optionTwo.votes
    const numOfVotes = optionOneVotes.length + optionTwoVotes.length

    return (
      <Card.Body className="card-block px-2">
        <h4>Results</h4>
        <div className={`alert ${optionOneVotes.includes(loggedUser) ? 'alert-success' : 'alert-dark'}`}>
        <p>
            Would you rather {question.optionOne.text}?
          </p>
          {optionOneVotes.length} out of {numOfVotes}
        </div>
        <div className={`alert ${optionTwoVotes.includes(loggedUser) ? 'alert-success' : 'alert-dark'}`}>
        <p>
            Would you rather {question.optionTwo.text}?
          </p>
          {optionTwoVotes.length} out of {numOfVotes}
        </div>
      </Card.Body>
    )
  }
}

function mapStateToProps({questions, loggedUser}, {id}) {
  const question = questions[id]
  return {
    question,
    loggedUser,
  }
}

export default connect(mapStateToProps)(Results)