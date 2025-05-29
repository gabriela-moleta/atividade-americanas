import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Favoritos</Text>
                <Ionicons name="search-outline" size={20} color="#fff"/>
            </View>

            <View style={styles.content}>
                <View style={styles.heartContainer}>
                    <Ionicons name="heart-outline" size={42} color="#FFF" />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Nenhum produto adicionado</Text>
                    <Text style={styles.subtext}>Você ainda não salvou nenhum produto na sua lista de favoritos.</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#Ffffff',
    },
    header: {
        width: '100%',
        height: '10%',
        paddingHorizontal: 20,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EE0000',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    content: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heartContainer: {
        backgroundColor: '#FF5555',
        borderRadius: 40,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        width: 320,
        paddingTop: 30,
        height: 100,
        textAlign: 'center',
    },
    text: {
        color: "#EE0000",
        bottom: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtext: {
        textAlign: 'center',
        width: '100%',
    },
});

export default FavoriteScreen;