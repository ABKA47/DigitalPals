import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Favorite from './containers/favorite/favorite'
import Products from './containers/product/products'
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Cart from './containers/cart/cart'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/cart" component={Cart} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
