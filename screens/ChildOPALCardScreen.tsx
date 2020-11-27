import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { ChildOPALCardsContext } from '../hooks/context';
import TopUpValueMenu from '../components/TopUpValueMenu';
import TapButton from '../components/TapButton';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-native-paper';
import PaymentOptionsPopUp from '../components/PaymentOptionsPopUp';

export default function ChildOPALCardScreen({route, navigation}: any) {
    const {card} = route.params;
    const {myChildOPALCards, setMyChildOPALCards} = React.useContext(ChildOPALCardsContext);
    const [selected, setSelected] = React.useState(20);
    const [tapping, setTapping] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    return (
      <Provider>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.topBox}>
            <View style={styles.cardDetails}>
              {/* @ts-ignore */}
              <View style={StyleSheet.compose(styles.cardTypeWrapper, {paddingTop: 10})}>
                <Text style={{fontWeight: 'bold'}}>Card Name:</Text>
                <Text style={{fontWeight: 'bold'}}>{card.nickname}</Text>
              </View>
              {/* @ts-ignore */}
              <View style={StyleSheet.compose(styles.cardTypeWrapper, {paddingBottom: 10, paddingTop: 4})}>
                <Text style={{fontWeight: 'bold'}}>Card Type:</Text>
                <Text style={{fontWeight: 'bold'}}>{card.cardType}</Text>
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 19}}>{card.cardNumber}</Text>
            </View>
            <View style={styles.removeCardButtonWrapper}>
              <TouchableOpacity style={styles.removeCardButton} onPress={() => removeCardHandler(navigation, card, myChildOPALCards, setMyChildOPALCards)}>
                <Text style={{color: "#dd3636", fontSize: 18, padding: 4}}>Remove Card</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardBalanceWrapper}>
            <Text style={styles.cardBalance}>${card.balance.toFixed(2)}</Text>
          </View>
          <View style={styles.topUpWrapper}>
            <TopUpValueMenu selected={selected} setSelected={setSelected} card={card}/>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity style={styles.topUpButton} onPress={() => setVisible(true)}>
              <Text style={{fontWeight: 'bold'}}>Top Up Card</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.trackOPALWrapper}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Track OPAL Activity</Text>
              <View style={{paddingRight: 30}}>
                <Ionicons name="ios-arrow-forward" size={24} color="#84af72"/>            
              </View>
            </View>
          </View>
          <View style={styles.bottomBox}>
            <TapButton tapping={tapping} setTapping={setTapping} card={card} myCards={myChildOPALCards} setMyCards={setMyChildOPALCards}/>
          </View>
        </View>
        <PaymentOptionsPopUp visible={visible} setVisible={setVisible} navigation={navigation} item={card} amount={selected} myCards={myChildOPALCards} setMyCards={setMyChildOPALCards} />
      </Provider>
    );
}

function removeCardHandler(navigation: any, card: any, myChildOPALCards: any, setMyChildOPALCards: any) {
    const newCards = myChildOPALCards.filter((c: any) => c.cardNumber != card.cardNumber);
    setMyChildOPALCards(newCards);
    navigation.goBack();
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
    fontWeight: 'bold'
  },
  cardDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#84af72"
  },
  cardTypeWrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: "60%",
    backgroundColor: "#84af72"
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
    backgroundColor: "#84af72"
  },
  removeCardButtonWrapper: {
    margin: -1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#84af72"
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
    backgroundColor: "#84af72"
  },
  cardBalanceWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
    height: '6%',
    borderColor: "#84af72",
    backgroundColor: "#84af72",
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 20,
    marginTop: -1
  },
  topUpButton: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#84af72",
    backgroundColor: '#84af72',
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