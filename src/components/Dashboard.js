import React, {Component} from 'react'
import {connect} from 'react-redux'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Question from './Question'


class Dashboard extends Component {
  render () {
    const {answered, unanswered} = this.props
    return (
      <div className="dashboard">
        <Tabs defaultActiveKey="unanswered" id="dashboard-tab">
          <Tab eventKey="unanswered" title="Unanswered Questions" className='tab-content'>
            {unanswered.map(q => (
                <div key={q.id}>
                  <Question id={q.id}/>
                </div>
              ))}
          </Tab>
          <Tab eventKey="answered" title="Answered Questions" className='tab-content'>
            {answered.map(q => (
                <div key={q.id}>
                   <Question id={q.id}/>
                </div>
              ))}
          </Tab>
        </Tabs>
      </div>
    )
  }
}


function mapStateToProps({loggedUser, questions, users}) {
  const answered = users[loggedUser].answers
  return {
    answered: Object.values(questions).filter(q => q.id in answered)
      .sort((a, b) => b.timestamp - a.timestamp),
    unanswered: Object.values(questions).filter(q => !(q.id in answered))
      .sort((a, b) => b.timestamp - a.timestamp),
    users
  }
}

export default connect(mapStateToProps)(Dashboard)

