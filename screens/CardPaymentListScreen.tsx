import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed'
import { CreditCardsContext } from '../hooks/context';
import CreditCard from '../components/CreditCard';
import ConfirmationPopUp from '../components/ConfirmationPopUp';
import { Provider } from 'react-native-paper';
import EmptyCard from '../components/EmptyCard';

export default function CardPaymentListScreen({navigation, route}: any) {
    const {OPALCard, amount, myCards, setMyCards} = route.params
    const {myCreditCards, setMyCreditCards} = React.useContext(CreditCardsContext);
    const [visible, setVisible] = React.useState(false);
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
                <Text style={styles.title}>Select Payment Method</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                {myCreditCards.length == 0 ?
                <View style={{width: '80%'}}>
                    <EmptyCard message={"You have no linked contactless cards"}/>
                </View>
                :
                myCreditCards.map((card, i) => {
                        return(
                            <TouchableOpacity key={i} onPress={() => showDialog()}>
                                <CreditCard card={card}/>
                            </TouchableOpacity>
                        );
                    })}
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
    sectionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});