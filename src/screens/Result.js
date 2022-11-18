import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const Result = () => {
  return (
    <View>
      <View>
        <Text>Quiz Result</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.banner}
          source={require("../../assets/test1.png")}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  resultContainer: {
    height: "100%",
    padding: 15,
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
});
