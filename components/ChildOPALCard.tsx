import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import { Text, View } from './Themed';
import { UserContext } from '../hooks/context';
import { Ionicons } from '@expo/vector-icons';

export default function ChildOPALCard(props: any) {
	const { card } = props;
	const { user, setUser } = React.useContext(UserContext);
	return (
		<View style={styles.container}>
			{/* @ts-ignore */}
			<View style={styles.balanceContainer}>
				<Text style={{ fontSize: 17, fontWeight: 'bold' }}>${card.balance.toFixed(2)}</Text>
			</View>
			{/* @ts-ignore */}
			<View style={styles.cardDetailsContainer}>
				<View>
					{card.nickname ? (
						<Text style={{ fontFamily: 'Proxima Nova', fontSize: 16 }}>{card.nickname}</Text>
					) : (
						<Text>{card.cardNumber}</Text>
					)}
					{card.tapped && <Text style={{ color: 'green' }}>tapped on</Text>}
				</View>
				<View style={{ paddingRight: 20 }}>
					<Ionicons name="ios-arrow-forward" size={24} color={'#84af72'} />
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
		borderColor: '#84af72',
		width: '66%'
	},
	balanceContainer: {
		borderRadius: 10,
		backgroundColor: '#84af72',
		padding: 22,
		marginRight: 3,
		justifyContent: 'center',
		alignItems: 'center',
		width: '32%'
	}
});
