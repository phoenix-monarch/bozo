import { View, Text, useColorScheme } from "react-native";
import { Icon } from "@rneui/base";

const ListItem = (props) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
      }}
    >
      <Icon
        name={props.icon}
        size={26}
        color={colorScheme === "dark" ? "#fff" : "#000"}
      />
      <Text
        style={{
          fontFamily: "Comfortaa_700Bold",
          color: colorScheme === "dark" ? "#fff" : "#000",
          fontSize: 16,
          marginLeft: 10,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default ListItem;
