
import './App.css';
import Axios from 'axios';

function App() {
  const loadData = () => {
    Axios.get('http://localhost:3001/api');

  }
  return (
    <div className="App" onClick={loadData}>
      BLA CLICK
    </div>
  );
}

export default App;
