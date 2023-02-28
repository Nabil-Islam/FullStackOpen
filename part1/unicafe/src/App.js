import React, { useState } from 'react';

const Title = (props) => {
  console.log(props)
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const Heading = (props) => {
  console.log(props)
  return (
      <h2>{props.text}</h2>
    )
}

const Statisctic = ({statDic}) => {
  if (statDic[0].number === 0 && statDic[1].number === 0 && statDic[2].number === 0){
    return (
      <div>
        No feedback provided
      </div>
    )
  }
  return (
    <div>
        <p>{statDic[0].name} {statDic[0].number}</p>
        <p>{statDic[1].name} {statDic[1].number}</p>
        <p>{statDic[2].name} {statDic[2].number}</p>
        <p>{statDic[3].name} {statDic[3].number}</p>
        <p>{statDic[4].name} {statDic[4].number}</p>
        <p>{statDic[5].name} {statDic[5].number}</p>
    </div>    
  )
}

const App = () => {

  // Initialise state hooks to keep track of states of good, neutral and bad counters

  const [good, SetGood] = useState(0)
  const [neutral, SetNeutral] = useState(0)
  const [bad, SetBad] = useState(0)

  const totalVotes = good + neutral + bad

  // Initialises trackers with suffix "-T" to calculate weights of the total votes of each type
  // Good votes are weighted by +1, neutral votes are voted with 0 and bad votes are weighted with -1 
  const goodT = good 
  const neutralT = neutral * 0 
  const badT = bad * -1 

  const averageOfGoodVotes = (goodT + neutralT + badT)/3

  const positiveVotes = (goodT/totalVotes)

  const statDic = [
    {name :'good' , number : good},
    {name : 'neutral' , number : neutral}, 
    {name : 'bad', number : bad}, 
    {name : 'Total votes', number : totalVotes}, 
    {name: 'Average' , number : averageOfGoodVotes}, 
    {name: 'Percentage of positive votes' , number: positiveVotes}
  ]

  const handleGoodClick = () => {
    SetGood(good + 1)
  }

  const handleBadClick = () => {
    SetBad(bad + 1)
  }

  const handleNeutralClick = () => {
    SetNeutral (neutral + 1)
  }


  return (
    <div>
      <Title text = 'Please provide feedback'/>
      <Button handleClick = {handleGoodClick} text = 'Good'/>
      <Button handleClick = {handleNeutralClick} text = 'Neutral'/>
      <Button handleClick = {handleBadClick} text = 'Bad'/>
      <Heading text = 'Statistics'/>
      <Statisctic statDic={statDic} />
    </div>
    
  )
}

export default App;
