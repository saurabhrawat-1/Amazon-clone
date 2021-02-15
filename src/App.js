import React, { useEffect, useContext } from "react";
import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { stateContext } from "./StateProvider";
import Registration from "./components/login/Registration";
import Payment from "./components/checkout/Payment";
import Greeting from "./components/checkout/Greeting";
import Footer from "./components/footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function App() {
  const globalContext = useContext(stateContext);
  const { dispatch } = globalContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is/was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/greeting">
          <Greeting />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/login/registration">
          <Registration />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
          <Footer />
        </Route>
        <Route path="/" exact>
          <Header />
          <Body />
          <Footer />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
