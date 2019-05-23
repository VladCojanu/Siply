import React from 'react'
import {View, StyleSheet} from 'react-native'
import QuestionCards from '../..//components/QuestionCards'
import questions from '../../resources/questions.json'
import {NUM_QUESTIONS} from '../../constants.js'
import AddNewPlayerModal from "../../components/AddNewPlayerModal"

class QuestionsScreen extends React.Component {
  players
  questionsObject

  constructor() {
    super()
    this.state={
      questionCategory: "Truth",
      questionType: 0,
      singleQuestion: 0,
      questionCount: 1, 
      sipsForQuestion: this.getRandomInt(5) + 1
    }
  }

  componentWillMount() {
    this.players = this.props.navigation.getParam("players").map(x => {
      return {name : x.name, sips : x.sips}})
  }

  render() {
    let possibleQuestions = Object.values(questions[this.state.questionCategory][this.state.questionType])[0]
    let randomQuestion = possibleQuestions[this.getRandomInt(possibleQuestions.length - 1)]    

    randomQuestion = randomQuestion.formatUnicorn({player1: this.players[0].name, 
      amount: this.state.sipsForQuestion});
    console.log('the random question is:' + randomQuestion)
      // <TouchableOpacity onPress={()=> {this.nextState(true)}} style={[styles.container, this.getViewBackground()]}>
      //       <Text>{randomQuestion}</Text>
      //     </TouchableOpacity>

      return (
        <View>
          <AddNewPlayerModal addNewPlayer={(newPlayerName) => this.addNewPlayer(newPlayerName)}/>
          <QuestionCards 
            style={styles.container}
            cards={[{text : randomQuestion, backgroundColor:"gold"}]}
            handleAccept={() => this.nextState(true)} 
            handleDecline={() => this.nextState(false)} />
        </View>
      )
    }

    nextState(acceptedSips) {
      console.log("next state called with: " + acceptedSips)
      if(acceptedSips) {
        // We're assuming that only player1 can be given sips
        this.players[0].sips += this.state.sipsForQuestion
      }

      console.log('nextState, questionCount=' + this.state.questionCount)
      console.log('nextState, NUM_QUESTIONS=' + NUM_QUESTIONS)

      if(this.state.questionCount === NUM_QUESTIONS){
        const {navigate} = this.props.navigation;
        navigate('Summary', {players : this.players})
      } else {
        this.newQuestion()
      }
    }

    newQuestion() {
      shuffle(this.players)
      questionCategory = this.getRandomInt(2) === 0 ? "Truth" : "Dare"
      this.setState((prevState) => ({
          questionCategory: questionCategory, // TODO: replace with: when more questions are added this.getRandomInt(3),
          questionType: 0, // TODO: replace when we add questions with multiple players for each category this.getRandomInt(this.players.length),
          questionCount : prevState.questionCount + 1,
          sipsForQuestion: this.getRandomInt(5) + 1
        }))
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    addNewPlayer(newPLayerName) {
    this.players.push({name : newPLayerName, sips : 0})
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
    width: "95%",
    height: "95%",
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
