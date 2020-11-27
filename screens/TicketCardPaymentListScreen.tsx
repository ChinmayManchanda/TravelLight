import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed'
import { CreditCardsContext, TicketsContext } from '../hooks/context';
import CreditCard from '../components/CreditCard';
import ConfirmationPopUp from '../components/ConfirmationPopUp';
import { Provider } from 'react-native-paper';
import EmptyCard from '../components/EmptyCard';

export default function TicketCardPaymentListScreen({navigation, route}: any) {
    const {selectedTicket} = route.params
    const {myCreditCards, setMyCreditCards} = React.useContext(CreditCardsContext);
    const {myTickets, setMyTickets} = React.useContext(TicketsContext);
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
	const goBackAction = () => {
        let d = new Date()
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let sminutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + sminutes + ' ' + ampm;

        date.setHours(date.getHours() + 1);
        hours = date.getHours();
        minutes = date.getMinutes();
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let endSminutes = minutes < 10 ? '0'+minutes : minutes;
        let endStrTime = hours + ':' + endSminutes + ' ' + ampm;

        if (selectedTicket == 'single') {
            const newTicket = {price: 2.99, type: 'Single', purchasedOn: `${da} ${mo} ${ye}`, validFrom: strTime, validUntil: endStrTime, tapped: false}
            setMyTickets([...myTickets].concat([newTicket]))
        } else if (selectedTicket == 'day') {
            const newTicket = {price: 15.99, type: 'Day', purchasedOn: `${da} ${mo} ${ye}`, validFrom: strTime, validUntil: '11:59 PM', tapped: false}
            setMyTickets([...myTickets].concat([newTicket]))
        }
        navigation.pop();
    }

    return ( 
        <Provider>
            <View style={styles.container}>
                <Text style={styles.title}>Select Payment Method</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                {myCreditCards.length == 0 ?
                <View style={{width: '100%'}}>
                    <EmptyCard message={"You have no linked contactless cards"}/>
                </View>
                :
                myCreditCards.map((card, i) => {
                        return(
                            <TouchableOpacity key={i} onPress={() => showDialog()}>
                                <CreditCard card={card}/>
                            </TouchableOpacity>
                        );
                    })
                }
                <ConfirmationPopUp message="Ticket Purchased" visible={visible} goBackAction={goBackAction}/>
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