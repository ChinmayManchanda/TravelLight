import * as React from 'react';
import { StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { UserContext } from '../hooks/context';

export default function RegisterScreen({ navigation }: any) {
	const [ validFirstName, setValidFirstName ] = React.useState(false);
	const [ validLastName, setValidLastName ] = React.useState(false);
	const [ validEmail, setValidEmail ] = React.useState(false);

	const [ myFirstName, setFirstName ] = React.useState('');
	const [ myLastName, setLastName ] = React.useState('');
	const [ myEmail, setEmail ] = React.useState('');
	const { user, setUser } = React.useContext(UserContext);

	return (
		<View style={styles.container}>
			<View style={styles.tramView}>
				<Image style={styles.tramImage} source={require('../assets/images/tram_only_logo.png')} />
			</View>

			<View style={styles.infoView}>
				<View style={styles.infoInput}>
					<TextInput
						style={validFirstName ? styles.textInputValid : styles.textInputInvalid}
						onChangeText={(firstname) => checkFirstName(firstname, setFirstName, setValidFirstName)}
						placeholder="Firstname..."
					/>
					<TextInput
						style={validLastName ? styles.textInputValid : styles.textInputInvalid}
						onChangeText={(lastname) => checkLastname(lastname, setLastName, setValidLastName)}
						placeholder="Lastname..."
					/>
					<TextInput
						style={validEmail ? styles.textInputValid : styles.textInputInvalid}
						onChangeText={(email) => checkEmail(email, setEmail, setValidEmail)}
						placeholder="Email..."
					/>
				</View>
			</View>
			<View style={styles.updateView}>
				<TouchableOpacity
					style={styles.updateButton}
					onPress={() =>
						handleRegister(
							navigation,
							user,
							validFirstName,
							validLastName,
							validEmail,
							setUser,
							myFirstName,
							myLastName,
							myEmail
						)}
				>
					<Text style={styles.updateText}>update</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

function checkFirstName(firstname: any, setFirstName: any, setValidFirstName: any) {
	setFirstName(firstname);
	if (firstname.length > 0 && firstname.match(/[a-zA-Z]+/)) {
		setValidFirstName(true);
	}
}

function checkLastname(lastname: any, setLastName: any, setValidLastName: any) {
	setLastName(lastname);
	if (lastname.length > 0 && lastname.match(/[a-zA-Z]+/)) {
		setValidLastName(true);
	}
}

function checkEmail(email: any, setEmail: any, setValidEmail: any) {
	setEmail(email);
	if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		setValidEmail(true);
	}
}

function handleRegister(
	navigation: any,
	user: any,
	validFirstName: any,
	validLastName: any,
	validEmail: any,
	setUser: any,
	firstname: any,
	lastname: any,
	email: any
) {
	if (validFirstName && validLastName && validEmail) {
		user.firstname = firstname;
		user.lastname = lastname;
		user.email = email;

		navigation.reset({
			index: 0,
			routes: [
				{
					name: 'Root',
					params: {}
				}
			]
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	tramView: {
		position: 'absolute',
		top: 0,
		height: '30%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tramImage: {
		top: 0,
		width: 350,
		height: 100,
		resizeMode: 'contain'
	},
	textInput: {
		borderColor: 'gray',
		borderWidth: 2,
		margin: 15,
		padding: 10
	},
	textInputValid: {
		margin: 10,
		padding: 7,
		borderRadius: 20,
		borderColor: '#6699cc',
		borderWidth: 1
	},
	textInputInvalid: {
		margin: 10,
		padding: 7,
		borderRadius: 20,
		borderColor: '#6699cc',
		borderWidth: 1
	},
	updateButton: {
		borderRadius: 24,
		backgroundColor: '#6699cc'
	},
	updateText: {
		fontFamily: 'Proxima Nova',
		fontSize: 26,
		paddingVertical: 8,
		paddingHorizontal: 130,
		color: '#ffffff'
	},
	updateView: {
		position: 'absolute',
		bottom: 10,
		height: '10%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoView: {
		position: 'absolute',
		bottom: 80,
		height: '60%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	infoInput: {
		position: 'absolute',
		top: 0,
		width: '90%'
	}
});
