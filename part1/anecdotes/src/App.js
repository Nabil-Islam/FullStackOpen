import { useState } from 'react'

const Heading = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
   'If it hurts, do it more often.',
   'Adding manpower to a late software project makes it later!',
   'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
   'Premature optimization is the root of all evil.',
   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
   'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])

  const handleRandomClick = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length-1)))
  }

  const handleVoteClick = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1 
    setPoints(pointsCopy)
  }

  const indexOfMax = (arr) => {
    if (arr.length === 0) {
      return -1
    }

    let max = arr[0]
    let maxIndex = 0

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i
        max = arr[i]
      }
    }
    return maxIndex
  }

  const MaxVotes = indexOfMax(points)

  return (
    <div>
      <Heading text = 'Anecdote of the day' />
      {anecdotes[selected]}<br/>
      <Button text = 'Next anecdote' handleClick={handleRandomClick} />
      <Button text = 'Votes' handleClick={handleVoteClick} />
      <Heading text = 'Anecdote with most votes' />
      {anecdotes[MaxVotes]}
    </div>
  )
}

export default App;
