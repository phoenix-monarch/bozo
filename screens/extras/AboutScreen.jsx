import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Image } from "@rneui/base";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import Constants from "expo-constants";

const AboutScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const appVersion = Constants.manifest.version;
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
      }}
    >
      <View
        style={{
          alignItems: "flex-start",
          padding: 10,
        }}
      >
        <Icon
          name="arrow-back-ios"
          size={24}
          color={colorScheme === "dark" ? "#fff" : "#000"}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "80%",
        }}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/jabedzaman/bozo/main/assets/adaptive-icon.png ",
          }}
          style={{ width: 80, height: 80 }}
        />
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 28,
            fontFamily: "Comfortaa_700Bold",
          }}
        >
          BOZO
        </Text>
        <Text
          style={{
            color: colorScheme === "dark" ? "#423F3E" : "#423F3E",
            fontSize: 16,
          }}
        >
          v{appVersion}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}>
          Made with ❤️ by{" "}
          <Text
            style={{
              color: colorScheme === "dark" ? "#fff" : "#000",
              fontWeight: "bold",
            }}
          >
            Jabed
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
