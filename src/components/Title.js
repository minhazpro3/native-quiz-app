import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {" "}
        Congratulation <Text style={styles.you}> to You!!</Text>
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 33,
    fontWeight: "800",
    color: "#ffff",
    paddingVertical: 20,
  },

  you: {
    color: "#fe4f4f",
  },
});
