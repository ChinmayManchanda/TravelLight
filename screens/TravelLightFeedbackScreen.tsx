import * as React from 'react';
import { StyleSheet, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { Provider, Portal, Paragraph, Dialog } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import ConfirmationPopUp from '../components/ConfirmationPopUp';

export default function TravelLightFeedback({ navigation }: any) {
	const [ visible, setVisible ] = React.useState(false);
	const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);
	const goBackAction = () => navigation.pop();

	return (
		<Provider>
			<View style={styles.container}>
				<View style={styles.feedbackView}>
					<Image style={styles.feedbackImage} source={require('../assets/images/feedback_background.png')} />
				</View>
				<View style={styles.inputView}>
					<View style={{ top: 5 }}>
						<Text>Leave your experience with travel light here.</Text>
					</View>
					<TextInput style={styles.textInput} multiline={true} />
					<View style={styles.submitView}>
						<TouchableOpacity style={styles.submitButton} onPress={() => showDialog()}>
							<Text style={styles.submitText}>submit</Text>
						</TouchableOpacity>
					</View>
					<ConfirmationPopUp
						message="Feedback Submitted"
						visible={visible}
						hideDialog={hideDialog}
						goBackAction={goBackAction}
					/>
				</View>
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
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
	feedbackView: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '50%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	feedbackImage: {
		top: 0,
		width: 400,
		height: 300
	},
	inputView: {
		position: 'absolute',
		bottom: 0,
		height: '60%',
		width: '100%',
		alignItems: 'center'
	},
	textInput: {
		position: 'relative',
		height: 300,
		width: 330,
		top: 15,
		borderColor: '#6699cc',
		borderWidth: 1,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		backgroundColor: 'transparent',
		paddingTop: 3,
		paddingLeft: 8,
		paddingRight: 8,
		outlineWidth: 0
	},
	submitButton: {
		borderRadius: 24,
		backgroundColor: '#6699cc'
	},
	submitText: {
		fontFamily: 'Proxima Nova',
		fontSize: 26,
		paddingVertical: 6,
		paddingHorizontal: 130,
		color: '#ffffff'
	},
	submitView: {
		position: 'absolute',
		bottom: 20,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
