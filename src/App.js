import './App.css';
import MyfirstComponent from './MyFirstComponent'
const myFirstVariable = 'this is my first variable';
const myFirstClassNameInReact = 'mfcnir';
const htmlForApp = <button>Send</button>;
const handleClicEvent = (e) => {
  console.log('Button clicked!')
  console.log(e.target.innerHTML)
};
const addAnotherHTML = buttonText => {
  return <button>{buttonText}</button>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>My first jsx element</div>
        <div>{myFirstVariable}</div>
        <div className={myFirstClassNameInReact}>My first className Element</div>
        {htmlForApp}
        {addAnotherHTML('Save')}
        <MyfirstComponent />
        <MyfirstComponent />
        <MyfirstComponent />
        <MyfirstComponent />
        <button onClick={handleClicEvent}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
