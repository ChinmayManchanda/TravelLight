import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Text, StyleSheet} from 'react-native';
import { View } from './Themed';

export default function TapButton(props: any) {
    const {tapping, setTapping, card, myCards, setMyCards, people} = props;

    function tapCard(card: any, myCards: any, setMyCards: any, setTapping: any) {
      setTapping(true);
      setTimeout(() => {
        if (card.tapped) {
          deductBalance(card, myCards, setMyCards);
        } else {
          myCards.forEach((c: any) => {
            if (c.cardNumber === card.cardNumber) {
              c.tapped = true;
            }
          });
          setMyCards([...myCards]);
        }
        setTapping(false);
      }, 3000)
    }
    
    function deductBalance(card: any, myCards: any, setMyCards: any) {
      myCards.forEach((c: any) => {
        if (c.cardNumber === card.cardNumber) {
          c.balance -= 2.23 + ((people ? people : 1) - 1) * 4.80
          c.tapped = false;
        }
      });
      setMyCards([...myCards]);
    }

    return (
      <>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.container}>
          <Text style={styles.tapCardText}>Tap {card.tapped ? "Off" : "On"}</Text>
          <View style={styles.tapButtonWrapper}>
            <TouchableOpacity 
              disabled={tapping ? true : false}
              style={tapping ? styles.tapButtonActive : styles.tapButtonInactive} 
              onPress={() => tapCard(card, myCards, setMyCards, setTapping)}>
              <MaterialCommunityIcons size={45} name="contactless-payment" color={tapping ? "#2f95dc" : "#444"} />
            </TouchableOpacity>
            <Text>You are tapped {card.tapped ? "on" : "off"}</Text>
          </View>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '50%',
    paddingTop: 20,
    paddingBottom: 30
  },
  tapButtonActive: {
    borderWidth: 1,
    borderColor: "#2f95dc",
    borderRadius: 45,
    width: 170,
    height: 70,
    justifyContent:'center',
    alignItems: 'center'
  },
  tapButtonInactive: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 45,
    width: 170,
    height: 70,
    justifyContent:'center',
    alignItems: 'center'
  },
  tapCardText: {
    color: "#444",
    fontSize: 25,
    fontWeight: 'bold'
  },
  tapButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '90%',
  },
})