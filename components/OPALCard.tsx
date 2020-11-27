import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';
import { UserContext } from '../hooks/context';
import { Ionicons } from '@expo/vector-icons';

export default function OPALCard(props: any) {
	const { card } = props;
	const { user, setUser } = React.useContext(UserContext);
	let cardColor = '';
	let fontColor = 'black';
	switch (card.cardType) {
		case 'Child/Youth':
			cardColor = '#84af72';
			break;
		case 'Concession':
			cardColor = '#c7c5c5';
			break;
		case 'Adult':
			cardColor = '#3a3837';
			fontColor = 'white';
			break;
		case 'Senior/Pensioner':
			cardColor = '#f5c869';
			break;
	}
	return (
		<View style={styles.container}>
			{/* @ts-ignore */}
			<View style={StyleSheet.compose(styles.balanceContainer, { backgroundColor: cardColor })}>
				<Text style={{ fontSize: 17, fontWeight: 'bold', color: fontColor }}>${card.balance.toFixed(2)}</Text>
			</View>
			{/* @ts-ignore */}
			<View style={StyleSheet.compose(styles.cardDetailsContainer, { borderColor: cardColor })}>
				<View>
					{card.nickname ? (
						<Text style={{ fontFamily: 'Proxima Nova', fontSize: 16 }}>{card.nickname}</Text>
					) : (
						<Text>{card.cardNumber}</Text>
					)}
					{card.tapped && <Text style={{ color: 'green', fontFamily: 'Proxima Nova' }}>tapped on</Text>}
				</View>
				<View style={{ paddingRight: 20 }}>
					<Ionicons name="ios-arrow-forward" size={24} color={cardColor} />
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
		width: '66%'
	},
	balanceContainer: {
		borderRadius: 10,
		backgroundColor: '#aaa',
		padding: 22,
		marginRight: 3,
		justifyContent: 'center',
		alignItems: 'center',
		width: '32%'
	}
});
