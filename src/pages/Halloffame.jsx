import "./Halloffame.css";
import { useState } from "react";
import Celebration from "../components/Celebration.jsx";
import Pokemon from "../components/Pokemon.jsx";
import TotalPokemons from "../components/TotalPokemons.jsx";
import { getPokemon } from "../services/pokemonService.js";

function Halloffame() {
  const [name, setName] = useState("");
  const [pokemons, setPokemons] = useState([]);

  async function searchPokemon() {
    try {
      if (!name.trim()) return;

      if (pokemons.length >= 6) {
        alert("Your team can have only 6 Pokémon");
        return;
      }

      const data = await getPokemon(name);

      const pokemonExistente = pokemons.some(
        (pokemon) => pokemon.id === data.id,
      );

      if (pokemonExistente) {
        alert("This Pokémon has been already added.");
        return;
      }

      setPokemons([...pokemons, data]);
      setName("");
    } catch (error) {
      alert(error.message);
    }
  }

  function removePokemon(id) {
    setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
  }

  return (
    <>
      <main>
        <div className="frame">
          <Celebration />
          <div className="card">
            <Pokemon pokemons={pokemons} removePokemon={removePokemon} />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Select your team"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={searchPokemon}>Search</button>

          <p>Pokémon selected: {pokemons.length}/6</p>
        </div>
        <TotalPokemons />
      </main>
    </>
  );
}

export default Halloffame;
