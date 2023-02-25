import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SearchScreen from "./screens/SearchScreen";
import { Icon } from "@rneui/base";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import BrowseScreen from "./screens/BrowseScreen";
import LibraryScreen from "./screens/LibraryScreen";
import AboutScreen from "./screens/extras/AboutScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ExpoStatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          options={{
            headerShown: false,
          }}
          component={Tabs}
        />
        <Stack.Screen
          name="Search"
          options={{
            headerShown: false,
          }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="About"
          options={{
            headerShown: false,
          }}
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  const scheme = useColorScheme();
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      barStyle={{
        backgroundColor: scheme === "dark" ? "#171717" : "#fff",
      }}
      activeColor={scheme === "dark" ? "#fff" : "#272121"}
      keyboardHidesNavigationBar={true}
      backBehavior="none"
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Browse"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="category" size={24} color={color} />
          ),
        }}
        component={BrowseScreen}
      />
      <Tab.Screen
        name="library"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="video-library" size={24} color={color} />
          ),
        }}
        component={LibraryScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={24} color={color} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
