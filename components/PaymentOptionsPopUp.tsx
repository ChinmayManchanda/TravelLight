import * as React from 'react';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import { Button, StyleSheet } from 'react-native';
import { View, Text } from './Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PaymentOptionsPopUp(props: any) {
    const {visible, setVisible, navigation, item, amount, myCards, setMyCards} = props;

    const closeModal = () => setVisible(false);
    let cardColor = '';
    let fontColor = 'black';
    if (item.balance) {
      switch(item.cardType) {
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
    } else {
      cardColor = '#6699cc';
    }


    function executePurchaseLinkedCard() {
      // is an opal card
      if (item.balance) {
        closeModal();
        navigation.push('CardPaymentList', {OPALCard: item, amount, myCards, setMyCards})
      } else {
        // is a ticket
        closeModal();
        navigation.push('TicketCardPaymentList', {selectedTicket: item})
      }
    }

    function executePurchaseNewCard() {
      // is an opal card
      if (item.balance) {
        closeModal();
        navigation.push('NewPaymentCard', {OPALCard: item, amount, myCards, setMyCards})
      } else {
        // is a ticket
        closeModal();
        navigation.push('TicketNewPaymentCard', {selectedTicket: item})
      }
    }

    return (
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Content>
            <Paragraph>Choose a method of payment:</Paragraph>
            <View style={styles.options}>
              {/* @ts-ignore */}
              <TouchableOpacity style={StyleSheet.compose(styles.option, {backgroundColor: cardColor})} onPress={() => executePurchaseLinkedCard()}>
                <Text style={{fontWeight: 'bold', color: fontColor, textAlign: 'center'}}>Use a linked card</Text>
              </TouchableOpacity>
              {/* @ts-ignore */}
              <TouchableOpacity style={StyleSheet.compose(styles.option, {borderWidth: 1, borderColor: cardColor})} onPress={() => executePurchaseNewCard()}>
                <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Use a new card</Text>
              </TouchableOpacity>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <TouchableOpacity style={styles.cancelButtonWrapper} onPress={() => setVisible(false)}>
              <Text style={{color: '#dd3636', fontWeight: 'bold'}}>Cancel</Text>
            </TouchableOpacity>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
}

const styles = StyleSheet.create({
  options: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    width: '90%',
    borderRadius: 15,
    padding: 10,
    margin: 5
  },
  cancelButtonWrapper: {
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#dd3636',
  }
})