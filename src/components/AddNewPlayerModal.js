import React from 'react'
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Modal from "react-native-modal";

export default class AddNewPlayerModal extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      isModalVisible: false,
      newPlayerName: null
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.setState({ isModalVisible: false })}>
        <View style={styles.modalContent}>
          <Text>Add a new Player</Text>
          <TextInput
            style={{height: 40, width: 120}}
            placeholder="Player Name"
            textAlign={'center'}
            onChangeText={(text) => this.setState({newPlayerName: text})}
          />
          <Button
            onPress={() => this.addNewPlayer()}
            title="Let's Go!"
          />
        </View>
       </Modal>
      </View>
    )
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible })

  addNewPlayer() {
    if (this.state.newPlayerName !== null && this.state.newPlayerName !== '') {
      this.props.addNewPlayer(this.state.newPlayerName)
      this.setState({newPlayerName: null, isModalVisible: false})
    }
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  }
});
