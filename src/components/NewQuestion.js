import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {handleAddQuestion} from '../actions/questions'


class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  }

  optionOneOnChange = (event) => {
    event.preventDefault()
    this.setState({
      optionOne: event.target.value
    })
  }

  optionTwoOnChange = (event) => {
    event.preventDefault()
    this.setState({
      optionTwo: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const {optionOne, optionTwo} = this.state
    this.props.dispatch(handleAddQuestion(optionOne, optionTwo))
    this.setState({
      optionOne: "",
      optionTwo: "",
    })
  }

  render() {
    return (
      <div className="new-question">
        <Card>
          <Card.Header as="h2">Create new question</Card.Header>
          <Card.Body>
            <Card.Title>Would you rather...</Card.Title>
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col>
                  <Form.Control value={this.state.optionOne} placeholder="Enter option one here" onChange={this.optionOneOnChange}/>
                </Col>
              </Row>
              or
              <Row>
                <Col>
                  <Form.Control value={this.state.optionTwo} placeholder="Enter option two here" onChange={this.optionTwoOnChange}/>
                </Col>
              </Row>
              <Button type="submit" variant="success">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default connect()(NewQuestion)
