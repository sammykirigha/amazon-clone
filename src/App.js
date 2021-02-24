import react, { useEffect } from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './firebase';
import { useStateValue } from './stateProvider/StateProvider';
import Footer from './components/footer/Footer';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51Gvg1sLqttHkO7w4SwcwTH6xMQEFqySdz3FbJIZP2p2LFqctsi9rPQL3lwsPqfi8wwYXBl4iILwyYwNwZObiWDOv003ZlsTswC")

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>>', authUser)
      if (authUser) {
        //the user just logged in the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
            <Footer />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
