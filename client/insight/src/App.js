import './App.css';
import Homepage from './components/Homepage'
import Entry from './components/Entry'
import News from './news';

function App() {
  return (
    <div className="App-header">
      <Homepage />
      <Entry />
      <News />
    </div>
  );
}

export default App;
