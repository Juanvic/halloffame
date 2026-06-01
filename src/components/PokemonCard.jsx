import styles from "./PokemonCard.module.css";

function PokemonCard({ pokemon, onRemove }) {
  return (
    <div
      className="creature_image"
    >
      <h2 className="pokemon_name">{pokemon.name}</h2>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

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

      <button onClick={() => onRemove(pokemon.id)}>Remove</button>
    </div>
  );
}

export default PokemonCard;
