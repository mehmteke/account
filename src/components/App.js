import React, { Component } from 'react';
//import logo from '../logo.svg';
import logo from '../images/intertech_web_logo.png';
import '../Styles/App.css';
import 'semantic-ui-css/semantic.min.css'
import {Link,Route} from 'react-router-dom';
import AccountsPage from '../components/pages/AccountsPage';
import AccountInfoTest from '../components/AccountInfoTest';


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
            
			     {/* <div  className="ui action input">
                <div className="ui input">
                    <input id="txtMustNo" onChange = {this.changeMustNo} type="text" placeholder="Must No..."/>  
                </div>
                <div className="ui disabled input"> 
                   <input id="txtNameSurname" type="default" placeholder="Name Surname..."/>
                   <button className="ui button">Search</button>
                </div> 
             </div>   */}

             <AccountInfoTest></AccountInfoTest>
             
      </div>
    );
  }
}

export default App;
