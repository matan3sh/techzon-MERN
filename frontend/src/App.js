import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Footer } from 'components/layout';
import {
  Home,
  Signin,
  Signup,
  Browse,
  Checkout,
  ProductDetail,
} from 'components/pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/browse' component={Browse} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/:id' component={ProductDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
