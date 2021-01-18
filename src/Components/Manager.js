import React, { Component } from 'react';  
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/teams"></Route>
                <Route path="/table_rank"></Route>
                <Route path="/store"></Route>
                <Route path="/cart"></Route>
                <Route path="/gamble"></Route>
            </Switch>
         );
    }
}
 
export default withRouter(Manager);