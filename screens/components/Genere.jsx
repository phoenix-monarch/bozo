import { View, Text } from "react-native";
import React from "react";

const Genere = (props) => {
  const backgroundColors = [
    "#F2CD5C",
    "#FCE22A",
    "#645CBB",
    "#3D1766",
    "#2B3467",
    "#E0144C",
  ];
  return (
    <View
      style={{
        backgroundColor:
          backgroundColors[Math.floor(Math.random() * backgroundColors.length)],
        height: 100,
        alignContent: "center",
        justifyContent: "flex-end",
        borderRadius: 10,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 28,
          paddingHorizontal: 10,
          marginBottom: 10,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        {props.name ? props.name : "No Name"}
      </Text>
    </View>
  );
};

export default Genere;
