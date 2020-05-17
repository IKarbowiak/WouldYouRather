import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import {handleSaveAnswer} from '../actions/questions'


class Pool extends Component {
  state = {
    answer: "optionOne"
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({
      answer: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const {answer} = this.state
    const {dispatch, question} = this.props
    dispatch(handleSaveAnswer(question.id, answer))
  }

  render() {
    const {question} = this.props
    return (
      <Card.Body className="card-block px-2">
      <Card.Title>Would you rather?</Card.Title>
      <form onSubmit={this.onSubmit}>
        <input
          type="radio"
          id="optionOne"
          name="answer"
          value="optionOne"
          checked={this.state.answer === 'optionOne'}
          onChange={this.onChange}
        />
        <label htmlFor="male">{question.optionOne.text}</label><br />
        <input
          type="radio"
          id="optionTwo"
          name="answer"
          value="optionTwo"
          checked={this.state.answer === 'optionTwo'}
          onChange={this.onChange}
        />
        <label >{question.optionTwo.text}</label><br />
        <Button type="submit" variant="success">Submit</Button>
      </form>
    </Card.Body>
    )
  }
}

function mapStateToProps({questions}, {id}) {
  const question = questions[id]
  return {
    question,
  }
}

export default connect(mapStateToProps)(Pool)
