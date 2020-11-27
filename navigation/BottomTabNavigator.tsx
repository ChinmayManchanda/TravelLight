import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FeedbackScreen from '../screens/FeedbackScreen';
import CardsScreen from '../screens/CardsScreen';
import { BottomTabParamList, FeedbackParamList, CardsParamList, TicketsParamList, AccountParamList } from '../types';
import AccountScreen from '../screens/AccountScreen';
import TicketsScreen from '../screens/TicketsScreen';
import MaterialIcon from '../utils/MaterialIcon';
import OPALCardScreen from '../screens/OPALCardScreen';
import CreditCardScreen from '../screens/CreditCardScreen';
import ChildOPALCardScreen from '../screens/ChildOPALCardScreen';
import CardPaymentListScreen from '../screens/CardPaymentListScreen';
import LinkOPALCardScreen from '../screens/LinkOPALCardScreen';
import LinkCreditCardScreen from '../screens/LinkCreditCardScreen';
import LinkChildOPALCardScreen from '../screens/LinkChildOPALCardScreen';
import TripFeedbackScreen from '../screens/TripFeedbackScreen';
import TravelLightFeedbackScreen from '../screens/TravelLightFeedbackScreen';
import HaveYourSayScreen from '../screens/HaveYourSayScreen';
import NewPaymentCardScreen from '../screens/NewPaymentCardScreen';
import UpdateAccountDetailsScreen from '../screens/UpdateAccountDetailsScreen';
import TicketScreen from '../screens/TicketScreen';
import TicketCardPaymentListScreen from '../screens/TicketCardPaymentListScreen';
import TicketNewPaymentCardScreen from '../screens/TicketNewPaymentCardScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator initialRouteName="Cards" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

			<BottomTab.Screen
				name="Cards"
				component={CardsNavigator}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcon name="cards-outline" color={color} />,
					tabBarLabel: ""
				}}
			/>
			<BottomTab.Screen
				name="Tickets"
				component={TicketsNavigator}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcon name="ticket-outline" color={color} />,
					tabBarLabel: ""
				}}
			/>
			<BottomTab.Screen
				name="Feedback"
				component={FeedbackNavigator}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcon name="comment-processing-outline" color={color} />,
					tabBarLabel: ""
				}}
			/>
			<BottomTab.Screen
				name="Account"
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcon name="account-outline" color={color} />,
					tabBarLabel: ""
				}}
			/>
		</BottomTab.Navigator>
	);
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FeedbackStack = createStackNavigator<FeedbackParamList>();

function FeedbackNavigator() {
	return (
		<FeedbackStack.Navigator>
			<FeedbackStack.Screen
				name="FeedbackScreen"
				component={FeedbackScreen}
				options={{ headerTitle: 'Feedback' }}
			/>
			<FeedbackStack.Screen name="TripFeedback" component={TripFeedbackScreen} />
			<FeedbackStack.Screen name="TravelLightFeedback" component={TravelLightFeedbackScreen} />
			<FeedbackStack.Screen name="HaveYourSay" component={HaveYourSayScreen} />
		</FeedbackStack.Navigator>
	);
}

const CardsStack = createStackNavigator<CardsParamList>();

function CardsNavigator() {
	return (
		<CardsStack.Navigator>
			<CardsStack.Screen name="CardsScreen" component={CardsScreen} options={{ headerTitle: 'Cards' }} />
			<CardsStack.Screen name="OPALCard" component={OPALCardScreen} options={{ headerTitle: 'OPAL Card Details' }}/>
			<CardsStack.Screen name="CreditCard" component={CreditCardScreen} options={{ headerTitle: 'Credit Card Details' }}/>
			<CardsStack.Screen name="ChildOPALCard" component={ChildOPALCardScreen} options={{ headerTitle: 'Child OPAL Card Details' }}/>
			<CardsStack.Screen name="CardPaymentList" component={CardPaymentListScreen} options={{ headerTitle: 'Payment Options' }}/>
			<CardsStack.Screen name="LinkOPALCard" component={LinkOPALCardScreen} options={{ headerTitle: 'Add OPAL Card' }}/>
			<CardsStack.Screen name="LinkCreditCard" component={LinkCreditCardScreen} options={{ headerTitle: 'Add Contactless Card' }}/>
			<CardsStack.Screen name="LinkChildOPALCard" component={LinkChildOPALCardScreen} options={{ headerTitle: 'Add Child OPAL Card' }}/>
			<CardsStack.Screen name="NewPaymentCard" component={NewPaymentCardScreen} options={{ headerTitle: 'Payment Card Details' }}/>
		</CardsStack.Navigator>
	);
}

const TicketsStack = createStackNavigator<TicketsParamList>();

function TicketsNavigator() {
	return (
		<TicketsStack.Navigator>
			<TicketsStack.Screen name="TicketsScreen" component={TicketsScreen} options={{ headerTitle: 'Tickets' }} />
			<TicketsStack.Screen name="TicketScreen" component={TicketScreen}/>
			<TicketsStack.Screen name="TicketCardPaymentList" component={TicketCardPaymentListScreen} />
			<TicketsStack.Screen name="TicketNewPaymentCard" component={TicketNewPaymentCardScreen} />
		</TicketsStack.Navigator>
	);
}

const AccountStack = createStackNavigator<AccountParamList>();

function AccountNavigator() {
	return (
		<AccountStack.Navigator>
			<AccountStack.Screen name="AccountScreen" component={AccountScreen} options={{ headerTitle: 'Account' }} />
			<AccountStack.Screen name="UpdateAccountDetails" component={UpdateAccountDetailsScreen} />
		</AccountStack.Navigator>
	);
}
