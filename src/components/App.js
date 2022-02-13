import React from "react";
import axios from "../api/pokeapi";
import "../css/App.css";
import PokeImage from "./PokeImage";
import TypeCard from "./TypeCard";
import EffList from "./EffList";
import { type } from "@testing-library/user-event/dist/type";

class App extends React.Component {
  state = {
    startBtn: "show",
    effList: "hide",
    pokemon: "",
    type1: null,
    type2: null,
  };

  // Function to request random pokemon information from PokeAPI
  // returns pokemon name, type1, and type2 (if type2 exists)
  pokemonRequest = async () => {
    let pokeid = Math.floor(Math.random() * 300) + 1;
    const response = await axios.get(`/pokemon/${pokeid}`);

    this.setState({
      pokemon: response.data,
      type1: response.data.types[0].type.name,
    });

    if (response.data.types[1])
      this.setState({ type2: response.data.types[1].type.name });
  };

  // Function to get two random numbers
  // Also calls typeRequest
  typeGen = () => {
    let atkType = Math.floor(Math.random() * 18) + 1;
    let defType = Math.floor(Math.random() * 18) + 1;

    this.typeRequest(atkType, defType);
  };

  // Requests type data for 'attacking' type
  // Updates state of type1 and type2 based on generated typing
  typeRequest = async (atkType, defType) => {
    const apiAtkType = await axios.get(`/type/${atkType}`);
    const apiDefType = await axios.get(`/type/${defType}`);
    console.log(apiAtkType);
    this.setState({
      startBtn: "hide",
      effList: "show",
      type1: apiAtkType.data,
      type2: apiDefType.data,
    });
  };

  effCheck = (eff) => {
    // console.log(eff);
    if (this.state.type1.damage_relations[eff])
      console.log(this.state.type1.damage_relations[eff][0]);
  };

  render() {
    return (
      <div>
        <button className={this.state.startBtn} onClick={this.typeGen}>
          Start Game
        </button>
        <TypeCard type={this.state.type1} stance="attacking" />
        <br />
        <TypeCard type={this.state.type2} stance="defending" />
        <br />
        <div className={this.state.effList}>
          <EffList effCheck={this.effCheck} />
        </div>
        {/* <button onClick={this.pokemonRequest}>Click</button>
        <PokeImage pokemon={this.state.pokemon} />
        <TypeCard type1={this.state.type1} type2={this.state.type2} /> */}
      </div>
    );
  }
}

export default App;
