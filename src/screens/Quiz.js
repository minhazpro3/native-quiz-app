import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const Quiz = () => {
  return (
    <View style={styles.quizContainer}>
      <View>
        <Text style={styles.topTitle}>something text</Text>
      </View>
      <View style={styles.quizOptions}>
        <TouchableOpacity>
          <Text>Quiz Btn 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Quiz Btn 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Quiz Btn 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Quiz Btn 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quizButtonContain}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  quizContainer: {
    height: "100%",
    padding: 15,
  },
  topTitle: {
    marginVertical: 20,
  },
  quizOptions: {
    marginVertical: 20,
    flex: 1,
  },
  quizButtonContain: {
    marginBottom: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
