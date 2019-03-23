import React from "react";
import {Button, View} from "react-native";

export default class PlayerInput extends React.Component {
  static navigationOptions = {
    title: 'Hope you\'re drunk!',
  }

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
            onPress={this.playAgain}
            title="Play Again?"
            color="#841584"
          />
      </View>
    );
  }

  playAgain() {
    const players = this.props.navigation.getParam('players')
    var playersWithIds =  players.map((name, index) => { return { id: "id_" + index, "name": name }})

    const {navigate} = this.props.navigation;
    navigate('Home', {players : playersWithIds})
  }
}