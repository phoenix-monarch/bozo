import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";

const AboutScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
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
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 28,
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
          v1.0.0
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
