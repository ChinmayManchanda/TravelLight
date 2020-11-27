import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TapNumberToggler(props: any) {
	const { people, setPeople, card } = props;

	return (
		<View style={{ width: '90%' }}>
			<Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 8 }}>Cover multiple fares:</Text>
			<View style={styles.togglePeopleContainer}>
				{card.tapped || people == 1 ? (
					<MaterialCommunityIcons name="minus-circle-outline" size={45} color="black" />
				) : (
					<TouchableOpacity
						onPress={() => {
							if (people > 1) {
								setPeople(people - 1);
							}
						}}
					>
						<MaterialCommunityIcons name="minus-circle" size={45} color="black" />
					</TouchableOpacity>
				)}
				<Text style={styles.numberWrapper}>{people}</Text>
				{card.tapped || people == 5 ? (
					<MaterialCommunityIcons name="plus-circle-outline" size={45} color="black" />
				) : (
					<TouchableOpacity
						onPress={() => {
							if (people <= 4) {
								setPeople(people + 1);
							}
						}}
					>
						<MaterialCommunityIcons name="plus-circle" size={45} color="black" />
					</TouchableOpacity>
				)}
			</View>
			<Text style={{ paddingTop: 5 }}>* The number you choose should include you </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	togglePeopleContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	numberWrapper: {
		paddingLeft: 30,
		paddingRight: 30,
		fontSize: 30
	}
});
