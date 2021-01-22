import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import StoreTeams from './Store';
import maccabiIcon from '../images/maccabitlv.png';
import maccabihaifaIcon from '../images/Haifa.png';
import Teams from './Teams';
import Team from './Team';

class Manager extends Component {
    constructor(props) {
        super(props);
        this.counter = 5;
        this.state = {
            teams: [
                {
                    id: 1,
                    club: "מכבי תל אביב",
                    items: [],

                    imgClub: "https://upload.wikimedia.org/wikipedia/he/thumb/8/82/Maccabi_tlv_fc.png/250px-Maccabi_tlv_fc.png",
                    players: [{ id: 1, name: "jkjk", age: 0 }]
                },
                {
                    id: 2,
                    club: "מכבי חיפה",
                    items: [],
                    info:"מכבי חיפה הוא מועדון כדורגל ישראלי מהעיר חיפה, המשחק בליגת העל הישראלית. המועדון הוקם בשנת 1913, ומאז 1992 הוא מנוהל על ידי איש העסקים יעקב שחר, שמכהן כנשיא המועדון. המועדון כולל גם קבוצות נוער, נערים וילדים, ובתי ספר לכדורגל. המועדון חבר שותף בארגון המועדונים האירופיים.",
                    imgClub: "https://newshaifakrayot.net/wp-content/uploads/2019/08/214px-Maccabi-h.png",
                    players: [{ id: 1, name: "dsaafd", age: 28 }]
                },
                {
                    id: 3,
                    club: "מכבי פתח תקווה",
                    items: [],
                    imgClub: "https://m-pt.co.il/wp-content/uploads/2020/10/maccabi_petah-tikva.png",
                    players: [{ id: 1, name: "vcxvx", age: 22 }]
                },
                {
                    id: 4,
                    club: "ביתר ירושלים",
                    items: [],
                    imgClub: "https://sheva7.co.il/wp-content/uploads/2018/10/%D7%9C%D7%95%D7%92%D7%95-%D7%91%D7%99%D7%AA%D7%A8-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D.png",
                    players: [{ id: 1, name: "sdada", age: 19 }]
                },
                {
                    id: 5,
                    club: "הפועל באר שבע",
                    items: [],
                    imgClub: "https://upload.wikimedia.org/wikipedia/he/2/27/HBSBC.png",
                    players: [{ id: 1, name: "weqeq", age: 23 }]
                }
            ]
        }
    }

    getTeamFromChild = (data) => {
        debugger;
        let newTeam = { id: ++this.counter, club: data.club, items: [], imgClub: data.imgClub, players: data.players }
        this.setState({
            teams: [...this.state.teams, newTeam]

        }, () => {
            localStorage.setItem('teams',JSON.stringify(this.state.teams))
        })
    }

    render() {
        console.log(this.state.teams);
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/teams" render={() => <Teams teams={this.state.teams} sendToParent={this.getTeamFromChild} />}></Route>
                <Route path="/table_rank"></Route>
                <Route path="/store" render={()=> <StoreTeams/>}></Route>
                <Route path="/cart"></Route>
                <Route path="/gamble"></Route>
                <Route path="/team" render={()=> <Team/>}></Route>
            </Switch>
        );
    }
}

export default withRouter(Manager);