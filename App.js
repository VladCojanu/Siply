import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';
import QuestionsScreen from "./src/screens/standardGameMode/QuestionsScreen";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <QuestionsScreen/>
    );
  }
}
