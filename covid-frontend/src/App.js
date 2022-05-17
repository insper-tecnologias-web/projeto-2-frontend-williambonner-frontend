import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";
import './App.css';

function App() {
    
  const [note, setNote] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get("https://httpbin.org/get")
  //   .then((res) => {
  //     setNote({"a": [1,2,3,4]});
  //     console.log("Rodou UseEffect");
  //   })
  //   // .then((res) => setNote(res.data));
  // }, []);

  return (
    <div className="App">
        <div className="info-box">
          <img className="covid-logo" src="/covid-logo.png" />
          <Note>{note}</Note>
          <img className="covid-mask" src="/covid-mask.png" />
        </div>
        <button className="btn" type="submit" onClick={() => setNote()}>Quero informações!</button>     
    </div>
  );
}

export default App;
