import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadSearches = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("search");
    console.log("jsonValue", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
