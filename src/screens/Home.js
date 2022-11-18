import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Title from "../components/Title";

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.imageContainer}>
        <Image
          style={styles.banner}
          resizeMode="contain"
          source={require("../../assets/test1.png")}
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    width: 400,
    height: 400,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
