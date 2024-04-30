import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const onPressButton = () => {
    console.log("Botão pressionado!");
    // Lógica do botão aqui
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>INDMO</Text>
      <Text>Adriano Saraiva 2DN</Text>
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Text>SENAISP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d8bfd8",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 5,
    elevation: 20,
    shadowColor: "rgba(0, 0, 0, 0.9)", // cor da sombra
    shadowOffset: { width: 5, height: 5 }, // deslocamento horizontal e vertical
  },
});
