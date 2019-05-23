import React from 'react'
import {Text, View, StyleSheet} from "react-native";
import SwipeCards from 'react-native-swipeable-cards'

class QuestionCard extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
              <Text>{this.props.text}</Text>
          </View>
      )
  }
}

class NoMoreCards extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View>
          <Text style={styles.noMoreCardsText}>No more cards</Text>
        </View>
      )
    }
  }

export default class QuestionCards extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: props.cards
      };
    }
  
    render() {
      console.log('render called with question:' + JSON.stringify(this.state.cards))
      // If you want a stack of cards instead of one-per-one view, activate stack mode
      // stack={true}
      return (
        <SwipeCards
          cards={this.props.cards}
          renderCard={(cardData) => <QuestionCard {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          onSwipeRight={this.props.handleAccept}
          onSwipeLeft={this.props.handleDecline}
          hasMaybeAction={false}
        />
      )
    }
  }
  
  const styles = StyleSheet.create({
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      height: "100%",
      borderColor: 'grey',
      borderRadius: 10,
      elevation: 1,
    },
    noMoreCardsText: {
      fontSize: 22,
    }
  })