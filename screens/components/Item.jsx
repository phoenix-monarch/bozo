import { Image } from "@rneui/base";
import { View, Text } from "react-native";
import { useColorScheme } from "react-native";

const Item = (props) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        padding: 10,
        maxWidth: "33%",
      }}
    >
      <View>
        <Image
          source={{ uri: props.image }}
          style={{ width: 100, height: 150 }}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 16,
          }}
        >
          {props.title || "Loading..."}
        </Text>
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 14,
          }}
        >
          {props.status || "Loading..."}
        </Text>
      </View>
    </View>
  );
};

export default Item;
