import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home from './components/home/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';
import { loadUser } from "./store/actions/authActions";

import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import AuthRoute from './middleware/AuthRoute';

import TransactionsType from './components/home/transactions/TransactionsType';
import TransactionsPersonal from './components/home/transactions/TransactionsPersonal';
import TransactionsThird from './components/home/transactions/TransactionsThird';
import Authenticated from './middleware/Authenticated';
import TransactionsDone from './components/home/transactions/TransactionsDone';
import AccountsState from './components/home/accounts/AccountsState';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Container >
        <br></br>
        <Row >
          <Col md={{span: 6, offset: 3}}>
            <Switch>
              <Authenticated path="/signin" component={SignIn} />
              <Authenticated path="/signup" component={SignUp} />

              <AuthRoute exact path="/" component={Home}  />
              <AuthRoute exact path="/transactions" component={TransactionsType} />
              <AuthRoute path="/transactions/personal" component={TransactionsPersonal} />
              <AuthRoute path="/transactions/third" component={TransactionsThird} />
              <AuthRoute path="/transactions/done" component={TransactionsDone} />
              
              <AuthRoute path="/account-state" component={AccountsState} />


            </Switch>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
      </BrowserRouter>
    </>
  );

}

export default App;
