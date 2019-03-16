import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'react-native-firebase';
import QuestionsScreen from "./src/screens/standardGameMode/QuestionsScreen";
import HomeScreen from "./src/screens/home/HomeScreen";
import SummaryScreen from "./src/screens/summary/SummaryScreen";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Questions: {screen: QuestionsScreen},
  Summary: {screen: SummaryScreen}
});

const App = createAppContainer(MainNavigator);

export default App;