import { useColorScheme, View, Text, ScrollView } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { useEffect, useState } from "react";
import Lottie from "lottie-react-native";
import Item from "./components/Item";

const HomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const [recentepisodes, setRecentEpisodes] = useState([]);
  const [popularanime, setPopularAnime] = useState([]);
  const [animemovies, setAnimeMovies] = useState([]);

  const getRecentEpisodes = async () => {
    const response = await axios.get(
      "https://gogoanime.consumet.stream/recent-release"
    );
    setRecentEpisodes(response.data);
  };

  const getPopularAnime = async () => {
    const response = await axios.get(
      "https://gogoanime.consumet.stream/popular"
    );
    setPopularAnime(response.data);
  };

  const getAnimeMovies = async () => {
    const response = await axios.get(
      "https://gogoanime.consumet.stream/anime-movies"
    );
    setAnimeMovies(response.data);
  };

  useEffect(() => {
    // getRecentEpisodes();
    // getPopularAnime();
    // getAnimeMovies();
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {recentepisodes.map((item, key) => (
              <Item key={key} title={item.animeTitle} image={item.animeImg} />
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
