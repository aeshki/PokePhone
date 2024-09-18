import { StyleSheet, Text, View } from 'react-native';

export default function FavoriteScreen() {
    return (
        <View style={styles.container}>
            <Text>Favorite !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});