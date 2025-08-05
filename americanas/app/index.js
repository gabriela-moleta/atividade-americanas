import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Image, Dimensions, FlatList, TouchableOpacity, Text, ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function JewelryStore() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const carouselProducts = [
        { 
            id: '1', 
            uri: 'https://cdn.dooca.store/239/products/avcoopwxt60li1xjtvaq2qmd537wxg8nb5uj_640x640+fill_ffffff.jpeg?v=1655052001&webp=0',
            name: 'Colar de Diamante',
            price: 'R$ 2.499,90',
            description: 'Colar em ouro 18k com diamantes naturais, peça exclusiva'
        },
        { 
            id: '2', 
            uri: 'https://cdn.shopify.com/s/files/1/0562/0241/3065/products/brinco-de-ouro-18k-pingente-perola-cultivada-01_800x.jpg?v=1645568131',
            name: 'Brincos de Pérola',
            price: 'R$ 1.299,90',
            description: 'Brincos em ouro 18k com pérolas cultivadas, elegância atemporal'
        },
        { 
            id: '3', 
            uri: 'https://images.tcdn.com.br/img/img_prod/1148434/anel_solitario_ouro_18k_com_diamante_0_25ct_1_3c1f5c1c8c0c5c4f3d1d5a9f3b4c4c4c.jpg',
            name: 'Anel Solitário',
            price: 'R$ 3.899,90',
            description: 'Anel em ouro 18k com diamante central 0.5ct, acabamento brilhante'
        },
    ];

    const featuredProducts = [
        {
            id: '1',
            uri: 'https://mail.google.com/mail/u/0?ui=2&ik=ceb4af4328&attid=0.8&permmsgid=msg-f:1839183120111509015&th=1986174da7241e17&view=fimg&fur=ip&permmsgid=msg-f:1839183120111509015&sz=s0-l75-ft&attbid=ANGjdJ81Tr1DmPY0F6kvRkVVPtn_DFFYgRa5yYngfxFabdC1s15TzW0byYnC0hAEOHSYgf3s0b2fD-ZxdHP4yVK8Ymn1D7_404zSWLBaXYfdL3Y7r4VAESknB6-2DmA&disp=emb&realattid=ii_mdrnj44f7&zw',
            name: 'Pulseira Italiana',
            price: 'R$ 1.899,90',
            description: 'Pulseira em ouro 18k, corrente italiana 4mm'
        },
        {
            id: '2',
            uri: 'https://mail.google.com/mail/u/0?ui=2&ik=ceb4af4328&attid=0.4&permmsgid=msg-a:r-3170493117104551944&th=198617477199f097&view=fimg&fur=ip&permmsgid=msg-a:r-3170493117104551944&sz=s0-l75-ft&attbid=ANGjdJ_X6mbm1fFb4NPDv54NZtIzpbeoeFvFuizyDYXftmX72J1bRg17ihIDwaRO0-5XMQF0Ij4FKcgZjpfy53mzA_lwzhiQRjkB1Is1jJGuWzxyNukZeQ2bQHVpqno&disp=emb&realattid=ii_mdrnhtve3&zw',
            name: 'Anel de Zircônia',
            price: 'R$ 799,90',
            description: 'Anel em ouro 18k com zircônia cúbica, brilho intenso'
        },
        {
            id: '3',
            uri: 'https://mail.google.com/mail/u/0?ui=2&ik=ceb4af4328&attid=0.4&permmsgid=msg-f:1839183120111509015&th=1986174da7241e17&view=fimg&fur=ip&permmsgid=msg-f:1839183120111509015&sz=s0-l75-ft&attbid=ANGjdJ_2rFNvDRJytWtownMpH17p8wGrUXdskfFVkNf4hkQztX7ctNNahwvtVEFFdN5YHyhRnzGQL--Vt2qPfLkav8AORB2Mnu7oP1RTORRN7I8OCUQPojuJo26c5D0&disp=emb&realattid=ii_mdrnh19r3&zw',
            name: 'Colar Cubano',
            price: 'R$ 3.299,90',
            description: 'Colar em ouro 18k, corrente cubana 8mm'
        },
        {
            id: '4',
            uri: 'https://cdn.shopify.com/s/files/1/0562/0241/3065/products/brinco-de-ouro-18k-argola-01_800x.jpg?v=1645568131',
            name: 'Argolas Douradas',
            price: 'R$ 599,90',
            description: 'Brincos argola em ouro 18k, diversos tamanhos'
        }
    ];

    const renderCarouselItem = ({ item }) => {
        return (
            <View style={styles.carouselItemContainer}>
                <Image
                    source={{ uri: item.uri }}
                    style={styles.carouselImage}
                    resizeMode="cover" 
                />
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <Text style={styles.productDescription}>{item.description}</Text>
                </View>
            </View>
        );
    };

    const renderProductItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.productItem}>
                <Image
                    source={{ uri: item.uri }}
                    style={styles.productImage}
                    resizeMode="cover"
                />
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <Text style={styles.productDescription}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / (Dimensions.get('window').width * 0.8));
        setActiveIndex(index);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#d4af37" barStyle="light-content" />
            
            {/* Banner de Boas-Vindas */}
            <View style={styles.welcomeBanner}>
                <Text style={styles.welcomeTitle}>Bem-vindo à Joalheria Lux</Text>
                <Text style={styles.welcomeSubtitle}>Jóias que contam histórias</Text>
            </View>
            
            {/* Barra de Pesquisa */}
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={22} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Busque por colares, anéis, brincos..."
                        placeholderTextColor="#888"
                    />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Destaques */}
                <Text style={styles.sectionTitle}>Destaques</Text>
                <FlatList
                    ref={flatListRef}
                    data={carouselProducts}
                    renderItem={renderCarouselItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={false}
                    decelerationRate="fast"
                    snapToInterval={Dimensions.get('window').width * 0.9 + 10}
                    snapToAlignment="center"
                    onScroll={handleScroll}
                    contentContainerStyle={styles.carouselList}
                />
                <View style={styles.paginationContainer}>
                    {carouselProducts.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                index === activeIndex ? styles.paginationDotActive : null
                            ]}
                        />
                    ))}
                </View>

                {/* Coleções */}
                <Text style={styles.sectionTitle}>Nossas Coleções</Text>
                <View style={styles.collectionsContainer}>
                    <TouchableOpacity style={styles.collectionItem}>
                        <Image
                            source={{ uri: 'https://cdn.shopify.com/s/files/1/0562/0241/3065/files/colecao-ouro-18k_800x.jpg?v=1645568131' }}
                            style={styles.collectionImage}
                        />
                        <Text style={styles.collectionName}>Ouro 18k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.collectionItem}>
                        <Image
                            source={{ uri: 'https://cdn.shopify.com/s/files/1/0562/0241/3065/files/colecao-diamantes_800x.jpg?v=1645568131' }}
                            style={styles.collectionImage}
                        />
                        <Text style={styles.collectionName}>Diamantes</Text>
                    </TouchableOpacity>
                </View>

                {/* Produtos em Destaque */}
                <Text style={styles.sectionTitle}>Nossas Jóias</Text>
                <FlatList
                    data={featuredProducts}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.productRow}
                    scrollEnabled={false}
                />

                {/* Sobre a Loja */}
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutTitle}>Joalheria Lux</Text>
                    <Text style={styles.aboutText}>
                        Desde 1985 criando peças exclusivas que marcam os momentos mais especiais da sua vida. 
                        Nossas jóias são feitas com os melhores materiais e acabamento impecável.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcomeBanner: {
        backgroundColor: '#d4af37', // Dourado
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    welcomeSubtitle: {
        fontSize: 16,
        color: '#fff',
        fontStyle: 'italic',
    },
    searchBarContainer: {
        backgroundColor: '#d4af37',
        padding: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 24,
        paddingHorizontal: 15,
        height: 44,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        margin: 20,
        marginBottom: 15,
    },
    carouselList: {
        paddingLeft: 20,
    },
    carouselItemContainer: {
        width: Dimensions.get('window').width * 0.9,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    carouselImage: {
        width: '100%',
        height: 200,
    },
    productInfo: {
        padding: 15,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: '#d4af37',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: '#d4af37',
        width: 20,
    },
    collectionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    collectionItem: {
        width: '48%',
    },
    collectionImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    collectionName: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    productRow: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    productItem: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: 150,
    },
    aboutContainer: {
        padding: 20,
        margin: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    aboutText: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        textAlign: 'center',
    },
});