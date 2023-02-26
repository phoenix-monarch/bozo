import { useColorScheme, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from "@rneui/base";
import axios from "axios";
import BoxList from "./components/BoxList";
import { Video } from "expo-av";

const EpisodeScreen = () => {
  const [episodeinfo, setEpisodeInfo] = useState([]);
  const [animeinfo, setAnimeInfo] = useState([]);
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
      <ScrollView>
        <View
          style={{
            paddingVertical: 10,
          }}
        >
          <Video
            source={{ uri: episodeinfo?.sources?.[0]?.file }}
            useNativeControls
            resizeMode="contain"
            style={{ width: "100%", height: 300 }}
          />
        </View>
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 18,
          }}
        >
          {episodeName} - {epNum}
        </Text>
        {animeinfo?.episodes?.length && (
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EpisodeScreen;
