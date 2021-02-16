import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  // get and set textInput
  const [textInput, setTextInput] = useState("");

  // sorting function
  const sorting = (a, b) => {
    let fa = a.name.toLowerCase();
    let fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      {/**
       Insert here the input tag
       **/}
      <input
        placeholder="Pokemon name. Eg: Charizard"
        type="text"
        name="searchText"
        onChange={(e) =>
          setTextInput(e.target.value.trim().toLocaleLowerCase())
        }
      />
      <div className="cards">
        {/**
        Filter pokemons data and map them to return an array of CardItems.
         */}
        {pokemons
          .filter((pokemon) => pokemon.name.includes(textInput))
          .sort((a, b) => sorting(a, b))
          .map((pokemon, idx) => (
            <CardItem key={idx} name={pokemon.name} sprite={pokemon.sprite} />
          ))}
      </div>
    </div>
  );
}
