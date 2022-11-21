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
      <View style={styles.TopBanner}>
        <Title />
        <View style={styles.topBannerContainer}>
          <View style={styles.homeTop}>
            <View style={styles.imageContainer1}>
              <Image
                style={styles.topBannerImg}
                resizeMode="contain"
                source={require("../../assets/team.png")}
              />
            </View>
            <View>
              <Text style={styles.play_win}>Play & Win</Text>
              <Text style={styles.play_proverbs}>
                Life is more fun {"\n"}if you play games.
              </Text>
            </View>
          </View>
        </View>
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
  TopBanner: {
    backgroundColor: "#32278a",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    height: "45%",
    paddingTop: 35,
  },
  topBannerContainer: {
    marginTop: 34,
    backgroundColor: "#fff",
    marginHorizontal: 18,
    borderRadius: 40,
  },
  topBannerImg: {
    width: 230,
    height: 250,
  },
  homeTop: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  play_win: {
    fontSize: 40,
    fontWeight: "bold",
  },
  play_proverbs: {
    fontSize: 30,
  },
  // banner: {
  //   width: 550,
  //   height: 550,
  // },
  // imageContainer1: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flex: 1,
  //   margin: 0,
  //   marginVertical: 150,
  // },
  // imageContainer2: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flex: 1,
  //   marginVertical: 300,
  // },
  // container: {
  //   paddingTop: 40,
  //   paddingHorizontal: 20,
  // },
  // button: {
  //   width: "100%",
  //   backgroundColor: "#ffd8be",
  //   padding: 20,
  //   borderRadius: 40,
  //   alignItems: "center",
  //   marginVertical: 40,
  // },
  // buttonText: {
  //   fontSize: 23,
  //   fontWeight: "800",
  //   color: "#90a955",
  // },
  // cupBanner: {
  //   width: 150,
  //   height: 150,
  // },
  // victory: {
  //   fontSize: 35,
  //   fontWeight: "800",
  //   color: "#fcbf49",
  // },
  // vicTitle: {
  //   fontSize: 20,
  //   color: "green",
  //   fontWeight: "600",
  // },
  // victoryGroup: {
  //   alignItems: "center",
  // },
  // homeTopBanner: {
  //   display: "flex",
  //   flex: 1,
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginVertical: 33,
  // },
});
