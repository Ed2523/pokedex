import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const apiResponse = await axios.get("https://pokeapi.co/api/v2/pokemon");
    setPokemon(apiResponse.data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  console.log(pokemon);

  return (
    <div className='App'>
      <Header />
      <MainSection />
    </div>
  );
}

export default App;
