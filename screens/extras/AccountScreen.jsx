import { useColorScheme, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const userId = Math.floor(Math.random() * 1000000000);
  const user = {
    name: "Jabed",
    avatar: "https://jabed.me/jabed.jpg",
    id: userId,
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          name="arrow-back-ios"
          color={colorScheme === "dark" ? "#fff" : "#000"}
          size={28}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 28,
          }}
        >
          Account
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Avatar
          size={100}
          source={{
            uri: user.avatar,
          }}
          avatarStyle={{
            borderRadius: 100,
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
          }}
        >
          Signed in as {user.name}
        </Text>
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
          }}
        >
          {user.id}
        </Text>
      </View>
      <Text
        style={{
          color: colorScheme === "dark" ? "#fff" : "#000",
          marginTop: 20,
        }}
      >
        This is a sample account screen. Login and logout functionality is not
        implemented.
      </Text>
    </SafeAreaView>
  );
};

export default AccountScreen;
