import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../assets/images/img1.png"),
  require("../assets/images/img2.png"),
  require("../assets/images/img3.png"),
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Carrossel */}
      <View style={styles.carouselContainer}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.carouselImage} />
          )}
        />
      </View>

      {/* Conteúdo abaixo do carrossel */}
      <Text style={styles.title}>Bem-vindo(a) à nossa Loja 🌸</Text>
      <Text style={styles.subtitle}>
        Aqui você encontra os melhores produtos, dicas e muito carinho em cada detalhe.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Produtos Populares</Text>
        <Text style={styles.sectionText}>
          Confira os itens mais amados pelos nossos clientes e garanta já o seu preferido.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💖 Nossa Missão</Text>
        <Text style={styles.sectionText}>
          Trazer modernidade, beleza e cuidado para o seu dia a dia, de forma leve e especial.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📩 Entre em Contato</Text>
        <Text style={styles.sectionText}>
          Ficou com alguma dúvida? Estamos prontos para te ajudar pelo WhatsApp ou redes sociais!
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  carouselContainer: {
    height: 220,
    marginBottom: 20,
  },
  carouselImage: {
    width: width,
    height: 220,
    resizeMode: "cover",
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
    color: "#444",
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#666",
  },
});
