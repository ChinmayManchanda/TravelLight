import * as React from 'react';
import { StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { CreditCardsContext } from '../hooks/context';
import { useTheme } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LinkCreditCardScreen({route, navigation}: any) {
    const {myCreditCards, setMyCreditCards} = React.useContext(CreditCardsContext);
    const [name, setName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [expDate, setExpDate] = React.useState("")
    const [cardType, setCardType] = React.useState("");
    const [securityNumber, setSecurityNumber] = React.useState("")

    function addCardHandler(number: any, expiry: any, name: any, cardType: any, securityNumber: any, myCreditCards: any, setMyCreditCards: any, navigation: any) {
      const newCard = {
          accountHolder: name,
          cardNumber: number,
          expiryDate: expiry,
          cardType: cardType,
          securityNumber: securityNumber,
      };

      if (number && expiry && name && cardType && securityNumber) {
          setMyCreditCards(myCreditCards.concat(newCard))
          navigation.goBack()
      }
    }

    return (
    <View style={styles.container}>
    <Image
      style={styles.cardImage}
      source={require('../assets/images/add_credit_card.png')}
    />
    <View style={styles.textInputWrapper}>
      <MaterialCommunityIcons name="account" size={24} color="#6699cc" />
      <TextInput
        style={styles.textInput}
        placeholder={"Name on Card"}
        onChangeText={(name) => setName(name)}
      />
    </View>
    <View style={styles.textInputWrapper}>
      <MaterialCommunityIcons name="card-bulleted" size={24} color="#6699cc" />
      <TextInput
        style={styles.textInput}
        placeholder={'Card Number'}
        onChangeText={(number) => setNumber(number)}
        keyboardType={'number-pad'}
      />
    </View>
    <View style={styles.textInputWrapper}>
      <MaterialCommunityIcons name="calendar" size={24} color="#6699cc" />
      <TextInput
        style={styles.textInput}
        placeholder={'Expiry Date'}
        onChangeText={(date) => setExpDate(date)}
      />
    </View>
    <View style={styles.textInputWrapper}>
      <MaterialCommunityIcons name="key" size={24} color="#6699cc" />
      <TextInput
        // @ts-ignore
        style={styles.textInput}
        placeholder={'Security Code'}
        onChangeText={(number) => setSecurityNumber(number)}
        keyboardType={'number-pad'}
      />
    </View>
    <View style={{alignItems: 'flex-start', width: '70%', marginTop: 20}}>
      <Text>Select the type of Credit/Debit card:</Text>
    </View>
    <View style={styles.cardTypeContainer}>
      {/* @ts-ignore */}
      <TouchableOpacity style={StyleSheet.compose(styles.cardType, {borderColor: (cardType == 'VISA' ? "#6699cc" : "#bbb")})} onPress={() => setCardType('VISA')}>
        <Image style={{width: 70, height: 60}} source={require('../assets/images/visa.png')}/>
      </TouchableOpacity>
      {/* @ts-ignore */}
      <TouchableOpacity style={StyleSheet.compose(styles.cardType, {borderColor: (cardType == 'Mastercard' ? "#6699cc" : "#bbb")})} onPress={() => setCardType('Mastercard')}>
        <Image style={{width: 71, height: 44}} source={require('../assets/images/mastercard_logo.svg')}/>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.addCard} onPress={() =>
        addCardHandler(number, expDate, name, cardType, securityNumber, myCreditCards, setMyCreditCards, navigation)}>
      <Text style={{fontWeight: 'bold', color: 'white', padding: 10}}>Add Card</Text>
    </TouchableOpacity>
  </View>
    );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	},
	textInput: {
		margin: 5,
		padding: 10,
		borderColor: '#6699cc',
		borderWidth: 2,
		outlineColor: '#6699cc',
		width: '60%',
		outlineRadius: 13
	},
	cardType: {
    width: 80,
    height: 70,
		borderWidth: 3,
		borderRadius: 12,
		margin: 6,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
		alignItems: 'center'
	},
	cardImage: {
		width: 200,
		height: 111,
		marginBottom: 50,
	},
	addCard: {
		marginTop: 30,
		width: 250,
		backgroundColor: '#6699cc',
		borderRadius: 15,
		alignItems: 'center'
  },
	textInputWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	}
});