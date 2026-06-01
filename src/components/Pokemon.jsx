import PokemonCard from "../components/PokemonCard";

function Pokemon({ pokemons, removePokemon }) {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onRemove={removePokemon}
        />
      ))}
    </>
  );
}

export default Pokemon;
