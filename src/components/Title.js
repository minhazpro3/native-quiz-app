import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> READY TO CHALLENGE?</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 33,
    fontWeight: "800",
    color: "#fcbf49",
  },
  container: {
    paddingTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
