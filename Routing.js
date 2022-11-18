import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Quiz from "./src/screens/Quiz";
import Result from "./src/screens/Result";

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="result"
        component={Result}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routing;

const styles = StyleSheet.create({});
