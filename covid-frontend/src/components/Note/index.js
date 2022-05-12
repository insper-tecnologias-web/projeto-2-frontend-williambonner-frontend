import React from "react";
import "./index.css";

export default function Note(props) {
  return (
    <div className="card">
        <h3 className="card-title">Dados do Covid no Brasil:</h3>
        <div className="card-content">
            <ul>
                <li>Quantidade de casos hoje: {props.novos_casos}</li>
                <li>Total de casos: {props.total_casos}</li>
                <li>Quantidade de óbitos por Covid hoje: {props.novas_mortes}</li>
                <li>Total de óbitos: {props.total_mortes}</li>
            </ul>
        </div>
    </div>
  );
}