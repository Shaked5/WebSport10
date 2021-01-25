import React, { Component } from 'react';
import NavWeb from './Nav';
import '../index.css';
import { withRouter } from 'react-router-dom';


class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.location.state.newTeam);
        return ( 
            <div>
                <NavWeb/>
                <center>
                <h1>{this.props.location.state.newTeam.club}</h1>

                <div>
                <img src={this.props.location.state.newTeam.imgClub} alt="oops" width="400" height="250"/>
                </div>
                <p>{this.props.location.state.newTeam.info}</p>
                </center>
                <div style={{float: 'right'}}>
                <ul>
                {this.props.location.state.newTeam.players.map((player,index)=>
                <li>שם: {player.name} גיל: {player.age}</li>
                )}
                </ul>
                </div>
            </div>
         );
    }
}
 
export default withRouter(Team);