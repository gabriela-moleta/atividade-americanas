import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Image, Dimensions, FlatList, TouchableOpacity, Text, ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';


export default function Home() {
     
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    
    
 
    const carouselImages = [
        { id: '1', uri: 'https://images-americanas.b2w.io/spacey/acom/2024/07/26/compre-online-e-retire-na-loja-mob-c492ec00c5f2.png' },
        { id: '2', uri: 'https://images-americanas.b2w.io/spacey/acom/2024/07/26/estrela_mob-bf525f7a77bc.png' },
        { id: '3', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-T1oSxlAu7FM7IxEnDh7UZVINTAuT2umSQ&s' },
       
    ];

    const renderCarouselItem = ({ item, index }) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => console.log(`Imagem ${index + 1} clicada`)}
            >
                <View style={styles.carouselItemContainer}>
                    <Image
                        source={{ uri: item.uri }}
                        style={styles.carouselImage}
                        resizeMode="cover" 
                    />
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
           <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
            
            
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={22} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="busque aqui seu produto"
                        placeholderTextColor="#888"
                    />
                </View>
            </View>
            

            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                <View style={{ height: 10 }} />
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'https://passageirodeprimeira.com/wp-content/uploads/2021/07/passageirodeprimeira.com-tudoazulamericanas-americanas.jpg',
                        }}
                        style={{
                            width: Dimensions.get('window').width * 0.99,
                            height: Dimensions.get('window').width * 0.38,
                            borderRadius: 0,
                        }}
                        resizeMode="cover"
                    />
                </View>
                
               
                <View style={styles.carouselContainer}>
                    <Text style={styles.carouselTitle}></Text>
                    <FlatList
                        ref={flatListRef}
                        data={carouselImages}
                        renderItem={renderCarouselItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={false}
                        decelerationRate="fast"
                        snapToInterval={Dimensions.get('window').width * 0.98 + 10}
                        snapToAlignment="center"
                        onScroll={handleScroll}
                        contentContainerStyle={styles.carouselList}
                        nestedScrollEnabled={true}
                    />
                    <View style={styles.paginationContainer}>
                        {carouselImages.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.paginationDot,
                                    index === activeIndex ? styles.paginationDotActive : null
                                ]}
                            />
                        ))}
                    </View>
                </View>
               
                
                
                <View style={styles.gridContainer}>
                    <View style={styles.gridRow}>
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 1 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KcjjZvm4P7lL_nGUS8xIIAeT2FhozWbzag&s' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 2 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://americanas.vtexassets.com/assets/vtex.file-manager-graphql/images/68f70d0e-b1ad-4739-a68b-93eb822f680d___c783a9701c44e2bb2765e743e8807594.png' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.gridRow}>
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 3 clicada')}
                        >
                            <Image
                                source={{ uri: 
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqbrCe4d0_1GIJedzWalddTlRdZ-gjKpGRvVabVpI9NqKv8ALXqm7cG92naegcJXA-5w&usqp=CAU' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 4 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoSJ790n2kVfhtTbKaFJJWt0GkIW8xegL2q6RniKbY5mNeUT31nmdSiCb_D1L4BmiCDk&usqp=CAU' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.carouselContainer}>
                    <FlatList
                        data={carouselImages}
                        renderItem={renderCarouselItem}
                        keyExtractor={(item) => `second-${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={false}
                        decelerationRate="fast"
                        snapToInterval={Dimensions.get('window').width * 0.98 + 10}
                        snapToAlignment="center"
                        contentContainerStyle={styles.carouselList}
                        nestedScrollEnabled={true}
                    />
                    <View style={styles.paginationContainer}>
                        {carouselImages.map((_, index) => (
                            <View
                                key={`second-dot-${index}`}
                                style={[
                                    styles.paginationDot,
                                    index === activeIndex ? styles.paginationDotActive : null
                                ]}
                            />
                        ))}
                    </View>
                    
                
                     <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'https://americanas.vtexassets.com/assets/vtex.file-manager-graphql/images/62e0e4df-c534-4550-8eaf-d8d64cb58425___abae653f851001b515f29dbe9cdef223.png',
                        }}
                        style={{
                            width: Dimensions.get('window').width * 0.99,
                            height: Dimensions.get('window').width * 0.10,
                            borderRadius: 0,
                        }}
                        resizeMode="cover"
                    />
                </View>

                <View style={{ marginTop: 24 }}>
                    <FlatList
                        data={[
                            { id: '1', name: 'telefonia', img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F5d40f415-b7b4-4c99-8ed6-8390c7875321___2cbb36cc8c96eb67b5248559c5773a19.png&w=320&q=75' },
                            { id: '2', name: 'beleza e perfumaria', img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Ffd00f66f-bf1e-421d-81dd-0d6e2f6cec98___8459b90fbc72dbeb9b331370038424d7.png&w=320&q=75' },
                            { id: '3', name: 'eletrodomésticos', img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fed70eaa0-e7cc-432d-9054-62f98fe18fe3___a9f4c0f2cfe82477cf113ec9e91f6b30.png&w=320&q=75' },
                            { id: '4', name: 'móveis', img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fce101dd9-6319-4613-bae7-61fa5792c04a___9fe401358fb4f1499eabd70a3a879c16.png&w=320&q=75' },
                            { id: '5', name: 'eletroportateis', img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F8eb3140d-1c4e-46a1-93a9-e299d462bafd___35ba76e0cae65433520cbf7022948ab9.png&w=320&q=75' },
                            { id: '6', name: 'utilidades domésticas', img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F10db7df7-a883-412e-89e6-3e04ee250c4e___88dea4382818262b4ea1e04918c766d0.png&w=320&q=75' },
                            { id: '7', name: 'brinquedos', img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F91b6c4fe-4c97-4a52-a753-3675214f0d54___232944916c517c32702cdd519f2d76ff.png&w=320&q=75' },
                        ]}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 12 }}
                        renderItem={({ item }) => (
                            <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                                <View
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 30,
                                        backgroundColor: '#fff',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        elevation: 2,
                                        shadowColor: '#000',
                                        shadowOpacity: 0.1,
                                        shadowRadius: 4,
                                        shadowOffset: { width: 0, height: 2 },
                                        marginBottom: 6,
                                    }}
                                >
                                    <Image
                                        source={{ uri: item.img }}
                                        style={{ width: 48, height: 48, borderRadius: 24 }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <Text style={{ fontSize: 12, color: '#333', textAlign: 'center', maxWidth: 70 }}>
                                    {item.name}
                                </Text>
                            </View>
                        )}
                    />
                </View>
                 <View style={styles.gridContainer}>
                    <View style={styles.gridRow}>
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 1 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQtDg6Zr3tF-cD_rsd9ud4cCD-EWFPjyPQw&s' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 2 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Logo_americanas.png' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.gridRow}>
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 3 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://americanas.vtexassets.com/assets/vtex.file-manager-graphql/images/9de1413a-f77b-4890-a3fb-3ab3501f8ec5___de607798c858b91e43281e7bd4dd8887.png' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 4 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXZz06xlTSCr1iPAhg4FSa_dDesOQvctL2g&s' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                  <View style={styles.gridContainer}>
                    <View style={styles.gridRow}>
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 1 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://americanas.vtexassets.com/assets/vtex.file-manager-graphql/images/f8aa7e04-b1c4-4659-af6d-45d498403c75___107e603170cd79aa689c18df6d73003d.png' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 2 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F6ad59824-4d51-47d7-9006-70e119a83e4e___a292fadc0d5806769eaa96459d6a83b2.png&w=1440&q=75' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.gridRow}>
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 3 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://cdn.dooca.store/239/products/avcoopwxt60li1xjtvaq2qmd537wxg8nb5uj_640x640+fill_ffffff.jpeg?v=1655052001&webp=0' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 4 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEnlQRIwb9SZMtkqtpcp7rxrtJsMuEYTplM9fX_GqtO3bC1CeYuW_fbz9uk2fHzd2Uec&usqp=CAU' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>

                </View>
                               <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnvnB0M0YGUyQysnoaGTJ-11tw14IwxByImcWu8GCmWbG7vJi1noeVeOWS6Lk9Yq8cms&usqp=CAU',
                        }}
                        style={{
                            width: Dimensions.get('window').width * 0.99,
                            height: Dimensions.get('window').width * 0.30,
                            borderRadius: 0,
                        }}
                        resizeMode="cover"
                    />
                </View>

                   <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6jbxx36dI3MHNbnCsenmHsbTvhH5O1aysSJbHwv9cRqy6DZDzcBJWajg5Zv7hIkd73o&usqp=CAU',
                        }}
                        style={{
                            width: Dimensions.get('window').width * 0.99,
                            height: Dimensions.get('window').width * 0.30,
                            borderRadius: 0,
                        }}
                        resizeMode="cover"
                    />
                </View>

                         <View style={styles.gridContainer}>
                    <View style={styles.gridRow}>
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 1 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwL7agw9ggLwdQWNQ56LDOYTlBdCV-Nb5_Ct72HpVlgz6co6c_EBSZTI1idKaY78tKnc&usqp=CAU' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 2 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://lojasantoantonio.vtexassets.com/arquivos/ids/218297/Chocolate-Kitkat-415G-NESTLE.jpg?v=638313347792670000' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.gridRow}>
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 3 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://docemalu.vtexassets.com/arquivos/ids/5341105/146049-1.jpg?v=638421748822600000' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.gridItem}
                            activeOpacity={0.9}
                            onPress={() => console.log('Imagem 4 clicada')}
                        >
                            <Image
                                source={{ uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F6ad59824-4d51-47d7-9006-70e119a83e4e___a292fadc0d5806769eaa96459d6a83b2.png&w=1440&q=75' }}
                                style={styles.gridImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                

                </View>
                
                
                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBarContainer: {
        backgroundColor: '#E60014',
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight || 10,
        paddingBottom: 16,
        paddingHorizontal: '5%',
      
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 24,
        paddingHorizontal: 12,
        height: 44,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        borderWidth: 0,
        outlineStyle: 'none',
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 16,
    },
    bannerImage: {
        width: Dimensions.get('window').width,
        height: 140,
        borderRadius: 0,
    },

    carouselContainer: {
        marginTop: 20,
        paddingBottom: 30,
    },
    carouselTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 12,
        color: '#333',
    },
    
    carouselItemContainer: {
        width: Math.round(Dimensions.get('window').width * 0.99), 
        height: Math.round(Dimensions.get('window').width * 0.3),
        marginHorizontal: 10, 
        borderRadius: 12,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 0,
        backgroundColor: '#fff', 
        alignItems: 'center',
        justifyContent: 'center',
    
        
    },
    carouselImage: {
        width: '100%', 
        height: '86%', 
        borderRadius: 12,
        marginTop: 20,
        height: '90%',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: '#E60014',
        width: 12,
        height: 8,
    },
    

    gridContainer: {
        padding: 8,
        marginBottom: 20,
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    gridItem: {
        width: '48%',
        height: Math.round(Dimensions.get('window').width * 0.25),
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
    },
    gridImage: {
        width: '100%',
        height: '100%',
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
      
    },
});