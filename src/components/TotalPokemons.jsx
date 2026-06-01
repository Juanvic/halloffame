import { useEffect, useState } from "react";
import { getTotalPokemons } from "../services/pokemonService";

function TotalPokemons() {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTotal() {
      try {
        const quantidade = await getTotalPokemons();
        setTotal(quantidade);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadTotal();
  }, []);

  if (loading) {
    return <p>Loading all Pokémon...</p>;
  }

  return (
    <h2>
      All Pokémons avaiable: {total}
    </h2>
  );
}

export default TotalPokemons;