import {
  View,
  Text,
  useColorScheme,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";
import axios from "axios";
import Item from "./components/Item";
import Lottie from "lottie-react-native";

const GenereScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { name } = route.params;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getmovies = async () => {
    const { data } = await axios.get(
      `https://webdis-n52v.onrender.com/genre/${name}`
    );
    setMovies(data);
    setLoading(false);
  };
  useEffect(() => {
    getmovies();
  }, []);
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
          {name}
        </Text>
      </View>
      <View>
        {loading ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {movies.map((movie, key) => (
                <Item
                  key={key}
                  title={movie.animeTitle}
                  image={movie.animeImg}
                  status={movie.releasedDate}
                  animeid={movie.animeId}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default GenereScreen;
