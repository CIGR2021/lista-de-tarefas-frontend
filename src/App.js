import Task from './components/task';
import Email from './components/e-mail';
import Call from './components/call';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Task />
        <Email />
        <Call />
      </header>
    </div>
  );
}

export default App;
