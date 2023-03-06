import './App.css';
import './index.css';
import Result from './Result';
import Summary from './Summary';

function App() {
   const myStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div className="App" style={myStyle}>
      <div className="container">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
