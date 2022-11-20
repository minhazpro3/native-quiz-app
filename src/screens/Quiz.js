import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [count, setCount] = useState(0);
  const [options, setOption] = useState([]);

  const getQuestions = async () => {
    const url =
      "https://opentdb.com/api.php?amount=20&category=21&difficulty=medium&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOption(generateOptionsAndShuttle(data.results[0]));
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const generateOptionsAndShuttle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleNext = () => {
    setCount(count + 1);
    setOption(generateOptionsAndShuttle(questions[count + 1]));
  };

  return (
    <View style={styles.container}>
      {questions ? (
        <View style={styles.childContainer}>
          <View>
            <Text style={styles.question}>
              Q. {decodeURIComponent(questions[count].question)}
            </Text>
          </View>
          <View style={styles.quizOptions}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {" "}
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {" "}
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {" "}
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.count}>{count}</Text>
          </View>
          <View style={styles.quizButtonContain}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            {count !== 19 && (
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
            )}
            {count === 19 && (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Result</Text>
              </TouchableOpacity>
            )}
            {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Text>END</Text>
        </TouchableOpacity> */}
          </View>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
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
  question: {
    fontSize: 30,
    fontWeight: "600",
  },
  option: {
    fontSize: 22,
    color: "#ffffff",
  },
  optionButton: {
    paddingVertical: 15,
    marginVertical: 8,
    backgroundColor: "#00b4d8",
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  childContainer: {
    height: "100%",
  },
  count: {
    fontSize: 35,
    marginBottom: 400,
    marginHorizontal: 40,
  },
});
