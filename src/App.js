import './App.css';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './Components/Login/LoginPage';
import LoginWithPhoneNumber from './Components/LoginWithPhoneNumber/LoginWithPhoneNumber';
import { useState } from 'react';
import { useEffect } from 'react';
import FadeLoader from "react-spinners/FadeLoader";

function App() {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  useEffect(() => {
    setLoadingSpinner(true);
    setTimeout(() => {
      setLoadingSpinner(false)
    }, 5000)
  }, [])
  return (
    <Router>
      {
        loadingSpinner ?
          <div className="centered">
            <FadeLoader
            color='#F5A623' 
            loading={loadingSpinner} 
            size={60} />
          </div>
          :

          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/loginWithPhone">
              <LoginWithPhoneNumber />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
      }
    </Router>
  );
}

export default App;
