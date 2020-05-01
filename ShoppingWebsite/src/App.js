import React from 'react';
import styles from './App.module.scss'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar components/NavBar";
import Footer from "./Components/Footer Components/Footer";
import HomePage from './Components/Home Page/HomePage'
import ProductsList from './Components/Products List page/ProductsList'
import Product from './Components/Product page/Product'
import Finance from './Components/Finance Page/Finance'
import Profile from './Components/Profile page/Profile'
import LogIn from './Components/Sign up and Login page/LogIn components/LogIn'
import SignUp from './Components/Sign up and Login page/SignUp components/SignUp'
import PrivateRoute from "./Components/PrivateRoute";


function App() {

  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={HomePage} />
      <Route path='/products-list' component={ProductsList} />
      <Route path='/product' component={Product} />
      <PrivateRoute
        path="/profile"
        component={() => (
          <Profile />
        )}
        render={() => (<Redirect to="/users/login" />)}
      />
      <PrivateRoute
        path="/finance"
        component={() => (
          <Finance />
        )}
        render={() => (<Redirect to="/users/login" />)}
      />
      <Route exact path='/users/login' component={LogIn} />
      <Route exact path='/users/signup' component={SignUp} />
      <Footer />
    </Router>
  );
}

export default App;
