import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { CreditCardsContext } from '../hooks/context';
import TapButton from '../components/TapButton';
import TapNumberToggler from '../components/TapNumberToggler';

export default function CreditCardScreen({route, navigation}: any) {
    const {card} = route.params;
    const {myCreditCards, setMyCreditCards} = React.useContext(CreditCardsContext)
    const [tapping, setTapping] = React.useState(false);
    const [people, setPeople] = React.useState(1);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.topBox}>
        <View style={styles.cardDetails}>
          <View style={styles.cardTypeWrapper}>
            <Text style={{fontWeight: 'bold'}}>Card Type:</Text>
            <Text style={{fontWeight: 'bold'}}>{card.cardType}</Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 19}}>**** **** **** *{card.cardNumber.slice(card.cardNumber.length - 4, card.cardNumber.length-1)}</Text>
        </View>
        <View style={styles.removeCardButtonWrapper}>
          <TouchableOpacity style={styles.removeCardButton} onPress={() => removeCardHandler(navigation, card, myCreditCards, setMyCreditCards)}>
            <Text style={{color: "#dd3636", fontSize: 18, padding: 4}}>Remove Card</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardTypeImage}>
        <Image style={card.cardType == "VISA" ? styles.visaImage : styles.mastercardImage} source={card.cardType == "VISA" ? require('../assets/images/visa.png') : require('../assets/images/mastercard_logo.svg')} />
      </View>
      <View style={styles.tramImageWrapper}>
        <Image
            style={{width: 200, height: 110}}
            source={require('../assets/images/tram_only_logo.png')}
          />
      </View>
      <View style={styles.bottomBox}>
        <TapNumberToggler people={people} setPeople={setPeople} card={card}/>
        <TapButton people={people} tapping={tapping} setTapping={setTapping} card={card} myCards={myCreditCards} setMyCards={setMyCreditCards}/>
      </View>
    </View>
  );
}

function removeCardHandler(navigation: any, card: any, myCreditCards: any, setMyCreditCards: any) {
    const newCards = myCreditCards.filter((c: any) => c.cardNumber != card.cardNumber);
    setMyCreditCards(newCards);
    navigation.goBack();
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cardDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#6699cc"
  },
  cardTypeWrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: "60%",
    padding: 10,
    backgroundColor: "#6699cc"
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
    backgroundColor: "#6699cc"
  },
  removeCardButtonWrapper: {
    margin: -1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#6699cc"
  },
  tramImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  topBox: {
    width: '100%',
    height: '20%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#6699cc"
  },
  visaImage: {
    width: 70,
    height: 60,
  },
  mastercardImage: {
    width: 71,
    height: 44,
    marginTop: 8,
    marginBottom: 8,
  },
  cardTypeImage: {
    margin: -1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
    height: '9%',
    borderColor: "#6699cc",
    backgroundColor: "#6699cc",
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 20,
  }
});