import { useColorScheme } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
      }}
    ></SafeAreaView>
  );
};

export default SettingsScreen;
