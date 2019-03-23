import React from "react";
import {
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  LayoutAnimation,
  UIManager
} from "react-native";
import { Button, Text } from "native-base";
import PlayerInput from "./PlayerInput";
const width = Dimensions.get("window").width;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  constructor(props) {
    super(props);

    let playersProp = this.props.navigation.getParam("players");
    let playersArr = typeof playersProp === "undefined" ? [] : playersProp;
    this.state = { players: playersArr, disabled: false };
    this.addNewEle = false;
    this.index = 0;
    this.updatePlayerName = this.updatePlayerName.bind(this);
  }

  afterRenderingComplete = () => {
    this.index += 1;
    this.setState({ disabled: false });
  };

  addMore = () => {
    this.addNewEle = true;
    const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };

    this.setState({
      disabled: true,
      players: [...this.state.players, newlyAddedValue]
    });
  };

  remove(id) {
    this.addNewEle = false;
    const newArray = [...this.state.players];
    newArray.splice(newArray.findIndex(ele => ele.id === id), 1);

    this.setState(() => {
      return {
        players: newArray
      };
    });
  }

  updatePlayerName(name, id) {
    const newArray = [...this.state.players];
    newArray[newArray.findIndex(ele => ele.id === id)].name = name;
    this.setState({
      players: newArray
    });
  }

  componentDidUpdate() {
    /*console.log("***************")
    console.log(this.state.players)*/
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 7}}>
          <ScrollView
            ref={scrollView => (this.scrollView = scrollView)}
            onContentSizeChange={() => {
              this.addNewEle && this.scrollView.scrollToEnd();
            }}
          >
            <View style={{ flex: 1, padding: 4 }}>
              {this.state.players.map(ele => {
                return (
                  <PlayerInput
                    key={ele.id}
                    item={ele}
                    removeItem={id => this.remove(id)}
                    afterRenderingComplete={this.afterRenderingComplete}
                    updatePlayerName={this.updatePlayerName}
                  />
                );
              })}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button rounded onPress={this.addMore}>
                <Text>Add Player</Text>
              </Button>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 3, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Button
            rounded
            onPress={() =>
              navigate("Questions", { players: this.state.players })
            }
          >
            <Text>Start Game!</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    paddingTop: Platform.OS == "ios" ? 20 : 0
  },

  viewHolder: {
    paddingVertical: 15,
    backgroundColor: "#B00020",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 4,
    paddingLeft: 15,
    borderRadius: 10
  },

  text: {
    color: "black",
    fontSize: 25,
    paddingRight: 17
  },

  btn: {
    position: "absolute",
    right: 25,
    bottom: 25,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 15
  },

  btnImage: {
    resizeMode: "contain",
    width: "100%",
    tintColor: "white"
  },

  removeBtn: {
    position: "absolute",
    right: 13,
    width: 25,
    height: 25,
    borderRadius: 15,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },

  removeIcon: {
    width: "100%",
    transform: [{ rotate: "45deg" }],
    resizeMode: "contain"
  }
});
