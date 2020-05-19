import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import OptionResult from './OptionResult'


class Results extends Component {
  render () {
    const {question, loggedUser} = this.props
    const optionOneVotes = question.optionOne.votes
    const optionTwoVotes = question.optionTwo.votes
    const numOfVotes = optionOneVotes.length + optionTwoVotes.length
    const optionOnePercent = Math.round((optionOneVotes.length / numOfVotes) * 100)
    const optionTwoPercent = Math.round((optionTwoVotes.length / numOfVotes) * 100)

    return (
      <Card.Body className="card-block px-2" style={{marginLeft: "1%"}}>
        <h4 style={{textAlign: "center"}}>Results</h4>
        <h6>Would you rather...</h6>
        <OptionResult
          optionText={question.optionOne.text}
          userAnswer={optionOneVotes.includes(loggedUser)}
          optionPercent={optionOnePercent}
          optionVotesNum={optionOneVotes.length}
          numOfVotes={numOfVotes}
        />
        <OptionResult
          optionText={question.optionTwo.text}
          userAnswer={optionTwoVotes.includes(loggedUser)}
          optionPercent={optionTwoPercent}
          optionVotesNum={optionTwoVotes.length}
          numOfVotes={numOfVotes}
        />
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