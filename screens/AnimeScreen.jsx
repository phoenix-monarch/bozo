import { View, Text, ActivityIndicator, Alert, ScrollView } from "react-native";
import axios from "axios";
import { useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from "@rneui/base";
import EpisodeItem from "./components/EpisodeItem";
import Lottie from "lottie-react-native";

const AnimeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { title, animeid, image } = route.params;
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const getinfo = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://animeapi.jabed.me/zoro/info/${animeid}`
      );
      setInfo(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getinfo();
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
        padding: 10,
      }}
    >
      <ScrollView>
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
            watch
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginTop: 20,
            backgroundColor: colorScheme === "dark" ? "#2B3467" : "#B4E4FF",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 150, padding: 10 }}
          />
          <View>
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
                fontSize: 20,
                maxWidth: 200,
                paddingLeft: 10,
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
            {info?.totalEpisodes && (
              <Text
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Total Episodes:
                {info?.totalEpisodes}
              </Text>
            )}
            {info?.type && (
              <Text
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Type:
                {info?.type}
              </Text>
            )}
          </View>
        </View>
        {loading && (
          <ActivityIndicator
            size="large"
            color={colorScheme === "dark" ? "#fff" : "#000"}
            style={{ marginTop: 20 }}
          />
        )}
        <View
          style={{
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: colorScheme === "dark" ? "#fff" : "#000",
            }}
          >
            {info?.synopsis?.length > 200
              ? info?.synopsis.slice(0, 200) + "..."
              : info?.synopsis}
          </Text>
          {info?.synopsis?.length > 200 && (
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
              }}
              onPress={() => {
                Alert.alert("Synopsis", info?.synopsis, [
                  {
                    text: "OK",
                    style: "cancel",
                  },
                ]);
              }}
            >
              Read More
            </Text>
          )}
        </View>
        <View>
          {info?.episodes?.length > 0 && (
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
                fontSize: 20,
              }}
            >
              Episodes
            </Text>
          )}
          {info?.episodes?.map((ep, key) => (
            <EpisodeItem
              key={key}
              episodeId={ep.episodeId}
              episodeName={ep.episodeName}
              epNum={ep.epNum}
              image={image}
              animeName={title}
              animeId={animeid}
            />
          ))}
        </View>
        {info?.episodes?.length > 3 && (
          <View
            style={{
              display: "flex",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
                fontSize: 20,
                paddingRight: 10,
              }}
            >
              You have reached the end
            </Text>
            <Icon
              name="done-all"
              color={colorScheme === "dark" ? "#fff" : "#000"}
              size={28}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimeScreen;
