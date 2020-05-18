import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'


class Results extends Component {
  render () {
    const {question, loggedUser} = this.props
    const optionOneVotes = question.optionOne.votes
    const optionTwoVotes = question.optionTwo.votes
    const numOfVotes = optionOneVotes.length + optionTwoVotes.length
    const optionOnePercent = Math.round((optionOneVotes.length / numOfVotes) * 100)
    const optionTwoPercent = Math.round((optionTwoVotes.length / numOfVotes) * 100)

    return (
      <Card.Body className="card-block px-2">
        <h4 style={{textAlign: "center"}}>Results</h4>
        <h6>Would you rather...</h6>
        <div className={`alert ${optionOneVotes.includes(loggedUser) ? 'alert-success' : 'border border-secondary'}`}>
          <p>
              ...{question.optionOne.text}?
          </p>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width: `${optionOnePercent}%`}}
              aria-valuenow={optionOnePercent}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {optionOnePercent}%
            </div>
          </div>
          <div style={{textAlign: "center"}}>
            {optionOneVotes.length} out of {numOfVotes}
          </div>
        </div>
        <div className={`alert ${optionTwoVotes.includes(loggedUser) ? 'alert-success' : 'border border-secondary'}`}>
          <p>
            ...{question.optionTwo.text}?
          </p>
          <div className="progress">
            <div
              className="progress-bar bg-secondary"
              role="progressbar"
              style={{width: `${optionTwoPercent}%`}}
              aria-valuenow={optionTwoPercent}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {optionTwoPercent}%
            </div>
          </div>
          <div style={{textAlign: "center"}}>
            {optionTwoVotes.length} out of {numOfVotes}
          </div>
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