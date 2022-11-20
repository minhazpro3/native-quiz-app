import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const Result = ({ navigation, route }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text>{score}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.banner}
          source={require("../../assets/test1.png")}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.buttonText}> Go to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    // height: "100%",
  },
  topTitle: {
    marginVertical: 20,
  },
  banner: {
    width: 500,
    height: 500,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  quizButtonContain: {
    marginBottom: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#ffd8be",
    padding: 20,
    borderRadius: 40,
    alignItems: "center",
    marginVertical: 40,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "800",
    color: "#90a955",
  },
});
