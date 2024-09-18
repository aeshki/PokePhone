import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'; // Importation du hook
import PokeCard from '../components/PokeCard';

export default function DiscoveryScreen() {
  const { pokemons, loading, error, loadMorePokemons, hasMore } = useInfiniteScroll(20);

  if (loading && pokemons.length === 0) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PokeCard {...item} />}
        numColumns={3}
        onEndReached={() => hasMore && loadMorePokemons()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading ? <Text>Loading more...</Text> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
