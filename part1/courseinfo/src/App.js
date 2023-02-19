const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
        {props.part} {props.excersizes}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props[0].part} excersize = {props[0].excersize}/>
      <Part part = {props[1].part} excersize = {props[1].excersize}/>
      <Part part = {props[2].part} excersize = {props[2].excersize}/>
    </div>
  )
}



const Total = (props) => {
  console.log(props)
  return (
    <p> Number of excersizes {props.one+props.two+props.three} </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
 
  const stuff = [
    { part: 'Fundamentals of react', excersize: 10},
    { part: 'Using props to pass data', excersize: 7},
    { part: 'State of a component', excersize: 14}
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content stuff = {stuff}/>
      <Total one = {stuff[0].excersize} two = {stuff[1].excersize} three = {stuff[2].excersize} />
    </div>
  );
}

export default App;
