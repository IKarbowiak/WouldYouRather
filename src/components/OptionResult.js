import React from 'react'


export default function OptionResult(props) {
  const {optionText, userAnswer, optionPercent, optionVotesNum, numOfVotes} = props
  return (
    <div
      className={`alert ${userAnswer === true
        ? 'alert-success'
        : 'border border-secondary'}
      `}
    >
      <p>
          ...{optionText}?
      </p>
      <div className="progress">
        <div
          className={`progress-bar bg-${userAnswer === true
            ? 'success'
            : 'secondary'}
          `}
          role="progressbar"
          style={{width: `${optionPercent}%`}}
          aria-valuenow={optionPercent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {optionPercent}%
        </div>
      </div>
      <div style={{textAlign: "center"}}>
        {optionVotesNum.length} out of {numOfVotes}
        <br/>
        {userAnswer === true && <span style={{fontWeight: "bold"}}>Your vote!</span>}
      </div>
    </div>
  )
}
