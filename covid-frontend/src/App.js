import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";
import './App.css';

function App() {
  // const [note, setNote] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get("")
  //   .then((res) => setNote(res.data));
  // }, []);

  return (
    <div className="App">
      <div className="info-box">
        <img className="covid-logo" src="/covid-logo.png" />
        <Note />
        <img className="covid-mask" src="/covid-mask.png" />
      </div>
    </div>
  );
}

export default App;
