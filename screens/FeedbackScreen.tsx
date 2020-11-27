import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

export default function FeedbackScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<View style={styles.tripView}>
				<TouchableOpacity onPress={() => navigation.push('TripFeedback')}>
					<View style={styles.innerView}>
						<Text style={styles.textStyle}>Your Trip Feedback</Text>
						<View style={{ paddingRight: 60 }}>
							<Ionicons name="ios-arrow-forward" size={24} color={'#6699cc'} />
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					top: 70,
					borderBottomColor: 'black',
					borderBottomWidth: 1,
					width: '90%',
					left: '5%'
				}}
			/>
			<View style={styles.sayView}>
				<TouchableOpacity onPress={() => navigation.push('HaveYourSay')}>
					<View style={styles.innerView}>
						<Text style={styles.textStyle}>Have Your Say</Text>
						<View style={{ paddingRight: 60 }}>
							<Ionicons name="ios-arrow-forward" size={24} color={'#6699cc'} />
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					top: 130,
					borderBottomColor: 'black',
					borderBottomWidth: 1,
					width: '90%',
					left: '5%'
				}}
			/>
			<View style={styles.travelView}>
				<TouchableOpacity onPress={() => navigation.push('TravelLightFeedback')}>
					<View style={styles.innerView}>
						<Text style={styles.textStyle}>Leave Travel Light Feedback</Text>
						<View style={{ paddingRight: 60 }}>
							<Ionicons name="ios-arrow-forward" size={24} color={'#6699cc'} />
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	tripView: {
		position: 'absolute',
		top: 30,
		left: 20,
		width: '100%'
	},
	innerView: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	sayView: {
		position: 'absolute',
		top: 90,
		left: 20,
		width: '100%'
	},
	travelView: {
		position: 'absolute',
		top: 150,
		left: 20,
		width: '100%'
	},
	textStyle: {
		fontSize: 20,
		fontFamily: 'Proxima Nova'
	}
});
