import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.imageContainer1}>
        <Image
          style={styles.cupBanner}
          resizeMode="contain"
          source={require("../../assets/cup.png")}
        />
      </View>
      <View style={styles.victoryGroup}>
        <Text style={styles.victory}>VICTORY</Text>
        <Text style={styles.vicTitle}>
          So why the delay? Jump into the challenge now.
        </Text>
      </View>
      <View style={styles.imageContainer2}>
        <Image
          style={styles.banner}
          resizeMode="contain"
          source={require("../../assets/test1.png")}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("quiz")}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    width: 550,
    height: 550,
  },
  imageContainer1: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 0,
    marginVertical: 150,
  },
  imageContainer2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginVertical: 300,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
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
  cupBanner: {
    width: 200,
    height: 200,
    padding: 0,
    margin: 0,
  },
  victory: {
    fontSize: 35,
    fontWeight: "800",
    color: "#fcbf49",
  },
  vicTitle: {
    fontSize: 20,
    color: "green",
    fontWeight: "600",
  },
  victoryGroup: {
    alignItems: "center",
    // marginBottom: 390,
  },
});
