import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Contato() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💌 Fale com a gente</Text>
      <Text style={styles.subtitle}>
        Adoramos ouvir você! Preencha o formulário e entraremos em contato o quanto antes.
      </Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#888" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Seu nome" placeholderTextColor="#aaa" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#888" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Seu e-mail" placeholderTextColor="#aaa" keyboardType="email-address" />
      </View>

      <View style={[styles.inputContainer, { height: 120, alignItems: "flex-start" }]}>
        <Ionicons name="chatbubble-ellipses-outline" size={20} color="#888" style={styles.iconTop} />
        <TextInput
          style={[styles.input, { height: 120, textAlignVertical: "top" }]}
          placeholder="Escreva sua mensagem..."
          placeholderTextColor="#aaa"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar mensagem ✨</Text>
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>📍 Av. Joaquim Alves Corrêa 2677, Valinhos SP</Text>
        <Text style={styles.infoText}>📞 (19) 99418-7774</Text>
        <Text style={styles.infoText}>✉️ Espaço Aquarela</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fef9ff",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#6C63FF",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 25,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    width: "100%",
    height: 55,
  },
  icon: {
    marginRight: 8,
  },
  iconTop: {
    marginRight: 8,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#6C63FF",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  infoBox: {
    marginTop: 25,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
});
