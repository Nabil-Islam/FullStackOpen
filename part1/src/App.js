import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} old</p>
    </div>
  )
}

const App = () => {
  const name = 'kaworu'
  const age = 10

  console.log("App is working well")
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = 'Shinji' age = {90+10} />
      <Hello name = 'Kaworu' age = {age}/>
    </div>
  )
}

/*function App() {
  console.log("Tesing component")

  const now = new Date()
  const a = 10 
  const b = 20 
  console.log(now, a+b)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world, the time is {now.toString()}</p>
        <p>{a} + {b} = {a+b}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
