import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { UserContext } from '../hooks/context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function AccountScreen({ navigation }: any) {
	const { user, setUser } = React.useContext(UserContext);
	return (
		<View style={styles.container}>
			<View style={styles.topView}>
				<TouchableOpacity onPress={() => navigation.push('UpdateAccountDetails')}>
					<View style={styles.innerView}>
						<Text style={styles.title}>Your details</Text>
						<View style={{ paddingRight: 60 }}>
							<Feather name="edit" size={28} color="#6699cc" />
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
			<View style={styles.infoView}>
				<View style={styles.firstView}>
					<Text style={styles.text}>First Name:</Text>
					<View style={{ left: 8 }}>
						<Text style={styles.ansText}>{user.firstname}</Text>
					</View>
				</View>
				<View style={styles.lastView}>
					<Text style={styles.text}>Last Name:</Text>
					<View style={{ left: 8 }}>
						<Text style={styles.ansText}>{user.lastname}</Text>
					</View>
				</View>
				<View style={styles.emailView}>
					<Text style={styles.text}>Email:</Text>
					<View style={{ left: 8 }}>
						<Text style={styles.ansText}>{user.email}</Text>
					</View>
				</View>
			</View>
			<View style={styles.signOutView}>
				<TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Initial')}>
					<Text style={styles.signOutText}>sign out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		fontSize: 28,
		fontFamily: 'Proxima Nova'
	},
	topView: {
		position: 'absolute',
		top: 33,
		left: 25,
		width: '100%'
	},
	firstView: {
		top: 0
	},
	lastView: {
		top: 30
	},
	emailView: {
		top: 60
	},
	ansText: {
		marginTop: 3,
		fontSize: 16
	},
	text: {
		fontSize: 18,
		fontFamily: 'Proxima Nova'
	},
	infoView: {
		left: 25,
		position: 'relative',
		top: 100
	},
	signOutButton: {
		borderRadius: 24,
		borderColor: '#dd3636',
		borderWidth: 2,
		backgroundColor: '#ffffff'
	},
	signOutText: {
		fontFamily: 'Proxima Nova',
		fontSize: 26,
		paddingVertical: 4,
		paddingHorizontal: 50,
		color: '#dd3636'
	},
	signOutView: {
		position: 'absolute',
		bottom: 300,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	innerView: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});
