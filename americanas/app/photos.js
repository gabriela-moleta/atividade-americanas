import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function PhotosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nosso Espaço 📸</Text>

      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/400/250?1" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/400/250?2" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/400/250?3" }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e91e63", // rosa avermelhado
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
});
