import React from "react";
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import './App.css';
import MainPage from "./pages";
import Login from "./pages/Login";

function App() {

  return (
    <Router>
        <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/login" component={Login}/>
        </Switch>

    </Router>
  );
}

export default App;
