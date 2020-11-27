import * as React from 'react';
import { StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { ChildOPALCardsContext } from '../hooks/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LinkChildOPALCardScreen({route, navigation}: any) {
    const {myChildOPALCards, setMyChildOPALCards} = React.useContext(ChildOPALCardsContext);

    const [nickname, setNickname] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [securityNumber, setSecurityNumber] = React.useState("");

    function addCardHandler(number: any, securityNumber: any, nickname: any, myChildOPALCards: any, setMyChildOPALCards: any, navigation: any) {
      const newCard = {
          nickname: nickname,
          balance: 10.20,
          cardNumber: number,
          cardSecurityNumber: securityNumber,
          cardType: "Child/Youth",
          tapped: false,
      };
      if (number && securityNumber && nickname) {
          setMyChildOPALCards(myChildOPALCards.concat(newCard))
          navigation.goBack()
      }
    }

    return (
    <View style={styles.container}>
    <Image
      style={styles.opalImage}
      source={require('../assets/images/add_opal_card.png')}
    />
    <View style={styles.textInputWrapper}>
				<MaterialCommunityIcons name="account" size={24} color="#6699cc" />
				<TextInput
					style={styles.textInput}
					placeholder={"Card Nickname"}
					onChangeText={(nickname) => setNickname(nickname)}
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
				<MaterialCommunityIcons name="key" size={24} color="#6699cc" />
				<TextInput
					// @ts-ignore
					style={styles.textInput}
					placeholder={'Card Security Number'}
					onChangeText={(securityNumber) => setSecurityNumber(securityNumber)}
					keyboardType={'number-pad'}
				/>
			</View>
    <TouchableOpacity style={styles.addCard} onPress={() =>
        addCardHandler(number, securityNumber, nickname, myChildOPALCards, setMyChildOPALCards, navigation)}>
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
		width: 200,
		borderWidth: 3,
		borderRadius: 12,
		margin: 6,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardTypeContainer: {
		width: '100%',
		alignItems: 'center'
	},
	opalImage: {
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