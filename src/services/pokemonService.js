import { POKE_API_URL } from "../constants/api";

export async function getPokemon(nome) {
  const response = await fetch(
    `${POKE_API_URL}/pokemon/${nome.toLowerCase()}`
  );

  if (!response.ok) {
    throw new Error("Pokémon não encontrado");
  }

  return await response.json();
}

export async function getTotalPokemons() {
  const response = await fetch(
    `${POKE_API_URL}/pokemon`
  );

  if (!response.ok) {
    throw new Error("Erro ao consultar a PokéAPI");
  }

  const data = await response.json();

  return data.count;
}