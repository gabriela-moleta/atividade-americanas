import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.aboutText}>
                Nossa loja de joias oferece as peças mais refinadas e exclusivas, 
                cuidadosamente selecionadas para encantar você. Trabalhamos com os 
                melhores materiais e designs para criar joias que contam histórias 
                e marcam momentos especiais.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F8f8ff',
    },
    aboutText: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 28,
        color: '#333',
    },
});

export default AboutScreen;