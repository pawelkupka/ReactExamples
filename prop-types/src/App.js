import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
          <Person />
          <Person name="Person 1" age="33" />
          <Person name="Person 2" age={20} />
          <Person name="Person incorrect age" age="abc" />
    </div>
  );
}

export default App;
