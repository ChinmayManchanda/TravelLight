import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { RadioButton, Dialog, Provider, Portal, Paragraph } from 'react-native-paper';
import ConfirmationPopUP from '../components/ConfirmationPopUp';
import ConfirmationPopUp from '../components/ConfirmationPopUp';

export default function HaveYourSay({ navigation }: any) {
	const [ visible, setVisible ] = React.useState(false);
	const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);
	const goBackAction = () => navigation.pop();

	var [ answer1, setAnswer1Type ] = React.useState('NAND');
	var [ answer2, setAnswer2Type ] = React.useState('NAND');
	var [ answer3, setAnswer3Type ] = React.useState('NAND');

	var myQuestions = [
		{
			Q: '1. I would be interested in the expansion of the Light Rail network as a priority improvement',
			type: answer1,
			func: setAnswer1Type
		},
		{
			Q: '2. I would be interested in the improved speed of the Light Rail as a priority',
			type: answer2,
			func: setAnswer2Type
		},
		{
			Q:
				'3. I would be interested in an increase in the number of Light Rails trams active at any given time as a priority',
			type: answer3,
			func: setAnswer3Type
		}
	];

	return (
		<Provider>
			<View style={styles.container}>
				<View style={styles.feedbackView}>
					<Image style={styles.feedbackImage} source={require('../assets/images/feedback_background.png')} />
				</View>
				<View style={styles.questionView}>
					{myQuestions.map((item) => {
						return (
							<View>
								<Text style={styles.optionsText}>{item.Q}</Text>
								<View style={styles.options}>
									<View style={styles.leftView}>
										<Text style={styles.stronglyDis}>Strongly Disagree</Text>
									</View>
									<RadioButton
										color="#6699cc"
										value="SDisagree"
										status={item.type === 'SDisagree' ? 'checked' : 'unchecked'}
										onPress={() => item.func('SDisagree')}
									/>
									<RadioButton
										color="#6699cc"
										value="Disagree"
										status={item.type === 'Disagree' ? 'checked' : 'unchecked'}
										onPress={() => item.func('Disagree')}
									/>
									<RadioButton
										color="#6699cc"
										value="NAND"
										status={item.type === 'NAND' ? 'checked' : 'unchecked'}
										onPress={() => item.func('NAND')}
									/>
									<RadioButton
										color="#6699cc"
										value="Agree"
										status={item.type === 'Agree' ? 'checked' : 'unchecked'}
										onPress={() => item.func('Agree')}
									/>
									<RadioButton
										color="#6699cc"
										value="SAgree"
										status={item.type === 'SAgree' ? 'checked' : 'unchecked'}
										onPress={() => item.func('SAgree')}
									/>
									<View style={styles.rightView}>
										<Text style={styles.stronglyAgg}>Strongly Agree</Text>
									</View>
								</View>
							</View>
						);
					})}
				</View>
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
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	leftView: {
		left: 10,
		width: '20%'
	},

	rightView: {
		right: 10,
		width: '20%'
	},
	stronglyDis: {
		color: '#6699cc',
		left: 10,
		paddingLeft: 8,
		fontFamily: 'Proxima Nova',
		fontSize: 14
	},
	stronglyAgg: {
		color: '#6699cc',
		paddingLeft: 15,
		right: 5,
		fontFamily: 'Proxima Nova',
		fontSize: 14
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		margin: 7
	},
	optionsText: {
		margin: '5px',
		fontSize: 15,
		fontFamily: 'Proxima Nova',
		flexDirection: 'row',
		paddingLeft: 20,
		paddingRight: 20,
		alignItems: 'center',
		width: '100%'
	},
	questionView: {
		position: 'absolute',
		top: 280,
		alignItems: 'center'
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
	},
	feedbackView: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '40%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	feedbackImage: {
		top: 0,
		width: 400,
		height: 300
	}
});
