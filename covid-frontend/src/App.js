import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";
import Compare from "./components/Compare";
import './App.css';

function App() {

  // var estado = "brasil";
  const [estado, setEstado] = useState("brasil");

  function changeState(new_state) {
    setEstado(new_state);
  }

  const [note, setNote] = useState([]);
  const [country, setCountry] = useState("");
  const [otherNote, setOther] = useState([]);


  useEffect(() => {
    axios
    .get("http://localhost:8000/api/brasil")
    .then((res) => {
      setNote(res.data);
    });
  }, []);

  const changeCountry = (event) => {
    setCountry(event.target.value);
  }

  function getCountryData(event) {
    event.preventDefault()
    let message = `${country}`;
    console.log(message);
    axios
      .post("http://localhost:8000/api/comparacao", message)
      .then((res)=> {
        setOther(res.data);
        console.log(res.data);
      });
  }

  return (
    <div className="App">
        <button className="btn" type="submit" onClick={() => changeState("brasil")}>Quero informações do Brasil!</button>
        <form className="form-pais" onSubmit={getCountryData}>
          <select 
            className="form-name"
            type="text"
            onChange={changeCountry}
          >
            <option value={"Argentina"}>Argentina</option>
            <option value={"Bolivia"}>Bolívia</option>
            <option value={"Chile"}>Chile</option>
            <option value={"Colombia"}>Colômbia</option>
            <option value={"Ecuador"}>Equador</option>
            <option value={"Guyana"}>Guiana</option>
            <option value={"Paraguay"}>Paraguai</option>
            <option value={"Peru"}>Peru</option>
            <option value={"Suriname"}>Suriname</option>
            <option value={"Uruguay"}>Uruguai</option>
            <option value={"Venezuela"}>Venezuela</option>
            
          </select>
          <button className="btn" type="submit" onClick={() => changeState("compara")}>Quero um comparativo com o Brasil!</button>
        </form>
        <div className="info-box">
          <img className="covid-logo" src="/covid-logo.png" />
          {estado == "brasil"
            ? <Note Pais={note.Pais} NumNovosCasos={note.NumNovosCasos} NumCasos={note.NumCasos} NumNovasMortes={note.NumNovasMortes} NumMortes={note.NumMortes}></Note>
            : <Compare Pais={otherNote.Pais} NumNovosCasos={otherNote.NumNovosCasos} NumCasos={otherNote.NumCasos} NumNovasMortes={otherNote.NumNovasMortes} NumMortes={otherNote.NumMortes}></Compare>
          }
          <img className="covid-mask" src="/covid-mask.png" />
        </div>

    </div>
  );
}

export default App;
