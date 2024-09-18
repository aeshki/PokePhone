import { Image, StyleSheet, Text, View } from 'react-native';

export default function BottomTabIcon({ title, focused, component }) {
    const Icon = component;

    return (
        <View style={styles.container}>
            {Icon && <Icon height={28} width={28} fill={focused ? 'yellow' : 'white'} />}
            <Text style={styles.title(focused)}>{ title }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: (active) => ({
        fontWeight: 800,
        color: active ? 'yellow' : 'white'
    })
});