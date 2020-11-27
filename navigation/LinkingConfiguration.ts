import * as Linking from 'expo-linking';

export default {
	prefixes: [ Linking.makeUrl('/') ],
	config: {
		screens: {
			Initial: {
				screens: {
					InitialScreen: 'initial',
					LoginScreen: 'login',
					RegisterScreen: 'register'
				}
			},
			Root: {
				screens: {
					Feedback: {
						screens: {
							FeedbackScreen: 'feedback',
							TripFeedbackScreen: 'tripFeedback',
							HaveYourSayScreen: 'haveYourSay',
							TravelLightFeedbackScreen: 'travelLightFeedback'
						}
					},
					Cards: {
						screens: {
							CardsScreen: 'cards',
							OPALCardScreen: 'OPALCard',
							CreditCardScreen: 'creditCardScreen',
							ChildOPALCardScreen: 'childOPALCardScreen',
							CardPaymentListScreen: 'cardPaymentList',
							LinkOPALCardScreen: 'linkOPALCard',
							LinkChildOPALCardScreen: 'linkChildOPALCard',
							NewPaymentCardScreen: 'newPaymentCard'
						}
					},
					Tickets: {
						screens: {
							TicketsScreen: 'tickets',
							TicketScreen: 'ticketScreen',
							TicketCardPaymentListScreen: 'ticketCardPaymentList',
							TicketNewPaymentCardScreen: 'ticketNewPaymentCard'
						}
					},
					Account: {
						screens: {
							AccountScreen: 'account',
							UpdateAccountDetailsScreen: 'editDetails'
						}
					}
				}
			},
			NotFound: '*'
		}
	}
};
