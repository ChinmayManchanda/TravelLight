import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { OPALCardsContext } from '../hooks/context';
import TopUpValueMenu from '../components/TopUpValueMenu'
import TapButton from '../components/TapButton';
import TapNumberToggler from '../components/TapNumberToggler';
import { Provider } from 'react-native-paper';
import PaymentOptionsPopUp from '../components/PaymentOptionsPopUp';


export default function OPALCardScreen({navigation, route}: any) {
  const {card} = route.params;
  const {myOPALCards, setMyOPALCards} = React.useContext(OPALCardsContext);
  const [selected, setSelected] = React.useState(20);
  const [tapping, setTapping] = React.useState(false);
  const [people, setPeople] = React.useState(1);
  const [visible, setVisible] = React.useState(false);

  let cardColor = '';
  let fontColor = 'black';
  switch(card.cardType) {
      case "Child/Youth":
          cardColor = "#84af72";
          break;
      case "Concession":
          cardColor = "#c7c5c5";
          break;
      case "Adult":
          cardColor = "#3a3837";
          fontColor = 'white'
          break;
      case "Senior/Pensioner":
          cardColor = "#f5c869";
          break;
  }

  function removeCardHandler(navigation: any, card: any, myOPALCards: any, setMyOPALCards: any) {
    const newCards = myOPALCards.filter((c: any) => c.cardNumber != card.cardNumber);
    setMyOPALCards(newCards);
    navigation.pop();
  }
  
  return (
    <Provider>
        <View style={{flex: 1, alignItems: 'center'}}>
          {/* @ts-ignore */}
          <View style={StyleSheet.compose(styles.topBox, {backgroundColor: cardColor})}>
            {/* @ts-ignore */}
            <View style={StyleSheet.compose(styles.cardDetails, {backgroundColor: cardColor})}>
              {/* @ts-ignore */}
              <View style={StyleSheet.compose(styles.cardTypeWrapper, {paddingTop: 10, backgroundColor: cardColor})}>
                <Text style={{fontWeight: 'bold', color: fontColor}}>Card Name:</Text>
                <Text style={{fontWeight: 'bold', color: fontColor}}>{card.nickname}</Text>
              </View>
              {/* @ts-ignore */}
              <View style={StyleSheet.compose(styles.cardTypeWrapper, {paddingBottom: 10, paddingTop: 4, backgroundColor: cardColor})}>
                <Text style={{fontWeight: 'bold', color: fontColor}}>Card Type:</Text>
                <Text style={{fontWeight: 'bold', color: fontColor}}>{card.cardType}</Text>
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 19, color: fontColor}}>{card.cardNumber}</Text>
            </View>
            {/* @ts-ignore */}
            <View style={StyleSheet.compose(styles.removeCardButtonWrapper, {backgroundColor: cardColor})}>
              {/* @ts-ignore */}
              <TouchableOpacity style={StyleSheet.compose(styles.removeCardButton, {backgroundColor: cardColor})} onPress={() => removeCardHandler(navigation, card, myOPALCards, setMyOPALCards)}>
                <Text style={{color: "#dd3636", fontSize: 18, padding: 4}}>Remove Card</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* @ts-ignore */}
          <View style={StyleSheet.compose(styles.cardBalanceWrapper, {backgroundColor: cardColor})}>
            {/* @ts-ignore */}
            <Text style={StyleSheet.compose(styles.cardBalance, {color: fontColor})}>${card.balance.toFixed(2)}</Text>
          </View>
          <View style={styles.topUpWrapper}>
            <TopUpValueMenu selected={selected} setSelected={setSelected} card={card}/>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            {/* @ts-ignore */}
            <TouchableOpacity style={StyleSheet.compose(styles.topUpButton, {backgroundColor: cardColor})} onPress={() => setVisible(true)}>
              <Text style={{fontWeight: 'bold', color: fontColor}}>Top Up Card</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomBox}>
            <TapNumberToggler people={people} setPeople={setPeople} card={card}/>
            <TapButton people={people} tapping={tapping} setTapping={setTapping} card={card} myCards={myOPALCards} setMyCards={setMyOPALCards}/>
          </View>
        </View>
        <PaymentOptionsPopUp visible={visible} setVisible={setVisible} navigation={navigation} item={card} amount={selected} myCards={myOPALCards} setMyCards={setMyOPALCards} />
      </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cardBalance: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -1,
  },
  cardDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTypeWrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: "60%",
  },
  bottomBox: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  removeCardButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#dd3636',
    width: '50%',
  },
  removeCardButtonWrapper: {
    margin: -1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topUpWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '100%'
  },
  topBox: {
    width: '100%',
    height: '23%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardBalanceWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
    height: '6%',
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 20,
  },
  topUpButton: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '90%'
  },
  trackOPALWrapper: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  }
});