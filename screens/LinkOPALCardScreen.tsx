import * as React from 'react';
import { StyleSheet, Button, TextInput, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { Text, View } from '../components/Themed';
import { OPALCardsContext } from '../hooks/context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LinkOPALCardScreen({ navigation }: any) {
	const { myOPALCards, setMyOPALCards } = React.useContext(OPALCardsContext);
	const [ nickname, setNickname ] = React.useState('');
	const [ number, setNumber ] = React.useState('');
	const [ securityNumber, setSecurityNumber ] = React.useState('');
	const [ cardType, setCardType ] = React.useState('');

	function addCardHandler(
		number: any,
		securityNumber: any,
		nickname: any,
		cardType: any,
		myOPALCards: any,
		setMyOPALCards: any,
		navigation: any
	) {
		const newCard = {
			nickname: nickname,
			balance: 10.2,
			cardNumber: number,
			cardSecurityNumber: securityNumber,
			cardType: cardType,
			tapped: false
		};
		if (number && securityNumber && nickname && cardType) {
			setMyOPALCards(myOPALCards.concat(newCard));
			navigation.goBack();
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
			<View style={{alignItems: 'flex-start', width: '70%', marginTop: 20}}>
				<Text>Select the type of OPAL card:</Text>
			</View>
			<View style={styles.cardTypeContainer}>
				{/* @ts-ignore */}
				<TouchableOpacity style={StyleSheet.compose(styles.cardType, {backgroundColor: "#3a3837", marginTop: 10, borderColor: (cardType == 'Adult' ? "#6699cc" : "#3a3837")})} onPress={() => setCardType('Adult')}>
					<Text style={{color: 'white', padding: 10, fontWeight: 'bold'}}>Adult</Text>
				</TouchableOpacity>
				{/* @ts-ignore */}
				<TouchableOpacity style={StyleSheet.compose(styles.cardType, {backgroundColor: "#84af72", borderColor: (cardType == 'Child/Youth' ? "#6699cc" : "#84af72")})} onPress={() => setCardType('Child/Youth')}>
					<Text style={{padding: 10, fontWeight: 'bold'}}>Child/Youth</Text>
				</TouchableOpacity>
				{/* @ts-ignore */}
				<TouchableOpacity style={StyleSheet.compose(styles.cardType, {backgroundColor: "#c7c5c5", borderColor: (cardType == 'Concession' ? "#6699cc" : "#c7c5c5")})} onPress={() => setCardType('Concession')}>
					<Text style={{padding: 10, fontWeight: 'bold'}}>Concession</Text>
				</TouchableOpacity>
				{/* @ts-ignore */}
				<TouchableOpacity style={StyleSheet.compose(styles.cardType, {backgroundColor: "#f5c869", borderColor: (cardType == 'Senior/Pensioner' ? "#6699cc" : "#f5c869")})} onPress={() => setCardType('Senior/Pensioner')}>
					<Text style={{padding: 10, fontWeight: 'bold'}}>Senior/Pensioner</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.addCard} onPress={() =>
					addCardHandler(number, securityNumber, nickname, cardType, myOPALCards, setMyOPALCards, navigation)}>
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
