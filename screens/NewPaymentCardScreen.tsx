import * as React from 'react';
import { StyleSheet, Button, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import ConfirmationPopUp from '../components/ConfirmationPopUp';
import { Provider } from 'react-native-paper';

export default function NewPaymentCardScreen({route, navigation}: any) {
    const {OPALCard, amount, myCards, setMyCards} = route.params;
    const [name, setName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [expiry, setSecurityNumber] = React.useState("");
    const [cvv, setCVV] = React.useState("");

  	const [ visible, setVisible ] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const goBackAction = () => {
      myCards.forEach((c: any) => {
        if (c.cardNumber == OPALCard.cardNumber) {
            c.balance += amount;
        }
      });
      setMyCards([...myCards]);
      navigation.pop();
    }

    return (
      <Provider>
        <View style={styles.container}>
            <Text style={styles.title}>Enter Credit/Debit Card Details</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <TextInput style={styles.textInput} placeholder={"Name on Card: Bob Taros"} onChangeText={(name) => setName(name)} />
            <TextInput style={styles.textInput} placeholder={"Card Number: 1234 5678 9123 4567"} onChangeText={(number) => setNumber(number)} />
            <TextInput style={styles.textInput} placeholder={"Card Expiry: 12/22"} onChangeText={(expiry) => setSecurityNumber(expiry)} />
            <TextInput style={styles.textInput} placeholder={"CVV Number: 123"} onChangeText={(cvv) => setCVV(cvv)} />
            <Button title="Pay" onPress={() => showDialog()} />
            <ConfirmationPopUp message="Funds Added" visible={visible} goBackAction={goBackAction}/>
        </View>
      </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInput: {
    margin: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 2,
  },
});