import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from './Themed';
import { Ionicons } from '@expo/vector-icons';

export default function CreditCard(props: any) {
	const { card } = props;
	const image =
		card.cardType == 'VISA'
			? require('../assets/images/visa.png')
			: require('../assets/images/mastercard_logo.svg');
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={card.cardType == 'VISA' ? styles.visaImage : styles.mastercardImage} source={image} />
			</View>
			<View style={styles.cardDetailsContainer}>
				<View>
					<Text style={{ fontFamily: 'Proxima Nova', fontSize: 15 }}>**** **** **** *{card.cardNumber.slice(card.cardNumber.length - 4, card.cardNumber.length-1)}</Text>
					{card.tapped && <Text style={{ color: 'green' }}>tapped on</Text>}
				</View>
				<View style={{ paddingRight: 20 }}>
					<Ionicons name="ios-arrow-forward" size={24} color={'#336699'} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: 310,
		margin: 6
	},
	cardDetailsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 14,
		borderWidth: 1,
		borderRadius: 10,
		width: '66%',
		borderColor: '#336699'
	},
	imageContainer: {
		borderRadius: 10,
		borderColor: '#336699',
		borderWidth: 1,
		marginRight: 3,
		justifyContent: 'center',
		paddingLeft: 13,
		paddingRight: 13
	},
	visaImage: {
		width: 70,
		height: 60
	},
	mastercardImage: {
		width: 71,
		height: 44,
		marginTop: 8,
		marginBottom: 8
	}
});
