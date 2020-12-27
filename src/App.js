//import logo from './logo.svg';
import logo from './thinking.png';
import './App.css';
import MyComponent from './MyComponent';
import Name from './Name';
import FunFacts from './FunFacts';
import ThingsLike from './ThingsLike';
import Example from './Example';
import Button from './Button';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <h1>Hello World!</h1>
      <MyComponent></MyComponent>
      <img src={logo} className="App-logo" alt="logo" />
      <Name FirstName="Renee" LastName="Watkins"></Name>
      <Name FirstName="Oliver" LastName="Carver"></Name>
      <Name FirstName="Jacob" LastName="Veigl"></Name>
      <FunFacts></FunFacts>
      <ThingsLike></ThingsLike>
      <Example />
      <Button />
    </div>
  );
}

export default App;
