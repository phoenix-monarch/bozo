import {
  useColorScheme,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import en from "../lib/translations/en.config";

const HomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const [recentepisodes, setRecentEpisodes] = useState([]);
  const [popularanime, setPopularAnime] = useState([]);
  const [animemovies, setAnimeMovies] = useState([]);

  const getRecentEpisodes = async () => {
    const response = await axios.get(
      "https://webdis-n52v.onrender.com/recent-release"
    );
    setRecentEpisodes(response.data);
  };

  const getPopularAnime = async () => {
    const response = await axios.get(
      "https://webdis-n52v.onrender.com/popular"
    );
    setPopularAnime(response.data);
  };

  const getAnimeMovies = async () => {
    const response = await axios.get(
      "https://webdis-n52v.onrender.com/anime-movies"
    );
    setAnimeMovies(response.data);
  };

  useEffect(() => {
    getRecentEpisodes();
    getPopularAnime();
    getAnimeMovies();
  }, []);

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
          {en.bozo}
        </Text>
        <Icon
          name="search"
          color={colorScheme === "dark" ? "#fff" : "#000"}
          size={28}
          onPress={() => navigation.navigate("Search")}
        />
      </View>

      {recentepisodes.length === 0 ||
        popularanime.length === 0 ||
        (animemovies.length === 0 ? (
          <View
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {/*  appbar */}

            {/*  recent episodes */}
            <View
              style={{
                paddingTop: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Comfortaa_700Bold",
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 20,
                }}
              >
                Recent Episodes
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {recentepisodes.map((item, key) => (
                  <Item
                    key={key}
                    title={item.animeTitle}
                    image={item.animeImg}
                  />
                ))}
              </ScrollView>
            </View>

            {/*  popular anime */}
            <View
              style={{
                paddingTop: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Comfortaa_700Bold",
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 20,
                }}
              >
                Popular Anime
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {popularanime.map((item, key) => (
                  <Item
                    key={key}
                    title={item.animeTitle}
                    image={item.animeImg}
                    status={item.releasedDate}
                  />
                ))}
              </ScrollView>
            </View>

            {/*  anime movies */}
            <View
              style={{
                paddingTop: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Comfortaa_700Bold",
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 20,
                }}
              >
                Anime Movies
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {animemovies.map((item, key) => (
                  <Item
                    key={key}
                    title={item.animeTitle}
                    image={item.animeImg}
                    status={item.releasedDate}
                  />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        ))}
    </SafeAreaView>
  );
};

export default HomeScreen;
