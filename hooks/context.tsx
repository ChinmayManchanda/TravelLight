import * as React from 'react';

export const UserContext = React.createContext({
	user: { firstname: '', lastname: '', email: '', password: '' },
	setUser: (user: any) => {}
});

export const OPALCardsContext = React.createContext({
	myOPALCards: [ { nickname: '', balance: 0, cardNumber: '', cardSecurityNumber: '', cardType: '', tapped: false } ],
	setMyOPALCards: (card: any) => {}
});

export const CreditCardsContext = React.createContext({
	myCreditCards: [ { accountHolder: '', cardType: '', securityNumber: '', cardNumber: '', expiryDate: '', tapped: false } ],
	setMyCreditCards: (cards: any) => {}
});

export const ChildOPALCardsContext = React.createContext({
	myChildOPALCards: [
		{ nickname: '', balance: 0, cardNumber: '', cardSecurityNumber: '', cardType: '', tapped: false }
	],
	setMyChildOPALCards: (card: any) => {}
});

export const TicketsContext = React.createContext({
	myTickets: [{price: 0, type: '', purchasedOn: '', validFrom: '', validUntil: '', tapped: false}],
	setMyTickets: (tickets: any) => {}
})
