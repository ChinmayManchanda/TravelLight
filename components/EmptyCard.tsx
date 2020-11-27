import * as React from 'react'

import {StyleSheet} from 'react-native'
import { View, Text } from './Themed'

export default function EmptyCard(props: any) {
    const {message} = props;
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.messageContainer}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "#aaa",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    messageContainer: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#aaa'
    }
})