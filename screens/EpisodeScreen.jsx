import {
  useColorScheme,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from "@rneui/base";
import axios from "axios";
import BoxList from "./components/BoxList";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

const EpisodeScreen = () => {
  const [episodeinfo, setEpisodeInfo] = useState([]);
  const [animeinfo, setAnimeInfo] = useState([]);
  const [orientation, setOrientation] = useState("PORTRAIT_UP");
  const route = useRoute();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { episodeId, episodeName, epNum, image, animeName, animeId } =
    route.params;

  const getEpisodeInfo = async () => {
    try {
      const response = await axios.get(
        `https://animeapi.jabed.me/zoro/watch/${episodeId}`
      );
      setEpisodeInfo(response.data);
    } catch (err) {}
  };
  const getAnimeInfo = async () => {
    try {
      const response = await axios.get(
        `https://animeapi.jabed.me/zoro/info/${animeId}`
      );
      setAnimeInfo(response.data);
    } catch (err) {}
  };
  useEffect(() => {
    getEpisodeInfo();
    getAnimeInfo();
  }, []);
  const moviemode = async () => {
    if (orientation === "PORTRAIT_UP") {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
      setOrientation("LANDSCAPE");
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
      setOrientation("PORTRAIT_UP");
    }
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
          {animeName}
        </Text>
      </View>

      {animeinfo?.episodes?.length && (
        <ScrollView>
          <View
            style={{
              paddingVertical: 10,
            }}
          >
            <Video
              source={{ uri: episodeinfo?.sources?.[0]?.file }}
              useNativeControls
              PosterComponent={
                <Image
                  source={{ uri: image }}
                  resizeMode="contain"
                  style={{ width: "100%", height: 300 }}
                />
              }
              resizeMode="contain"
              style={{ width: "100%", height: 300 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
                fontSize: 18,
              }}
            >
              {episodeName} - {epNum}
            </Text>
            <View>
              <Icon
                name="movie"
                color={colorScheme === "dark" ? "#fff" : "#000"}
                size={18}
                onPress={moviemode}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                paddingVertical: 10,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 15,
                  paddingEnd: 5,
                }}
              >
                Currently Watching:
              </Text>
              <Text
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 15,
                }}
              >
                {epNum} of
              </Text>
              <Text
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 15,
                  paddingHorizontal: 5,
                }}
              >
                {animeinfo?.episodes?.length}
              </Text>
            </View>
            <BoxList
              totalEpisodes={animeinfo?.episodes?.length}
              currentEpisode={epNum}
            />
          </View>
        </ScrollView>
      )}

      {!animeinfo?.episodes?.length && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default EpisodeScreen;
