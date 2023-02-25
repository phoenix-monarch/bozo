import { useColorScheme, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";

const HomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
        paddingHorizontal: 20,
      }}
    >
      {/*  appbar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Comfortaa_700Bold",
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 28,
          }}
        >
          BOZO
        </Text>
        <Icon
          name="search"
          color={colorScheme === "dark" ? "#fff" : "#000"}
          size={28}
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
