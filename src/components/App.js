import React, { Component } from 'react';
//import logo from '../logo.svg';
import logo from '../images/intertech_web_logo.png';
import '../Styles/App.css';
import {Link,Route} from 'react-router-dom';
import AccountsPage from '../components/pages/AccountsPage'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>
        <p className="App-intro">
            <Link to="accounts">Accounts</Link>
          </p>
          <Route path='./accounts' component={AccountsPage}></Route>
      </div>
    );
  }
}

export default App;
