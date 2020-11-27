import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import {StyleSheet} from 'react-native'

export default function TopUpValueMenu(props: any) {

    const {selected, setSelected, card} = props;

    let cardColor = '';
    let fontColor = 'black';
    switch(card.cardType) {
        case "Child/Youth":
            cardColor = "#84af72";
            break;
        case "Concession":
            cardColor = "#c7c5c5";
            break;
        case "Adult":
            cardColor = "#3a3837";
            fontColor = 'white'
            break;
        case "Senior/Pensioner":
            cardColor = "#f5c869";
            break;
    }
    const cardOptions = StyleSheet.create({
        selected: {
            borderColor: cardColor,
            backgroundColor: cardColor,
        },
        unselected: {
            borderColor: cardColor,
        }
    })
    return(
    <View style={{width: '90%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Top Up OPAL Card:</Text>
        <View style={styles.topUpValues}>
            {/* @ts-ignore */}
            <TouchableOpacity style={StyleSheet.compose(styles.amountCircle, (selected == 5 ? cardOptions.selected : cardOptions.unselected))} onPress={() => setSelected(5)}><Text style={selected === 5 ? {fontWeight: 'bold', color: fontColor} : {}}>$5</Text></TouchableOpacity>
            {/* @ts-ignore */}
            <TouchableOpacity style={StyleSheet.compose(styles.amountCircle, (selected == 10 ? cardOptions.selected : cardOptions.unselected))} onPress={() => setSelected(10)}><Text style={selected === 10 ? {fontWeight: 'bold', color: fontColor} : {}}>$10</Text></TouchableOpacity>
            {/* @ts-ignore */}
            <TouchableOpacity style={StyleSheet.compose(styles.amountCircle, (selected == 20 ? cardOptions.selected : cardOptions.unselected))} onPress={() => setSelected(20)}><Text style={selected === 20 ? {fontWeight: 'bold', color: fontColor} : {}}>$20</Text></TouchableOpacity>
            {/* @ts-ignore */}
            <TouchableOpacity style={StyleSheet.compose(styles.amountCircle, (selected == 30 ? cardOptions.selected : cardOptions.unselected))} onPress={() => setSelected(30)}><Text style={selected === 30 ? {fontWeight: 'bold', color: fontColor} : {}}>$30</Text></TouchableOpacity>
            {/* @ts-ignore */}
            <TouchableOpacity style={StyleSheet.compose(styles.amountCircle, (selected == 40 ? cardOptions.selected : cardOptions.unselected))} onPress={() => setSelected(40)}><Text style={selected === 40 ? {fontWeight: 'bold', color: fontColor} : {}}>$40</Text></TouchableOpacity>
        </View>
        <View style={styles.balanceAfter}>
            <Text>Balance after top up: </Text>
            <Text style={{fontSize: 17, paddingRight: 20}}>${(card.balance + selected).toFixed(2)}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    topUpValues: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    amountCircle: {
        width: 50,
        height: 50,
        padding: 10,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
    },
    balanceAfter: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});