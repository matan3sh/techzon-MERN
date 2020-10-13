import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Footer } from 'components/layout';
import {
  Home,
  Signin,
  Signup,
  Browse,
  Cart,
  ProductDetail,
  Profile,
  Shipping,
  Payment,
  PlaceOrder,
} from 'components/pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/placeorder' component={PlaceOrder} />
        <Route exact path='/payment' component={Payment} />
        <Route exact path='/shipping' component={Shipping} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/browse' component={Browse} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/cart/:id?' component={Cart} />
        <Route exact path='/:id' component={ProductDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
