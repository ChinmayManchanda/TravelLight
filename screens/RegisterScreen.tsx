import * as React from 'react';
import { StyleSheet, TextInput, Button, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { UserContext } from '../hooks/context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RegisterScreen({ navigation }: any) {
	const [ validFirstName, setValidFirstName ] = React.useState(false);
	const [ validLastName, setValidLastName ] = React.useState(false);
	const [ validEmail, setValidEmail ] = React.useState(false);
	const [ validPassword, setValidPassword ] = React.useState(false);
	const [ samePassword, setSamePassword ] = React.useState(false);

	const [ myFirstName, setFirstName ] = React.useState('');
	const [ myLastName, setLastName ] = React.useState('');
	const [ myEmail, setEmail ] = React.useState('');
	const [ myPassword, setPassword ] = React.useState('');

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
						placeholder="  First Name"
					/>
					<TextInput
						style={validLastName ? styles.textInputValid : styles.textInputInvalid}
						onChangeText={(lastname) => checkLastname(lastname, setLastName, setValidLastName)}
						placeholder="  Last Name"
					/>
					<TextInput
						style={validEmail ? styles.textInputValid : styles.textInputInvalid}
						onChangeText={(email) => checkEmail(email, setEmail, setValidEmail)}
						placeholder="  Email"
					/>
					<TextInput
						style={validPassword ? styles.textInputValid : styles.textInputInvalid}
						secureTextEntry
						onChangeText={(password) => checkValidPassword(password, setValidPassword, setPassword)}
						placeholder="  Password"
					/>
					<TextInput
						style={samePassword ? styles.textInputValid : styles.textInputInvalid}
						secureTextEntry
						onChangeText={(confirmPassword) =>
							checkSamePassword(confirmPassword, myPassword, setSamePassword)}
						placeholder="  Confirm password"
					/>
				</View>
			</View>
			<View style={styles.registerView}>
				<TouchableOpacity
					style={styles.registerButton}
					onPress={() =>
						handleRegister(
							navigation,
							validFirstName,
							validLastName,
							validEmail,
							validPassword,
							samePassword,
							setUser,
							myFirstName,
							myLastName,
							myEmail,
							myPassword
						)}
				>
					<Text style={styles.registerText}>sign up</Text>
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

// contains atleast 8 characters
// contains atleast 1 number
// contains atleast 1 lowercase letter
// contains asleast 1 uppercase letter
// contains only 0-9a-zA-Z
function checkValidPassword(password: any, setValidPassword: any, setPassword: any) {
	setPassword(password);
	if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
		setValidPassword(true);
	}
}

function checkSamePassword(password1: any, password2: any, setSamePassword: any) {
	if (password1 === password2) {
		setSamePassword(true);
	}
}

function handleRegister(
	navigation: any,
	validFirstName: any,
	validLastName: any,
	validEmail: any,
	validPassword: any,
	samePassword: any,
	setUser: any,
	firstname: any,
	lastname: any,
	email: any,
	password: any
) {
	if (validFirstName && validLastName && validEmail && validPassword && samePassword) {
		setUser({
			firstname,
			lastname,
			email,
			password
		});
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
	},
	registerButton: {
		borderRadius: 24,
		backgroundColor: '#6699cc'
	},
	registerText: {
		fontFamily: 'Proxima Nova',
		fontSize: 26,
		paddingVertical: 8,
		paddingHorizontal: 130,
		color: '#ffffff'
	},
	registerView: {
		position: 'absolute',
		bottom: 10,
		height: '10%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
