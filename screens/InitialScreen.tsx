import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Modal } from 'react-native';

import { Text, View } from '../components/Themed';
import { TouchableOpacity, RotationGestureHandler } from 'react-native-gesture-handler';

export default function InitialScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<View style={styles.upperBox}>
				<View style={styles.tramView}>
					<Image style={styles.tramImage} source={require('../assets/images/full_logo.png')} />
				</View>
				<View style={styles.operaView}>
					<Image style={styles.operaImage} source={require('../assets/images/opera_house.png')} />
				</View>
				<View style={styles.titleBox}>
					<Text style={styles.title}>Welcome!</Text>
				</View>
			</View>
			<View style={styles.lowerBox}>
				<View style={styles.loginView}>
					<TouchableOpacity onPress={() => navigation.push('Login')}>
						<Text style={styles.loginText}>LOGIN</Text>
					</TouchableOpacity>
				</View>
				<Image style={styles.loginArrow} source={require('../assets/images/back_white.png')} />
				<View style={styles.alreadyAccountText}>
					<Text style={{ color: '#ffffff' }}>already have an account ?</Text>
				</View>
				<View style={styles.signUpView}>
					<TouchableOpacity style={styles.signUpTouchable} onPress={() => navigation.push('Register')}>
						<Text style={styles.signUpText}>SIGN UP</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	titleBox: {
		top: 150,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 55,
		color: '#6699cc',
		fontFamily: 'Proxima Nova Extrabold'
	},
	lowerBox: {
		width: '100%',
		height: '20%',
		bottom: 0,
		position: 'absolute',
		backgroundColor: '#6699cc'
	},
	loginView: {
		position: 'absolute',
		right: '15%',
		bottom: '25%',
		backgroundColor: 'transparent'
	},
	loginText: {
		color: '#ffffff',
		fontFamily: 'Proxima Nova',
		fontSize: 20
	},
	loginArrow: {
		flex: 1,
		resizeMode: 'contain',
		position: 'absolute',
		height: 18,
		width: 18,
		right: '9%',
		bottom: '26.5%',
		transform: [ { rotate: '180deg' } ]
	},
	alreadyAccountText: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: '28%',
		left: '15%',
		fontFamily: 'Proxima Nova'
	},
	signUpView: {
		top: 18,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center'
	},
	signUpTouchable: {
		borderRadius: 24,
		borderWidth: 2,
		borderColor: '#ffffff'
	},
	signUpText: {
		color: '#ffffff',
		fontFamily: 'Proxima Nova',
		fontSize: 20,
		paddingVertical: 8,
		paddingHorizontal: 90
	},

	operaView: {
		position: 'absolute',
		bottom: 0,
		right: 20
	},
	operaImage: {
		flex: 1,
		width: 200,
		height: 70,
		resizeMode: 'contain'
	},
	upperBox: {
		position: 'relative',
		height: '80%',
		width: '100%'
	},
	tramView: {
		top: 150,
		alignItems: 'center',
		justifyContent: 'center'
	},
	tramImage: {
		flex: 1,
		width: 350,
		height: 150,
		resizeMode: 'contain'
	}
});
