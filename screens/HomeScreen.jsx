import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("Search")}>Go to Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
