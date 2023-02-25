import { useColorScheme, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const BrowseScreen = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
      }}
    >
      <Text>BrowseScreen</Text>
    </SafeAreaView>
  );
};

export default BrowseScreen;
