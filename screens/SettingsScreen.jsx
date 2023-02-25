import {
  useColorScheme,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import ListItem from "./components/ListItem";

const SettingsScreen = ({ navigation }) => {
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
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "Comfortaa_700Bold",
          color: colorScheme === "dark" ? "#fff" : "#000",
          fontSize: 28,
        }}
      >
        Settings
      </Text>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
          }}
        >
          <ListItem icon="account-circle" title="Account" />
          <ListItem icon="translate" title="Translations" />
          <ListItem icon="delete-forever" title="Clear History" />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <ListItem icon="info" title="About" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
