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
        {props.part} {props.excersize}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0].part} excersize = {props.parts[0].excersize}/>
      <Part part = {props.parts[1].part} excersize = {props.parts[1].excersize}/>
      <Part part = {props.parts[2].part} excersize = {props.parts[2].excersize}/>
    </div>
  )
}



const Total = (props) => {
  console.log(props)
  return (
    <p> Number of excersizes {props.parts[0].excersize + props.parts[1].excersize + props.parts[2].excersize} </p>
  )
}


const App = () => {

  const contents = {

   course : 'Half Stack application development',
 
   parts : [
      {
        part: 'Fundamentals of react', 
        excersize: 10
      },

      {
        part: 'Using props to pass data', 
        excersize: 7
      },

      {
        part: 'State of a component', 
        excersize: 14
      }
    ]
}

  return (
    <div>
      <Header course = {contents.course}/>
      <Content parts = {contents.parts}/>
      <Total  parts = {contents.parts}/>
    </div>
  );
}

export default App;
