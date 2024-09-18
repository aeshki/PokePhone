const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (offset, limit) => {
  return await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`)
    .then((rep) => rep.json())
    .then((json) => {
      return Promise.all(
        json.results.map(({ name }) => fetchPokemonDetail(name))
      );
    });
}

export const fetchPokemonDetail = async (name) => {
  return await fetch(`${BASE_URL}/pokemon/${name}`)
    .then((rep) => rep.json())
    .then((data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(typeInfo => typeInfo.type.name),
    }));
}