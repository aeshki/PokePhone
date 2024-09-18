import { useState, useEffect } from 'react';
import { fetchPokemons } from '../services/pokeApiService';

export const useInfiniteScroll = (limit = 20) => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePokemons = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const newPokemons = await fetchPokemons(offset, limit);
      setPokemons((prev) => [...prev, ...newPokemons]);
      setOffset((prevOffset) => prevOffset + limit);

      if (newPokemons.length < limit) setHasMore(false);
    } catch ({ message }) {
      setError(`Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMorePokemons();
  }, []);

  return { pokemons, loading, error, loadMorePokemons, hasMore };
};
