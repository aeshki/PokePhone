import { StyleSheet, View } from 'react-native';

export default function BaseTypeIcon({ bgColor, children }) {
    return (
        <View style={styles.container(bgColor)}>
            { children }
        </View>
    );
};

const styles = StyleSheet.create({
    container: (bgColor) => ({
        backgroundColor: bgColor,
        borderRadius: 100,
        padding: 5
    })
});