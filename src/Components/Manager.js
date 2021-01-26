import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import StoreTeams from './Store';
import maccabiIcon from '../images/maccabitlv.png';
import maccabihaifaIcon from '../images/Haifa.png';
import Teams from './Teams';
import Team from './Team';
import ball_mc_pt from '../images/shop/ball_mc_pt.jpg';
import tezif_mc_pt from '../images/shop/tezif_mc_pt.jpg'
import shirt_mc_pt from '../images/shop/shirt_mc_pt.jpg';
import hat_mc_pt from '../images/shop/hat_mc_pt.jpg';

import tezif_mc_tlv from '../images/shop/tezif_mc_tlv.jpg';
import ball_mc_tlv from '../images/shop/ball_mc_tlv.jpg';
import shirt_mc_tlv from '../images/shop/shirt_mc_tlv.jpg';
import hat_mc_tlv from '../images/shop/hat_mc_tlv.jpg';

import tezif_mc_haifa from '../images/shop/tezif_mc_haifa.jpg';
import ball_mc_haifa from '../images/shop/ball_mc_haifa.jpg';
import shirt_mc_haifa from '../images/shop/shirt_mc_haifa.jpg';
import hat_mc_haifa from '../images/shop/hat_mc_haifa.jpg';

import tezif_btr from '../images/shop/tezif_btr.jpeg';
import ball_btr from '../images/shop/ball_btr.jpeg';
import shirt_btr from '../images/shop/shirt_btr.jpeg';
import hat_btr from '../images/shop/hat_btr.jpeg';

import tezif_hp_sheva from '../images/shop/tezif_hp_sheva.jpg';
import ball_hp_sheva from '../images/shop/ball_hp_sheva.jpeg';
import shirt_hp_sheva from '../images/shop/shirt_hp_sheva.jpeg';
import hat_hp_sheva from '../images/shop/hat_hp_sheva.jpeg';

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
                    info: "מכבי תל אביב הוא מועדון כדורגל ישראלי מהעיר תל אביב, הנמנה עם מועדוני הכדורגל הוותיקים והמובילים בישראל ומשחק בליגת העל ובליגה האירופית. המועדון הוקם בשנת 1906, ומאז 2009 הוא בבעלות המיליארדר היהודי-קנדי מיטשל גולדהאר. המועדון חבר מן המניין בארגון המועדונים האירופיים ומנכלית הקבוצה שרון תמם מכהנת בדירקטוריון הארגון.",
                    imgClub: "https://upload.wikimedia.org/wikipedia/he/thumb/8/82/Maccabi_tlv_fc.png/250px-Maccabi_tlv_fc.png",
                    players: [{ id: 1, name: "שרן ייני", age: 34 }, { id: 2, name: "אייל גולסה", age: 30 }, { id: 3, name: "דור פרץ", age: 25 }, { id: 4, name: "יונתן כהן", age: 24 }, { id: 5, name: "איתי שכטר", age: 33 }]
                },
                {
                    id: 2,
                    club: "מכבי חיפה",
                    items: [],
                    info: "מכבי חיפה הוא מועדון כדורגל ישראלי מהעיר חיפה, המשחק בליגת העל הישראלית. המועדון הוקם בשנת 1913, ומאז 1992 הוא מנוהל על ידי איש העסקים יעקב שחר, שמכהן כנשיא המועדון. המועדון כולל גם קבוצות נוער, נערים וילדים, ובתי ספר לכדורגל. המועדון חבר שותף בארגון המועדונים האירופיים.",
                    imgClub: "https://newshaifakrayot.net/wp-content/uploads/2019/08/214px-Maccabi-h.png",
                    players: [{ id: 1, name: "טאלב טואטחה", age: 28 }, { id: 2, name: "רמי גרשון", age: 32 }, { id: 3, name: "ניקיטה רוקאביצה", age: 33 }, { id: 4, name: "דולב חזיזה", age: 24 }]
                },
                {
                    id: 3,
                    club: "מכבי פתח תקווה",
                    items: [],
                    info: " מכבי עירוני פתח תקווה (השם המלא: מועדון ספורט מכבי אבשלום עירוני פתח תקווה) היא קבוצת כדורגל ישראלית מהעיר פתח תקווה, המשחקת בליגת העל.",
                    imgClub: "https://m-pt.co.il/wp-content/uploads/2020/10/maccabi_petah-tikva.png",
                    players: [{ id: 1, name: "אריק יאנקו", age: 30 }, { id: 2, name: "תומר לוי", age: 27 }, { id: 3, name: "ינון אליהו", age: 27 }, { id: 4, name: "מוחמד סרסור", age: 21 }]
                },
                {
                    id: 4,
                    club: "ביתר ירושלים",
                    items: [],
                    info: "ביתר ירושלים היא קבוצת כדורגל מירושלים המשתייכת לאגודת הספורט ביתר, ומשחקת בליגת העל – ליגת הכדורגל הבכירה בישראל. הקבוצה הוקמה ב-1936, והחל משנות השבעים, נחשבת הקבוצה לאחת הקבוצות הבכירות והאהודות ביותר בכדורגל הישראלי. לזכות ביתר שש אליפויות ושבעה גביעי מדינה. כמו כן, זכתה הקבוצה שלוש פעמים בגביע הטוטו ופעמיים בתואר אלוף האלופים.",
                    imgClub: "https://sheva7.co.il/wp-content/uploads/2018/10/%D7%9C%D7%95%D7%92%D7%95-%D7%91%D7%99%D7%AA%D7%A8-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D.png",
                    players: [{ id: 1, name: "ירדן שועה", age: 22 }, { id: 2, name: "אלירן עטר", age: 33 }, { id: 3, name: "דוד דגו", age: 20 }, { id: 4, name: "טל בן חיים", age: 39 }, { id: 5, name: "אנטואן קונטה", age: 26 }]
                },
                {
                    id: 5,
                    club: "הפועל באר שבע",
                    items: [],
                    info: "הפועל באר שבע הוא מועדון כדורגל ישראלי מהעיר באר שבע, המשחק בליגת העל הישראלית. המועדון הוקם בשנת 1949, ומאז 2007 הוא מנוהל על ידי אשת העסקים אלונה ברקת, שמכהנת כבעלי המועדון. המועדון כולל גם קבוצות נוער, נערים וילדים, ובתי ספר לכדורגל. המועדון חבר מן המניין בארגון המועדונים האירופיים.",
                    imgClub: "https://upload.wikimedia.org/wikipedia/he/2/27/HBSBC.png",
                    players: [{ id: 1, name: "מיגל ויטור", age: 32 }, { id: 2, name: "מרוואן קבהא", age: 30 }, { id: 3, name: "לואי טאהא", age: 32 }, { id: 4, name: "שון גולדברג", age: 25 }]
                }
            ],
            items: [
                { id: 1, prod: "צעיף", cost: 30, src: tezif_mc_pt, team_name: "מכבי פתח תקווה" },
                { id: 2, prod: "כדור", cost: 80, src: ball_mc_pt, team_name: "מכבי פתח תקווה" },
                { id: 3, prod: "חולצה", cost: 50, src: shirt_mc_pt, team_name: "מכבי פתח תקווה" },
                { id: 4, prod: "כובע", cost: 25, src: hat_mc_pt, team_name: "מכבי פתח תקווה" },
                { id: 5, prod: "צעיף", cost: 25, src: tezif_mc_tlv, team_name: "מכבי תל אביב" },
                { id: 6, prod: "כדור", cost: 25, src: ball_mc_tlv, team_name: "מכבי תל אביב" },
                { id: 7, prod: "חולצה", cost: 25, src: shirt_mc_tlv, team_name: "מכבי תל אביב" },
                { id: 8, prod: "כובע", cost: 25, src: hat_mc_tlv, team_name: "מכבי תל אביב" },
                { id: 9, prod: "צעיף", cost: 25, src: tezif_mc_haifa, team_name: "מכבי חיפה" },
                { id: 10, prod: "כדור", cost: 25, src: ball_mc_haifa, team_name: "מכבי חיפה" },
                { id: 11, prod: "חולצה", cost: 25, src: shirt_mc_haifa, team_name: "מכבי חיפה" },
                { id: 12, prod: "כובע", cost: 25, src: hat_mc_haifa, team_name: "מכבי חיפה" },
                { id: 13, prod: "צעיף", cost: 25, src: tezif_btr, team_name: "ביתר ירושלים" },
                { id: 14, prod: "כדור", cost: 25, src: ball_btr, team_name: "ביתר ירושלים" },
                { id: 15, prod: "חולצה", cost: 25, src: shirt_btr, team_name: "ביתר ירושלים" },
                { id: 16, prod: "כובע", cost: 25, src: hat_btr, team_name: "ביתר ירושלים" },
                { id: 17, prod: "צעיף", cost: 25, src: tezif_hp_sheva, team_name: "הפועל באר שבע" },
                { id: 18, prod: "כדור", cost: 25, src: ball_hp_sheva, team_name: "הפועל באר שבע" },
                { id: 19, prod: "חולצה", cost: 25, src: shirt_hp_sheva, team_name: "הפועל באר שבע" },
                { id: 20, prod: "כובע", cost: 25, src: hat_hp_sheva, team_name: "הפועל באר שבע" }
            ]

        }
    }

    getTeamFromChild = (data) => {
        debugger;
        let newTeam = { id: ++this.counter, club: data.club, items: [], info: data.info, imgClub: data.imgClub, players: data.players }
        this.setState({
            teams: [...this.state.teams, newTeam]

        }, () => {
            localStorage.setItem('teams', JSON.stringify(this.state.teams))
        })
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/teams" render={() => <Teams teams={this.state.teams} sendToParent={this.getTeamFromChild} />}></Route>
                <Route path="/table_rank"></Route>
                <Route path="/store" render={() => <StoreTeams />}></Route>
                <Route path="/cart"></Route>
                <Route path="/gamble"></Route>
                <Route path="/team" render={() => <Team />}></Route>
            </Switch>
        );
    }
}

export default withRouter(Manager);