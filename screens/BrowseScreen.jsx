import { useColorScheme, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";
import Genere from "./components/Genere";
import { SearchBar } from "@rneui/base";

const BrowseScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Comfortaa_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: colorScheme === "dark" ? "#fff" : "#000",
          fontSize: 28,
          fontFamily: "Comfortaa_600SemiBold",
        }}
      >
        Browse
      </Text>
      <ScrollView>
        <SearchBar
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            borderBottomWidth: 0,
            borderTopWidth: 0,
          }}
          inputContainerStyle={{ backgroundColor: "transparent" }}
          inputStyle={{ borderWidth: 0 }}
          placeholder="Search"
          onPressIn={() => navigation.navigate("Search")}
        />
        <Genere name="action" />
        <Genere name="adventure" />
        <Genere name="animation" />
        <Genere name="comedy" />
        <Genere name="drama" />
        <Genere name="fantasy" />
        <Genere name="horror" />
        <Genere name="mystery" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrowseScreen;
