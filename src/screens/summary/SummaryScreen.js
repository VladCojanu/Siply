import React from "react";
import {Text, View} from "react-native";

export default class PlayerInput extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }
  
  render() {
    return (
      <View>
        <Text>This is some summary text</Text>
      </View>
    );
  }
}