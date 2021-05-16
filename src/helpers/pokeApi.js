export const pokeApi = async () => {
  const randomNumber = Math.floor(Math.random() * (600 - 1) + 1);
  const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw Error(`Error : ${res.url}${res.status}${res.statusText}`);
  }
  const newPokemon = await res.json();

  return newPokemon;
};
