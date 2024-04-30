import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Appinline() {
  const onPressButton = () => {
    console.log("Botão pressionado!");
    // Lpogica do botao
  };

  return (
    <View
      style={{
        flex: "1",
        width: "auto",
        diplay: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "white",
        }}
      >
        INDMO
      </Text>

      <Text
        style={{
          paddingTop: 20,

          fontSize: "bold",
          color: "yelow",
        }}
      >
        Hello World
      </Text>
    </View>
  );
}
