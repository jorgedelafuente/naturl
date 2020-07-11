# NATURL

An online e-commerce boilerplate store based on the JAM stack. The SPA app provides all the functionality necessary for a merchant to display their merchandise to customers, build a customer database, and collect a payment within hours. 

Visit the live demo store at https://naturl.netlify.app/ 

## Tech Stack

### Front End

React
Stripe API
Firebase

## Installation

1. Clone the repository.
2. Run `npm install` in the client root folder.
3. Create an .env file in your client root folder.
4. Run `npm start` in your client root folder.

Create a .env file in the **client** folder with the following variables: 

    SKIP_PREFLIGHT_CHECK=true
    REACT_APP_FIREBASE_KEY=YOUR_FIREBASE_KEY
    REACT_APP_FIREBASE_DOMAIN=YOUR_FIREBASE_DOMAIN
    REACT_APP_FIREBASE_DATABASE=YOUR_FIREBASE_DATABASE
    REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    REACT_APP_FIREBASE_SENDER_ID=YOUR_FIREBASE_SENDER_ID
    REACT_APP_STRIPE_CHECKOUT_PK=YOUR_STRIPE_PK
    REACT_APP_STRIPE_CHECKOUT_SK=YOUR_STRIPE_SK
    REACT_APP_DOMAIN=YOUR_APP_DOMAIN
