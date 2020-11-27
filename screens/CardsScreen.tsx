import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import OPALCard from '../components/OPALCard';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CreditCard from '../components/CreditCard';
import ChildOPALCard from '../components/ChildOPALCard';
import { OPALCardsContext, CreditCardsContext, ChildOPALCardsContext } from '../hooks/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EmptyCard from '../components/EmptyCard';

export default function CardsScreen({navigation}: any) {
  const {myOPALCards, setMyOPALCards} = React.useContext(OPALCardsContext);
  const {myCreditCards, setMyCreditCards} = React.useContext(CreditCardsContext);
  const {myChildOPALCards, setMyChildOPALCards} = React.useContext(ChildOPALCardsContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>OPAL Cards</Text>
            <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}} onPress={() => {navigation.push('LinkOPALCard')}} >
              <MaterialCommunityIcons size={27} name={'plus'} />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          {myOPALCards.length == 0 ?
            <View style={{width: '80%'}}>
                <EmptyCard message={"You have no linked OPAL cards"}/>
            </View>
            :
            myOPALCards.map((card, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => { navigation.push('OPALCard', {card}); } }>
                <OPALCard card={card} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.sectionContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Credit/Debit Cards</Text>
            <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}} onPress={() => {navigation.push('LinkCreditCard')}} >
              <MaterialCommunityIcons size={27} name={'plus'} />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          {myCreditCards.length == 0 ?
            <View style={{width: '80%'}}>
                <EmptyCard message={"You have no linked contactless cards"}/>
            </View>
            :
          myCreditCards.map((card, i) => {
            return (
            <TouchableOpacity key={i} onPress={() => {navigation.push('CreditCard', {card})}}>
              <CreditCard card={card}/>
            </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Child Cards</Text>
            <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}} onPress={() => {navigation.push('LinkChildOPALCard')}} >
              <MaterialCommunityIcons size={27} name={'plus'} />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          {myChildOPALCards.length == 0 ?
            <View style={{width: '80%'}}>
                <EmptyCard message={"You have no linked child OPAL cards"}/>
            </View>
            :
          myChildOPALCards.map((card, i) => {
            return (
            <TouchableOpacity key={i} onPress={() => {navigation.push('ChildOPALCard', {card})}}>
              <ChildOPALCard card={card}/>
            </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  sectionContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "80%"
  }
});
