import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/Home";
import Quiz from "./src/screens/Quiz";
import Result from "./src/screens/Result";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Home /> */}
        {/* <Quiz /> */}
        <Result />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
