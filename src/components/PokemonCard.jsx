import styles from "./PokemonCard.module.css";
import { TiDelete } from "react-icons/ti";

function PokemonCard({ pokemon, onRemove }) {
  return (
    <div className={styles.creature_image}>
      <h2 className={styles.pokemon_name}>{pokemon.name}</h2>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        loading="lazy"
      />

      {/* <p># {pokemon.id}</p> */}
      {/* <p>
        <strong>Types:</strong>
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {pokemon.types.map((item) => (
          <li key={item.type.name}>{item.type.name}</li>
        ))}
      </ul> */}

      {/* Fazer checkbox para clicar se é shiny ou não e trocar a sprite */}
      {/* <div>
        <label for="isShiny">Shiny: </label>
        <input type="checkbox" name="isShiny"></input>
      </div> */}

      <button
        onClick={() => onRemove(pokemon.id)}
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <TiDelete color="red" size={24} title="Remove" />
      </button>
    </div>
  );
}

export default PokemonCard;
