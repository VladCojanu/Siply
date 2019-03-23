import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Modal from "react-native-modal";

import testQuestions from '../../resources/testQuestions.json'
import {NUM_QUESTIONS} from '../../constants.js'
import AddNewPlayerModal from "../../components/AddNewPlayerModal";

const twoPlayers = ["Micky", "Donald"]
const threePlayers = ["Einstein", "Newton", "Hawking"]
const fourPlayers = ["Sheldon", "Leonard", "Penny", "Amy"]

class QuestionsScreen extends React.Component {
  players
  testQuestionsObject

  constructor() {
    super()
    this.state={
      questionCategory: 0,
      questionType: 0,
      singleQuestion: 0,
      questionCount: 1
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

      return (
        <View>
          <AddNewPlayerModal addNewPlayer={(newPlayerName) => this.addNewPlayer(newPlayerName)}/>
          <TouchableOpacity onPress={()=> {this.nextState()}} style={[styles.container, this.getViewBackground()]}>
            <Text>{randomQuestion}</Text>
          </TouchableOpacity>
        </View>
      )
    }

    nextState() {
      console.log('nextState, questionCount=' + this.state.questionCount)
      console.log('nextState, NUM_QUESTIONS=' + NUM_QUESTIONS)
      if(this.state.questionCount === NUM_QUESTIONS){
        // TODO: Add drink counts to player objects.
        const {navigate} = this.props.navigation;
        navigate('Summary', {players : this.state.players})
      } else {
        this.newQuestion()
      }
    }

    newQuestion() {
      this.setState((prevState) => ({
          questionCategory: this.getRandomInt(3),
          questionType: this.getRandomInt(this.players.length),
          singleQuestion: this.getRandomInt(this.testQuestionsObject[this.state.questionType].length),
          questionCount : prevState.questionCount + 1
        }))
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    addNewPlayer(newPLayerName) {
    this.players.push(newPLayerName)
  }

    getViewBackground() {
      switch(this.state.questionCategory) {
        case 0: return {backgroundColor: "red"}
        case 1: return {backgroundColor: "yellow"}
        case 2: return {backgroundColor: "green"}
      }
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
