import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='error'>
          This is error
        </p>
        <p className='information'>This is information</p>
      </header>
    </div>
  );
}

export default App;
