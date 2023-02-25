import { useColorScheme, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";
import Lottie from "lottie-react-native";

const LibraryScreen = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Comfortaa_600SemiBold,
  });

  if (!loaded) {
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
          fontFamily: "Comfortaa_600SemiBold",
          fontSize: 28,
          color: colorScheme === "dark" ? "#fff" : "#000",
        }}
      >
        Library
      </Text>
      <ScrollView
        style={{
          marginTop: 20,
        }}
      >
        {/* <Text
          style={{
            fontFamily: "Comfortaa_600SemiBold",
            fontSize: 20,
            color: colorScheme === "dark" ? "#fff" : "#000",
          }}
        >
          Recently watched
        </Text> */}

        <Lottie
          source={require("../assets/animations/cat.json")}
          autoPlay
          loop
          style={{
            width: "100%",
          }}
        />
        <Text
          style={{
            fontFamily: "Comfortaa_600SemiBold",
            fontSize: 16,
            color: colorScheme === "dark" ? "#fff" : "#000",
            marginTop: 40,
            alignSelf: "center",
          }}
        >
          Nothing here yet.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LibraryScreen;
