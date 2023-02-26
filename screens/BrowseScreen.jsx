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
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Genere name="action" />
          <Genere name="adventure" />
          <Genere name="cars" />
          <Genere name="comedy" />
          <Genere name="crime" />
          <Genere name="dementia" />
          <Genere name="demons" />
          <Genere name="drama" />
          <Genere name="dub" />
          <Genere name="ecchi" />
          <Genere name="family" />
          <Genere name="fantasy" />
          <Genere name="harem" />
          <Genere name="historical" />
          <Genere name="horror" />
          <Genere name="josei" />
          <Genere name="kids" />
          <Genere name="magic" />
          <Genere name="martial-arts" />
          <Genere name="mecha" />
          <Genere name="military" />
          <Genere name="mmusic" />
          <Genere name="mystery" />
          <Genere name="parody" />
          <Genere name="police" />
          <Genere name="psychological" />
          <Genere name="romance" />
          <Genere name="samurai" />
          <Genere name="school" />
          <Genere name="sci-fi" />
          <Genere name="seinen" />
          <Genere name="shoujo" />
          <Genere name="shouji-ai" />
          <Genere name="slice-of-life" />
          <Genere name="space" />
          <Genere name="sports" />
          <Genere name="super-power" />
          <Genere name="supernatural" />
          <Genere name="suspense" />
          <Genere name="thriller" />
          <Genere name="vampire" />
          <Genere name="yaoi" />
          <Genere name="yuri" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrowseScreen;
