import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

const EpisodeScreen = () => {
  const route = useRoute();
  const { episodeId, episodeName, epNum, image, animeName, animeId } =
    route.params;
  return (
    <SafeAreaView>
      <Text>{episodeName}</Text>
      <Text>
        {animeName} {epNum}
      </Text>
      <Text>{animeId}</Text>
    </SafeAreaView>
  );
};

export default EpisodeScreen;
