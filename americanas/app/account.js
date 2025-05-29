import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import erasedLogo from "../assets/erasedLogo.png";

const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={erasedLogo} 
                    style={{ width: 195, height: 100, marginTop: 100 }}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>
                    Para uma melhor experiência, entre ou cadastre-se 
                </Text>
            </View>

            <View style={styles.pressable}>
                <Pressable style={styles.buttonRed}>
                    <Text style={styles.buttonText}>Cadastrar conta</Text>
                </Pressable>
                <Pressable style={styles.buttonLight}>
                    <Text style={styles.buttonLightText}>Entrar com e-mail</Text>
                </Pressable>
            </View>

            <View style={styles.pressableTerms}>
                <Pressable style={styles.termButton}>
                    <Ionicons
                        name="chevron-forward-outline"
                        size={16}
                        style={styles.icon}
                    />
                    <Text style={styles.termText}>Aviso de Privacidade</Text>
                </Pressable>

                <Pressable style={styles.termButton}>
                    <Ionicons
                        name="chevron-forward-outline"
                        size={16}
                        style={styles.icon}
                    />
                    <Text style={styles.termText}>Suporte</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#22222',
    },
    text: {
        paddingTop: 20,
        fontWeight: '500',
        width: 200,
        justifyContent: 'center',
        textAlign: 'center',
    },
    pressable: {
        paddingTop: 35,
        margin: 5,
    },
    buttonRed: {
        backgroundColor: '#EE0000',
        width: 400,
        height: 50,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLight: {
        backgroundColor: '#F8f8ff',
        width: 400,
        height: 50,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500',
    },
    buttonLightText: {
        color: '#EE0000',
        fontWeight: '500',
    },
    pressableTerms: {
        width: '100%',
        height: 170,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    termButton: {
        width: 190,
        height: 100,
        borderRadius: 2,
        backgroundColor: '#F8f8ff',
        padding: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    termText: {
        color: '#000',
        fontWeight: '500',
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default FavoriteScreen;