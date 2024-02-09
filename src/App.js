import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#!">
          <img src={logo} className="App-logo" alt="logo" />
          <strong>React Starter Dev</strong>
        </a>
      </nav>
      <Layout />
    </div>
  );
}

export default App;
