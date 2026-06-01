import "./Halloffame.css";
import { useState } from "react";
import Celebration from "../components/Celebration.jsx";
import Pokemon from "../components/Pokemon.jsx";
import TotalPokemons from "../components/TotalPokemons.jsx";
import { getPokemon } from "../services/pokemonService.js";
import InputText from "../components/ui/InputText.jsx";
import ShareButton from "../components/ui/ShareButton.jsx";


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
            {pokemons.length > 0 && <ShareButton pokemons={pokemons} />}
          </div>
        </div>
        <div>
          <p style={{ color: "#f3f4f6" }}>Pokémon selected: {pokemons.length}/6</p>
          <InputText value={name} onChange={(e) => setName(e.target.value)} />

          <button onClick={searchPokemon}>Search</button>
        </div>
      </main>
    </>
  );
}

export default Halloffame;
