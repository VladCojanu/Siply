import React from "react";
import { FlatList, StyleSheet, Text, Button, View } from "react-native";

export default class PlayerInput extends React.Component {
  static navigationOptions = {
    title: 'Hope you\'re drunk!',
  }

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.playAgain = this.playAgain.bind(this);
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={navigation.getParam('players')}
          renderItem={({ item }) => {
            console.log("pkayer is: " + JSON.stringify(item))
            return <Text style={styles.item}>{item.name}, had {item.sips} sips</Text>
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button
          onPress={this.playAgain}
          title="Play Again?"
          color="#841584"
        />

      </View>
    );
  }

  playAgain() {
    const { navigation } = this.props;
    const players = navigation.getParam('players')
    var playersWithIds = players.map(({ name }, index) => { return { id: "id_" + index, "name": name, "sips": 0 } })
    navigation.navigate('Home', { players: playersWithIds })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 30
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})