import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';


// const HatsPage = () => (
// 	<div>
// 		<h1>HATS PAGE</h1>
// 	</div>
// );

function App() {
  return (
    <div>
    	<Header />
	    <Switch>
	    <Route exact={true} path='/' component={HomePage} />
	    <Route exact={true} path='/shop' component={ShopPage} />
	    <Route exact={true} path='/signin' component={SignInSignUpPage} />
	    </Switch>
    </div>
  );
}

export default App;
