import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const EpisodeItem = ({
  animeName,
  animeId,
  epNum,
  episodeName,
  episodeId,
  image,
}) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Episode", {
          episodeId: episodeId,
          episodeName: episodeName,
          epNum: epNum,
          image: image,
          animeName: animeName,
          animeId: animeId,
        });
      }}
      id={episodeId}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        backgroundColor: colorScheme === "dark" ? "#434242" : "#EEEEEE",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{ width: 70, height: 90, padding: 10 }}
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
          {episodeName}
        </Text>
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 16,
            paddingLeft: 10,
          }}
        >
          Episode: {epNum}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeItem;
