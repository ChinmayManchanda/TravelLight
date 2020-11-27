import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from './Themed';
import { Ionicons } from '@expo/vector-icons';

export default function TicketCard(props: any) {
    const {ticket} = props;
    return (
        <View style={styles.container}>
            <Image style={{width: 130, height: 66}} source={require('../assets/images/opal_ticket.png')}/>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>{ticket.purchasedOn}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>{ticket.type == 'Single' ? "Single Trip" : "Single Day"}</Text>
            </View>
            <View style={{paddingRight: 20}}>
                <Ionicons name="ios-arrow-forward" size={24} color="black" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10
    }
})