import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { TicketsContext } from '../hooks/context';
import TicketCard from '../components/TicketCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Provider } from 'react-native-paper';
import PaymentOptionsPopUp from '../components/PaymentOptionsPopUp';
import EmptyCard from '../components/EmptyCard';

export default function TicketsScreen({navigation}: any) {

  const {myTickets, setMyTickets} = React.useContext(TicketsContext);
  const [visible, setVisible] = React.useState(false);
  const [selectedTicket, setSelectedTicket] = React.useState('')

  function purchaseTicket(ticketType: any) {
    setSelectedTicket(ticketType);
    setVisible(true);
  }
  return (
    <View style={styles.container}>
      <Provider>
        <View style={styles.sectionContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Purchase:</Text>
          </View>
          <View style={styles.purchaseTicketContainer}>
            <View>
                <Text style={{fontSize: 18}}>Single Trip Ticket</Text>
                <Text style={{fontSize: 18}}>Price: $2.99</Text>
            </View>
            <TouchableOpacity onPress={() => {purchaseTicket('single')}}>
              <Image style={{width: 77, height: 40}} source={require('../assets/images/ticket.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.purchaseTicketContainer}>
            <View>
                <Text style={{fontSize: 18}}>Single Day Ticket</Text>
                <Text style={{fontSize: 18}}>Price: $15.99</Text>
            </View>
            <TouchableOpacity onPress={() => {purchaseTicket('day')}}>
              <Image style={{width: 77, height: 40}} source={require('../assets/images/ticket.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
              {/* @ts-ignore */}
              <Text style={StyleSheet.compose(styles.title, {marginBottom: 0})}>Tickets</Text>
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </View>
          </View>
          <View style={styles.ticketListContainer}>
              {myTickets.length == 0 ? 
              <View style={{width: '80%', alignItems: 'center', justifyContent: 'center'}}>
                <EmptyCard message={"You have no tickets"}/>
              </View>
              :
              <View style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                {myTickets.map((ticket, i) => {
                    return (
                      <TouchableOpacity key={i} onPress={() => { navigation.push('TicketScreen', {ticket}); }}>
                        <TicketCard ticket={ticket}/>
                      </TouchableOpacity>
                    )
                  })
                } 
              </View>
              }
          </View>
        </View>
        <PaymentOptionsPopUp visible={visible} setVisible={setVisible} navigation={navigation} item={selectedTicket}/>
     </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  separator: {
    marginVertical: 10,
    height:1,
    width: '100%',
    marginBottom: 15
  },
  sectionContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: "80%"
  },
  purchaseTicketContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    margin: 8
  },
  ticketListContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
});
