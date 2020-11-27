import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { OPALCardsContext, TicketsContext } from '../hooks/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function TicketScreen({navigation, route}: any) {
  const {ticket} = route.params;
  const {myTickets, setMyTickets} = React.useContext(TicketsContext);
  const [tapping, setTapping] = React.useState(false);

  function removeCardHandler(navigation: any, card: any, myTickets: any, setMyTickets: any) {
    const newCards = myTickets.filter((t: any) => (t.type != ticket.type));
    setMyTickets(newCards);
    navigation.pop();
  }

  function tapCard(navigation: any, ticket: any, myTickets: any, setMyTickets: any, setTapping: any) {
    setTapping(true);
    setTimeout(() => {
      if (ticket.tapped) {
        removeCardHandler(navigation, ticket, myTickets, setMyTickets);
      } else {
        myTickets.forEach((c: any) => {
          if (c.ticketNumber === ticket.ticketNumber) {
            c.tapped = true;
          }
        });
        setMyTickets([...myTickets]);
      }
      setTapping(false);
    }, 3000)
  }

  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <View style={StyleSheet.compose(styles.sectionContainer, {marginTop: 0})}>
        <Image style={{width: 200, height: 100}} source={require('../assets/images/opal_ticket.png')}/>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.ticketDetailLeft}>Fare price:</Text>
          <Text style={styles.ticketDetailRight}>${ticket.price}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.ticketDetailLeft}>Fare type:</Text>
          <Text style={styles.ticketDetailRight}>{ticket.type}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.ticketDetailLeft}>Purchased on:</Text>
          <Text style={styles.ticketDetailRight}>{ticket.purchasedOn}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.ticketDetailLeft}>Valid from:</Text>
          <Text style={styles.ticketDetailRight}>{ticket.validFrom}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.ticketDetailLeft}>Valid until:</Text>
          <Text style={styles.ticketDetailRight}>{ticket.validUntil}</Text>
        </View>
        {ticket.type == 'Single' ? 
        (<>
          <View style={styles.textContainer}>
            <Text style={styles.ticketDetailLeft}>Tapped:</Text>
            <Text style={styles.ticketDetailRight}>{ticket.tapped ? "On" : "Off"}</Text>
          </View>
          <View style={styles.separator} lightColor="#6699cc" darkColor="rgba(255,255,255,0.1)" />
          <View style={{width: '80%'}}>
            <Text style={styles.disclaimer}>*This ticket will expire either when you tap off or one hour after purchase</Text>
          </View>
        </>)
        :
        <>
          <View style={styles.separator} lightColor="#6699cc" darkColor="rgba(255,255,255,0.1)" />
          <View style={{width: '80%'}}>
          <Text style={styles.disclaimer}>*This ticket is only eligible for trips on the day of purchase and will expire at the end of the day of purchase. Once expired the ticket will disappear from your 'Cards' menu.</Text>
          </View>
        </>
        }
      </View>
      {ticket.type == 'Single' &&
        <View style={styles.tapButtonContainer}>
          <View style={styles.tapButtonBox}>
            <Text style={styles.tapCardText}>Tap {ticket.tapped ? "Off" : "On"}</Text>
            <View style={styles.tapButtonWrapper}>
              <TouchableOpacity 
                disabled={tapping ? true : false}
                style={tapping ? styles.tapButtonActive : styles.tapButtonInactive} 
                onPress={() => tapCard(navigation, ticket, myTickets, setMyTickets, setTapping)}>
                <MaterialCommunityIcons size={45} name="contactless-payment" color={tapping ? "#2f95dc" : "#444"} />
              </TouchableOpacity>
              <Text>You are tapped {ticket.tapped ? "on" : "off"}</Text>
            </View>
          </View>
        </View>
      }  
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  disclaimer: {
      fontSize: 10
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    margin:6,
  },
  ticketDetailLeft: {
    fontSize: 16
  },
  ticketDetailRight: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  sectionContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  tapButtonActive: {
    borderWidth: 1,
    borderColor: "#2f95dc",
    borderRadius: 45,
    width: 170,
    height: 70,
    justifyContent:'center',
    alignItems: 'center'
  },
  tapButtonInactive: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 45,
    width: 170,
    height: 70,
    justifyContent:'center',
    alignItems: 'center'
  },
  tapCardText: {
    color: "#444",
    fontSize: 25,
    fontWeight: 'bold'
  },
  tapButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tapButtonContainer: {
    position: 'absolute',
    bottom: 0,
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  tapButtonBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '100%',
    paddingTop: 20,
    paddingBottom: 30
  }
});