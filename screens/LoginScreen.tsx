import * as React from 'react';
import { StyleSheet, Button, TextInput, Image } from 'react-native';
import { Provider, Dialog, Paragraph } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import MaterialIcon from '../utils/MaterialIcon'; // add in icons later next to inputs
import { UserContext } from '../hooks/context';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity, RotationGestureHandler } from 'react-native-gesture-handler';

export default function LoginScreen({ navigation }: any) {
	const [ validPassword, setValidPassword ] = React.useState(false);
	const [ validEmail, setValidEmail ] = React.useState(false);
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ rememberMe, setRememberMe ] = React.useState(false);

	const { user, setUser } = React.useContext(UserContext);
	const [ visible, setVisible ] = React.useState(false);
	const [ section, setSection ] = React.useState(false);

	const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);
	const showSection = () => setSection(true);
	const hideSection = () => setSection(false);

	return (
		<Provider>
			<View style={styles.container}>
				<View style={styles.tramView}>
					<Image style={styles.tramImage} source={require('../assets/images/tram_only_logo.png')} />
				</View>

				<View style={styles.infoView}>
					<View style={styles.infoInput}>
						<TextInput
							style={validEmail ? styles.textInputValid : styles.textInputInvalid}
							onChangeText={(email) => checkEmail(email, setEmail, setValidEmail)}
							placeholder="Email..."
						/>
						<TextInput
							style={validPassword ? styles.textInputValid : styles.textInputInvalid}
							secureTextEntry
							onChangeText={(password) => checkPassword(password, setPassword, setValidPassword)}
							placeholder="  Password"
						/>
					</View>
					<View style={styles.forgotPassButton}>
						<TouchableOpacity onPress={() => showDialog()}>
							<Text style={styles.forgotPassText}>Forgot Password?</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.rememberMeButton}>
						<CheckBox
							containerStyle={{ backgroundColor: 'transparent' }}
							title="Remember Me"
							checked={rememberMe}
							onPress={() => setRememberMe(!rememberMe)}
						/>
					</View>
				</View>
				<View style={styles.logInView}>
					<TouchableOpacity
						style={styles.logInButton}
						onPress={() =>
							handleLogin(navigation, user, validEmail, validPassword, email, password, setUser)}
					>
						<Text style={styles.logInText}>log in</Text>
					</TouchableOpacity>
				</View>
			</View>

			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Content>
					<TextInput placeholder="Email..." />
				</Dialog.Content>
				<Dialog.Actions>
					<Button title="Enter" onPress={() => showSection()} />
				</Dialog.Actions>
			</Dialog>

			<Dialog visible={section} onDismiss={hideSection}>
				<Dialog.Content>
					<Paragraph>An email with the reset link has been sent to your email address</Paragraph>
				</Dialog.Content>
				<Dialog.Actions>
					<Button title="Okay" onPress={() => navigation.pop()} />
				</Dialog.Actions>
			</Dialog>
		</Provider>
	);
}
function handleLogin(
	navigation: any,
	user: any,
	validEmail: any,
	validPassword: any,
	email: any,
	password: any,
	setUser: any
) {
	if (validEmail && validPassword) {
		setUser({
			firstname: user.firstname,
			lastname: user.lastname,
			email: email,
			password: password
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
function checkPassword(password: any, setPassword: any, setValidPassword: any) {
	setPassword(password);
	if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
		setValidPassword(true);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%'
	},
	textInput: {
		margin: 20,
		padding: 10,
		borderColor: 'gray',
		borderWidth: 2
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
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tramImage: {
		top: 70,
		width: 350,
		height: 100,
		resizeMode: 'contain'
	},
	infoView: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	infoInput: {
		position: 'relative',
		bottom: 380,
		width: '90%'
	},
	logInButton: {
		borderRadius: 24,
		backgroundColor: '#6699cc'
	},
	logInText: {
		fontFamily: 'Proxima Nova',
		fontSize: 26,
		paddingVertical: 8,
		paddingHorizontal: 140,
		color: '#ffffff'
	},
	logInView: {
		position: 'absolute',
		bottom: 20,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	forgotPassButton: {
		position: 'absolute',
		right: 30,
		height: 12,
		bottom: 355
	},
	rememberMeButton: {
		left: 25,
		position: 'absolute',
		bottom: 330
	},
	forgotPassText: {
		fontSize: 16,
		fontFamily: 'Proxima Nova',
		color: '#6699cc'
	}
});
