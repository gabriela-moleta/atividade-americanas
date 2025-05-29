import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [search, setSearch] = useState("");

    const categorias = [
        { id: '1', nome: 'Agro, indústria e comércio', rota: 'agro' },
        { id: '2', nome: 'Alimentos e bebidas', rota: 'aliments' },
        { id: '3', nome: 'Artes e Artesanato', rota: 'art' },
        { id: '4', nome: 'Artigos de festa', rota: 'party' },
        { id: '5', nome: 'Áudio e vídeo', rota: 'audio' },
        { id: '6', nome: 'Automotivo', rota: 'automotive' },
        { id: '7', nome: 'Bebês e higiene infantil', rota: 'babies' },
        { id: '8', nome: 'Beleza e perfumaria', rota: 'Beleza' },
        { id: '9', nome: 'Bem estar sexual', rota: 'BemEstarSexual' },
        { id: '10', nome: 'Brinquedos', rota: 'Brinquedos' },
        { id: '11', nome: 'Cabelos', rota: 'Cabelos' },
        { id: '12', nome: 'Calçados', rota: 'Calcados' },
        { id: '13', nome: 'Cama, mesa e banho', rota: 'CamaMesaBanho' },
        { id: '14', nome: 'Celulares e smartphones', rota: 'Celulares' },
        { id: '15', nome: 'Climatização', rota: 'Climatizacao' },
        { id: '16', nome: 'Computadores e Informática', rota: 'Informatica' },
        { id: '17', nome: 'Consoles e Games', rota: 'Games' },
        { id: '18', nome: 'Construção e ferramentas', rota: 'Construcao' },
        { id: '19', nome: 'Decoração', rota: 'Decoracao' },
        { id: '20', nome: 'Eletrodomésticos', rota: 'Eletrodomesticos' },
        { id: '21', nome: 'Esporte e lazer', rota: 'Esporte' },
        { id: '22', nome: 'Gift card', rota: 'GiftCard' },
        { id: '23', nome: 'Instrumentos musicais', rota: 'Instrumentos' },
        { id: '24', nome: 'Limpeza', rota: 'Limpeza' },
        { id: '25', nome: 'Livros', rota: 'Livros' },
        { id: '26', nome: 'Malas, mochilas e acessórios', rota: 'Malas' },
        { id: '27', nome: 'Moda', rota: 'Moda' },
        { id: '28', nome: 'Móveis', rota: 'Moveis' },
        { id: '29', nome: 'Música, filmes e séries', rota: 'MusicaFilmes' },
        { id: '30', nome: 'Papelaria', rota: 'Papelaria' },
        { id: '31', nome: 'Pet shop', rota: 'PetShop' },
        { id: '32', nome: 'Relógios e joias', rota: 'Relogios' },
        { id: '33', nome: 'Saúde e bem estar', rota: 'Saude' },
        { id: '34', nome: 'Seguros', rota: 'Seguros' },
        { id: '35', nome: 'Serviços', rota: 'Servicos' },
        { id: '36', nome: 'Suplementos e vitaminas', rota: 'Suplementos' },
        { id: '37', nome: 'Tables', rota: 'Tables' },
        { id: '38', nome: 'Telefonia', rota: 'Telefonia' },
        { id: '39', nome: 'Utilidades domésticas', rota: 'Utilidades' },
        { id: '40', nome: 'Vale presente', rota: 'ValePresente' },
    ];

    const categoriasFiltradas = categorias.filter(categoria =>
        categoria.nome.toLowerCase().includes(search.toLowerCase())
    );

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.rota, { categoria: item })}
        > 
            <Text style={styles.text}>{item.nome}</Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerBusca}>
                <View style={styles.searchBar}>
                    <EvilIcons name="search" size={24} color="black" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Busque aqui seu produto"
                        value={search}
                        onChangeText={setSearch}
                        returnKeyType="search"
                    />
                </View>
            </View>

            <FlatList
                data={categoriasFiltradas}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#22222',
        flex: 1,
    },
    containerBusca: {
        backgroundColor: '#ff0f35',
        paddingTop: 40,
        paddingBottom: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 24,
        paddingHorizontal: 14,
        paddingVertical: 4,
        marginHorizontal: 16,
    },
    searchInput: {
        flex: 1,
        color: '#888',
        fontSize: 16,
        padding: 0,
    },
    item: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
    },
    separator: {
        height: 1,
        marginHorizontal: 20,
        marginTop: 5,
    },
});

export default Home;