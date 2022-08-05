import {useEffect} from "react";
import './App.css';
import {urlTo} from './helpers';

function App() {
  useEffect(() => {
    console.log(urlTo('/api/things'))
    fetch(urlTo('/api/things'))
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);

  return (
    <div className="App">
      :)
    </div>
);
}

export default App;
