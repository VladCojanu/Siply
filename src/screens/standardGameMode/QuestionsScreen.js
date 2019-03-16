import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import testQuestions from '../../resources/testQuestions.json'

const twoPlayers = ["Micky", "Donald"]
const threePlayers = ["Einstein", "Newton", "Hawking"]
const fourPlayers = ["Sheldon", "Leonard", "Penny", "Amy"]

class QuestionsScreen extends React.Component {
    constructor() {
      super()
      this.state={
        questionCategory: 0,
        questionType: 0,
        singleQuestion: 0
      }
    }

    players;
    testQuestionsObject

    getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

    newQuestion() {
      this.setState(
        {
          questionCategory: this.getRandomInt(3),
          questionType: this.getRandomInt(this.players.length),
          singleQuestion: this.getRandomInt(this.testQuestionsObject[this.state.questionType].length)
        })
    }

    getViewBackground() {
      switch(this.state.questionCategory) {
        case 0: return {backgroundColor: "red"}
        case 1: return {backgroundColor: "yellow"}
        case 2: return {backgroundColor: "green"}
      }
    }

    componentWillMount() {
      this.players = this.props.navigation.getParam("players").map(x => x.name)
      this.testQuestionsObject = Object.values(testQuestions)
    }

  render() {
      let randomQuestion = Object.values(this.testQuestionsObject[this.state.questionCategory][this.state.questionType])[0][this.state.singleQuestion]
      shuffle(this.players)

    randomQuestion = randomQuestion.formatUnicorn({player1: this.players[0], player2: this.players[1],
      player3: this.players[2], player4: this.players[3]});

      /*
      switch(this.players.length) {
        case 1: randomQuestion = randomQuestion.formatUnicorn({player1: this.players[0]}); break;
        case 2: randomQuestion = randomQuestion.formatUnicorn({player1: this.players[0], player2: this.players[1]}); break;
        case 3: randomQuestion = randomQuestion.formatUnicorn({player1: this.players[0], player2: this.players[1],
          player3: this.players[2]}); break;
        case 4: randomQuestion = randomQuestion.formatUnicorn({player1: this.players[0], player2: this.players[1],
          player3: this.players[2], player4: this.players[3]}); break;
      }*/

      return (
        <TouchableOpacity onPress={()=> {this.newQuestion()}} style={[styles.container, this.getViewBackground()]}>
          <Text>{randomQuestion}</Text>
        </TouchableOpacity>
      )
    }

}

export default QuestionsScreen

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  apple: {
    backgroundColor: "red"
  },
  banana: {
    backgroundColor: "yellow"
  },
  cucumber: {
    backgroundColor: "green"
  }
});

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
  function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
      var t = typeof arguments[0];
      var key;
      var args = ("string" === t || "number" === t) ?
        Array.prototype.slice.call(arguments)
        : arguments[0];

      for (key in args) {
        str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
      }
    }

    return str;
  };
