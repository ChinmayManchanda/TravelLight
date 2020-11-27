import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, InitialParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import InitialScreen from '../screens/InitialScreen';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { UserContext, OPALCardsContext, CreditCardsContext, ChildOPALCardsContext, TicketsContext } from '../hooks/context';
import { MyOPALCards, MyCreditCards, MyChildOPALCards } from '../constants/Cards';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	const [ user, setUser ] = React.useState({ firstname: '', lastname: '', email: '', password: '' });
	const userValue = { user, setUser };

	const [ myOPALCards, setMyOPALCards ] = React.useState(MyOPALCards);
	const OPALCardValues = { myOPALCards, setMyOPALCards };

	const [ myCreditCards, setMyCreditCards ] = React.useState(MyCreditCards);
	const CreditCardValues = { myCreditCards, setMyCreditCards };

	const [ myChildOPALCards, setMyChildOPALCards ] = React.useState(MyChildOPALCards);
	const ChildOPALCardValues = { myChildOPALCards, setMyChildOPALCards };

	const [myTickets, setMyTickets] = React.useState([]);
	const TicketsValues = {myTickets, setMyTickets};

	return (
		<NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<UserContext.Provider value={userValue}>
				<OPALCardsContext.Provider value={OPALCardValues}>
					<CreditCardsContext.Provider value={CreditCardValues}>
						<ChildOPALCardsContext.Provider value={ChildOPALCardValues}>
							<TicketsContext.Provider value={TicketsValues}>
								<RootNavigator />
							</TicketsContext.Provider>
						</ChildOPALCardsContext.Provider>
					</CreditCardsContext.Provider>
				</OPALCardsContext.Provider>
			</UserContext.Provider>
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Initial" component={InitialNavigator} />
			<Stack.Screen name="Root" component={BottomTabNavigator} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} />
		</Stack.Navigator>
	);
}

const InitialStack = createStackNavigator<InitialParamList>();

function InitialNavigator() {
	return (
		<InitialStack.Navigator>
			<InitialStack.Screen name="Initial" component={InitialScreen} options={{ headerShown: false }} />
			<InitialStack.Screen name="Login" component={LoginScreen} />
			<InitialStack.Screen name="Register" component={RegisterScreen} />
		</InitialStack.Navigator>
	);
}
