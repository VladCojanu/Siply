import React from "react";
import {Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default class PlayerInput extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  removeItem = () => {
    this.props.removeItem(this.props.item.id);
  };

  componentDidMount() {
    this.props.afterRenderingComplete();
  };

  render() {
    return (
      <View>
        <TextInput
        style={{height: 40}}
        placeholder="Player Name"
        onChangeText={(text) => this.props.updatePlayerName(text, this.props.item.id)}
      />
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={this.removeItem}
        >
          <Image
            source={require('../../../assets/add.png')}
            style={styles.removeIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingTop: (Platform.OS == 'ios') ? 20 : 0
  },

  viewHolder: {
    paddingVertical: 15,
    backgroundColor: '#B00020',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 4,
    paddingLeft: 15,
    borderRadius: 10
  },

  text: {
    color: 'black',
    fontSize: 25,
    paddingRight: 17
  },

  btn: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 15
  },

  btnImage: {
    resizeMode: 'contain',
    width: '100%',
    tintColor: 'white'
  },

  removeBtn: {
    position: 'absolute',
    right: 13,
    width: 25,
    height: 25,
    borderRadius: 15,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  removeIcon: {
    width: '100%',
    transform: [{ rotate: '45deg' }],
    resizeMode: 'contain'
  }
});
