import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Ignite
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121015'
    },
    title: {
        color: '#fff'
    }
})