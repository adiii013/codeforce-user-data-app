import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./screen/SearchScreen";
import ResultScreen from "./content/ResultScreen";
import PreviousSolved from "./content/PreviousSolved"

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search User" component={SearchScreen}></Stack.Screen>
          <Stack.Screen name="Result Screen" component={ResultScreen}></Stack.Screen>
          <Stack.Screen name="Previous Solved" component={PreviousSolved}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;