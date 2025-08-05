import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (!name || !email || !message) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        Alert.alert('Sucesso', 'Mensagem enviada com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fale Conosco</Text>
            <Text style={styles.subtitle}>Entre em contato com nossa equipe</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu nome completo"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="seu@email.com"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Mensagem</Text>
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Sua mensagem..."
                    multiline
                    numberOfLines={4}
                    value={message}
                    onChangeText={setMessage}
                />

                <Pressable style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Enviar Mensagem</Text>
                    <Ionicons name="send-outline" size={20} color="#FFF" />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8F8FF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#EE0000',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    form: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 15,
        fontSize: 16,
    },
    messageInput: {
        height: 120,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#EE0000',
        borderRadius: 5,
        padding: 15,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
    },
});

export default ContactScreen;