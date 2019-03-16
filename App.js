import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'react-native-firebase';
import QuestionsScreen from "./src/screens/standardGameMode/QuestionsScreen";
import HomeScreen from "./src/screens/home/HomeScreen";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  QuestionsScreen: {screen: QuestionsScreen},
});

const App = createAppContainer(MainNavigator);

export default App;