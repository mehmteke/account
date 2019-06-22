import React, { Component } from 'react'; 
import "semantic-ui-css/semantic.min.css/"  



class AccountInfoTest extends Component {
    state = {
        keyword: 'test' 
     } 
     
     
    constructor(props) {
        super(props);
        this.state = {
            name : 'Mehmet'
        }
      }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);
        console.log(nextState.name);
          if(nextState.name.lenght > 8)
               return true;
        return false;
    }
    
    
    inputChangedHandler = (event) => {
        const mustName = event.target.value;
        // Burda belki detaylı aramak için popup açarız
    }
      
      changeMustNo = (e) => {
            console.log(e.target.value);
            this.setState({
                name:e.target.value
            })
      };

    render() {
        return (
            <div  className="ui action input">
                <div className="ui input">
                    <input id="txtMustNo" placeholder = "Must No..." onChange = {this.changeMustNo} type="text" />  
                </div>
                <div className="ui disabled input"> 
                   <input id="txtNameSurname"  value={this.state.name}  placeholder="Name Surname..."  onChange={(event)=>this.inputChangedHandler(event)}/> 
                   <button className="ui button">Search</button>
                </div> 
             </div> 
        );
    }
} 

export default AccountInfoTest;