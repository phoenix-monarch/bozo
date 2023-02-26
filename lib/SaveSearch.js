import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveSearch = async (search) => {
  try {
    const jsonValue = JSON.stringify(search);
    await AsyncStorage.setItem("search", jsonValue);
  } catch (e) {
    console.log(e);
  }
};
