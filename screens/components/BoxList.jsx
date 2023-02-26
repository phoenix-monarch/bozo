import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const BoxList = ({ totalEpisodes, currentEpisode }) => {
  const [activeBox, setActiveBox] = useState(currentEpisode - 1);

  const handleBoxPress = (index) => {
    setActiveBox(index);
  };

  const renderBoxes = () => {
    const boxes = [];

    for (let i = 0; i < totalEpisodes; i++) {
      const boxStyle = i === activeBox ? styles.activeBox : styles.box;

      boxes.push(
        <TouchableOpacity
          key={i}
          style={boxStyle}
          onPress={() => handleBoxPress(i)}
        >
          <Text style={styles.boxText}>{i + 1}</Text>
        </TouchableOpacity>
      );
    }

    return boxes;
  };

  return <View style={styles.container}>{renderBoxes()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  box: {
    width: 30,
    height: 30,
    margin: 5,
    backgroundColor: "#cccccc",
  },
  activeBox: {
    width: 30,
    height: 30,
    margin: 5,
    backgroundColor: "#ff0000",
  },
  boxText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
  },
});

export default BoxList;
