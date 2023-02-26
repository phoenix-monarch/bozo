import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, useColorScheme, View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import Lottie from "lottie-react-native";
import Item from "./components/Item";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const colorScheme = useColorScheme();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    setResults([]);
    const searchkeyowrd = searchTerm.replace(/\s/g, "%20");
    try {
      setLoading(true);
      const response = await axios.get(
        `https://animeapi.jabed.me/zoro/search?keyw=${searchkeyowrd}`
      );
      setResults(response.data);
      setLoading(false);
    } catch (err) {
      setErrorMessage("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
      }}
    >
      <SearchBar
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          borderBottomWidth: 0,
          borderTopWidth: 0,
        }}
        inputContainerStyle={{ backgroundColor: "transparent" }}
        inputStyle={{ borderWidth: 0 }}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={() => searchApi(search)}
        onClear={() => setResults([])}
      />
      {loading && (
        <Lottie
          source={require("../assets/animations/searching.json")}
          autoPlay
          loop
        />
      )}
      {errorMessage ? (
        <Lottie source={require("../assets/animations/error.json")} autoPlay />
      ) : null}
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {results.map((item, key) => (
            <Item
              key={key}
              animeid={item.animeId}
              title={item.animeTitle}
              image={item.animeImg}
              status={item.status}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
