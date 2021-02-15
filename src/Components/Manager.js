import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import StoreTeams from './Store';
import Teams from './Teams';
import Team from './Team';
import TableTeams from './TableTeams';
import Article from './Article';

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

import rokoviza from '../images/articles/rokoviza.png';
import maman from '../images/articles/maman.png';
import teams from '../images/articles/teams.png';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.counter = 5;

    const data1 = <p>עונת 2020 הנדירה של ניקיטה רוקאביצה לא נעלמת מעיני העולם. ולאחר שקבע את הרצף הארוך בעונה החולפת, וגם סיים במקום השישי באירופה עם 25 שערים חלוץ מכבי חיפה קיבל מקום של כבוד בין השחקנים הטובים ביותר באסיה. בפרס זה, ההתאחדות אסיאתית העניקה לאוהדים את הכוח כאשר הם יכולים לבחור בין 15 המועמדים.<br />
        לצד רוקאביצה האוסטרלי הגיעו נציגים מכל רחבי היבשת.<br /> כמובן, שגולת הכותרת של אותה רשימה הוא כוכבה של טוטנהאם, יונג מי סון, שזכה בתואר השחקן הטוב באסיה שלוש פעמים בעבר. שחקן ההתקפה גם נבחר לשחקן הטוב ביותר של הספרס בעונה החולפת כשאחד מ-22 שעריו קיבל את הכבוד הגדול - השער היפה של השנה, אותו כבש מול ברנלי.<br />
        לצידם, ניתן לראות גם את חלוצה הנפלא של זניט סנט פטרסבורג, סרדאר אזמון.<br /> האיראני הרשית 21 שערים בכל המסגרות, וכתוצאה מכך זכה למלכות השערים ברוסיה יחד עם חברו לקבוצה, ארטיום דזיובה.<br />
        שם בולט נוסף הוא קאנג אין לי מוולנסיה. הדרום קוריאני בן ה-19 נבחר בעונה שעברה לשחקן הצעיר הטוב ביותר ביבשת, וגם העונה ניתן לראות את ההתקדמות שלו. בחודש ספטמבר הוא ניפק שני בישולים מול לבנטה ובעקבות זאת הפך לשחקן ביותר ב'לה ליגה' שעושה זאת במאה ה-21.<br />
        השחקנים שהשלימו את הרשימה הם: מהדי טרמי (פורטו), עלי עדנאן (ונקובר), עלי גוליזאדה, קוה רזאי וריוטה מוריוקה (שרלרואה), טאקהירו טומיאסו (בולוניה), טאקפוסה קובו (ריאל מדריד/ויאריאל), ווטארו אנדו (שטוטגרט), הואנג הי-צ'ן (זלצבורג/לייפציג), טאקומי מינאמינו (זלצבורג/ליברפול), דאיצ'י קמאדה (פרנקפורט).<br />
    </p>
    const data2 = <p>עוד מעט, הכל יתערבב מחדש: חלון ההעברות של ינואר נפתח, ואיתו - תמיד - ההזדמנות לחפש מציאות. למצוא את התוספת הראויה, את מקצה השיפורים מהטעויות של הקיץ, את האפשרות לעשות טוב יותר ממה שנעשה. וכל השנים נעשה ניסיון להשיג את "התוסף לדלק", כמו שקרא לזה פעם ראובן עטר, האקסטרה שיוכל לשדרג קבוצה טובה לקבוצה אלופה. אז לכבוד פתיחת החלון, ואולי גם בהשפעת המעבר המתוקשר של עומר אצילי למכבי חיפה, הנה לכם - חמישה סיפורים על חמש העברות גדולות שנעשו בחלון הנוכחי, ואוהדי הקבוצות לא ישכחו לעולם.<br />

        במקום החמישי: אלן מסודי למכבי תל אביב, ינואר 2008
        קצת קשה לזכור היום, אבל בהגיעה לחורף של עונת 07/08, מכבי תל אביב היתה אבודה ממש. פתיחת העונה ההזויה, המריבות בין לוני הרציקוביץ' ורוני מאנה (כולל פיליפ סולומון שקפץ באמצע) ואבי נמני שעמד בין המגרש ליציע, הותירו את המכבים מדשדשים, כשהמועדון מידרדר לתחתית.<br /> כמה קיצוני היה המצב? מכבי פתחה את העונה עם לא פחות משבעה משחקים ללא ניצחון, ובשלבים מסוימים אפילו נחשבה מועמדת לירידה.<br />

        אבל אז הגיע ינואר - אלכס שניידר נכנס לעמדת הבעלים במקומו של הרציקוביץ', מכבי קיבלה קצת מעות לחיזוק, והלכה על הקונגולזי (שכבר צבר לעצמו שם בשלל קבוצות אחרות, ופתח את העונה במ.ס. אשדוד).<br /> זה נגמר עם שישה שערים ב-15 הופעות, בישול מרהיב בדרבי - ומכבי, שכל העונה פלרטטה עם הקו האדום, סיימה במקום השישי.<br />

        במקום הרביעי: דימיטר טלקיסקי ואלין טופוזאקוב להפועל תל אביב, ינואר 2008
        אותו חודש, אותה עיר - צבע אחר. לצד מכבי, גם הפועל תל אביב חוותה פתיחת עונה קשה. גיא לוזון, שהגיע בתור מאמן צעיר ורענן, כשל בצורה די קשה. הפתח תקוואי סיים את דרכו די מהר, ואת מקומו תפס אלי גוטמן - מאמן עם רקורד עשיר (אליפות בהפועל חיפה, גביע עם הפועל באר שבע) ששב לארץ אחרי גלות קצרה בקפריסין.<br /> גוטמן שינה את הפועל לחלוטין, גם דרך החיזוק - ובעיקר צמד השחקנים הבולגרים.<br />

        הבלם הוסיף יציבות להגנה, וטלקיסקי? הוא זכור אצל אוהדי הפועל כאחד הזרים היותר אהובים ששיחקו במדיה, כולל שיר שחקן על הלחן של "יד ביד" של עפרה חזה ("דימיטר לאורך כל הדרך") - בעיקר הודות לשני רגעי קסם: גול מטורף בדרבי התל אביבי מול שער 11 (טיל מהאוויר לחיבורים בניצחון 1:3), ומבצע אישי עוד יותר בלתי נשכח, פלוס צ'יפ, על הראש של בית"ר ירושלים - שחלמה על חגיגות אליפות. הפועל נשארה בליגה והגיעה עד גמר הגביע (שם בית"ר "נקמה" עם ניצחון בפנדלים), טלקיסקי וטופוזאקוב אמנם נפרדו די מהר - אבל הפועל המריאה לקבוצת הדאבל ההיסטורית של גוטמן, שכטר, ורמוט - ושחקן אחר, שעוד יופיע ברשימה שלנו.<br />
        במקום השלישי: חנן ממן להפועל באר שבע, ינואר 2018<br />
        במקום השני: דויד סולארי לעירוני קרית שמונה, ינואר 2012<br />
        ובמקום הראשון: ערן זהבי וראדה פריצה למכבי תל אביב, ינואר 2013<br />
    </p>;
    const data3 = <p>במסגרת עדכוני החוקה שנכנסו לתוקף מהעונה הקודמת, השתנה מנגנון הטיפול בעבירות של מאמנים ואנשי צוות בליגת העל.<br /> לפני השינוי, אנשי הספסל היו יכולים לקבל אות אזהרה בעל פה או הרחקה שלאחריה הם נאלצו להגיע לוועדת משמעת בבית הדין של ההתאחדות לכדורגל.<br /> כיום השופטים רשאים לשלוף כרטיס צהוב או אדום לעבר אנשי הספסל של הקבוצה, וכמו שראינו, הם משתמשים בנשק הזה לעיתים תכופות.<br />

        לא רבים יודעים, אבל בהתאחדות מתבצעת ספירה מוסדרת של צבירת הכרטיסים הצהובים, ובדיוק כמו אצל השחקנים מי שיצבור חמישה כרטיסים צהובים, יורחקו למשחק אחד ויאלץ לראות את המשחק ביציע, לאחר מכן הספירה תמשך והפעם הצהוב התשיעי יגרום להרחקתו של בעל התפקיד ממשחק אחד.<br />

        מבדיקת ערוץ הספורט, לאחר 15 מחזורים (להוציא את הפועל ק"ש ובני סכנין ששיחקו 14 משחקים בלבד), עולה כי במהלך המחזורים האלה נשלפו 3 אדומים (למאמנים גיא לוזון וקובי רפואה ולמנהל הפועל ת"א דוד מגן) ולא פחות מ-43 כרטיסים צהובים. מדובר על ממוצע של כ-3 כרטיסים צהובים למחזור.<br /> הבדיקה לא כללה כרטיסים שנשלפו במהלך משחקי גביע הטוטו, שכן עבור אלה מתבצעת ספירה נפרדת בשל עדכון בחוקה, גם לספסלים נספרים צהובים. <br />
        הנתונים פה
        באופן לא מפתיע בראש רשימת ספסלי הקבוצות המוצהבות נמצאות שתי התל אביביות, שלא חוו הצלחה מקצועית עד כה העונה ונראה שחוסר ההצלחה הזה גרם לאי שקט אצל אנשי הספסל.<br /> מכבי תל אביב מובילה את טבלת הצהובים עם 6 כרטיסים, 4 מתוכם שייכים לצוות היווני שסיים את תפקידו  (2 למאמן דוניס ו-2 לאנשי הצוות שלו).<br /> את 2 הכרטיסים הנוספים ספג מנהל הקבוצה יואב זיו.<br />

        היריבה העירונית הפועל ת"א מיד אחריה עם 5 כרטיסים צהובים. בלט מעל כולם מנהל הקבוצה דוד מגן, שהוא, כאמור, איש הצוות היחיד שהורחק ואינו מאמן. מגן ראה אדום לאחר שצעק לאלי חכמון, שהיה השופט הרביעי בדרבי מול מכבי ת"א: "מה תעשה לי? תרחיק אותי בכרטיס אדום?".<br /> הספסלים ההוגנים עד כה במהלך הליגה הם ספסלי הפועל ב"ש והפועל חיפה, שהסתפקו בצהוב אחד בלבד שנשלף למאמני הקבוצה.<br />
    </p>;

    this.state = {
      teams: [
        {
          id: 1,
          club: "מכבי תל-אביב",
          info: "מכבי תל אביב הוא מועדון כדורגל ישראלי מהעיר תל אביב, הנמנה עם מועדוני הכדורגל הוותיקים והמובילים בישראל ומשחק בליגת העל ובליגה האירופית. המועדון הוקם בשנת 1906, ומאז 2009 הוא בבעלות המיליארדר היהודי-קנדי מיטשל גולדהאר. המועדון חבר מן המניין בארגון המועדונים האירופיים ומנכלית הקבוצה שרון תמם מכהנת בדירקטוריון הארגון.",
          imgClub: "https://upload.wikimedia.org/wikipedia/he/thumb/8/82/Maccabi_tlv_fc.png/250px-Maccabi_tlv_fc.png",
          players: [{ id: 1, name: "שרן ייני", age: 34 }, { id: 2, name: "אייל גולסה", age: 30 }, { id: 3, name: "דור פרץ", age: 25 }, { id: 4, name: "יונתן כהן", age: 24 }, { id: 5, name: "איתי שכטר", age: 33 }],
          win: 2, draw: 2, loss: 1, points: 8
        },
        {
          id: 2,
          club: "מכבי חיפה",
          info: "מכבי חיפה הוא מועדון כדורגל ישראלי מהעיר חיפה, המשחק בליגת העל הישראלית. המועדון הוקם בשנת 1913, ומאז 1992 הוא מנוהל על ידי איש העסקים יעקב שחר, שמכהן כנשיא המועדון. המועדון כולל גם קבוצות נוער, נערים וילדים, ובתי ספר לכדורגל. המועדון חבר שותף בארגון המועדונים האירופיים.",
          imgClub: "https://newshaifakrayot.net/wp-content/uploads/2019/08/214px-Maccabi-h.png",
          players: [{ id: 1, name: "טאלב טואטחה", age: 28 }, { id: 2, name: "רמי גרשון", age: 32 }, { id: 3, name: "ניקיטה רוקאביצה", age: 33 }, { id: 4, name: "דולב חזיזה", age: 24 }],
          win: 1, draw: 3, loss: 1, points: 6
        },
        {
          id: 3,
          club: "מכבי פתח-תקווה",
          info: " מכבי עירוני פתח תקווה (השם המלא: מועדון ספורט מכבי אבשלום עירוני פתח תקווה) היא קבוצת כדורגל ישראלית מהעיר פתח תקווה, המשחקת בליגת העל.",
          imgClub: "https://m-pt.co.il/wp-content/uploads/2020/10/maccabi_petah-tikva.png",
          players: [{ id: 1, name: "אריק יאנקו", age: 30 }, { id: 2, name: "תומר לוי", age: 27 }, { id: 3, name: "ינון אליהו", age: 27 }, { id: 4, name: "מוחמד סרסור", age: 21 }],
          win: 2, draw: 1, loss: 2, points: 7
        },
        {
          id: 4,
          club: "ביתר ירושלים",
          info: "ביתר ירושלים היא קבוצת כדורגל מירושלים המשתייכת לאגודת הספורט ביתר, ומשחקת בליגת העל – ליגת הכדורגל הבכירה בישראל. הקבוצה הוקמה ב-1936, והחל משנות השבעים, נחשבת הקבוצה לאחת הקבוצות הבכירות והאהודות ביותר בכדורגל הישראלי. לזכות ביתר שש אליפויות ושבעה גביעי מדינה. כמו כן, זכתה הקבוצה שלוש פעמים בגביע הטוטו ופעמיים בתואר אלוף האלופים.",
          imgClub: "https://sheva7.co.il/wp-content/uploads/2018/10/%D7%9C%D7%95%D7%92%D7%95-%D7%91%D7%99%D7%AA%D7%A8-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D.png",
          players: [{ id: 1, name: "ירדן שועה", age: 22 }, { id: 2, name: "אלירן עטר", age: 33 }, { id: 3, name: "דוד דגו", age: 20 }, { id: 4, name: "טל בן חיים", age: 39 }, { id: 5, name: "אנטואן קונטה", age: 26 }],
          win: 3, draw: 1, loss: 1, points: 10
        },
        {
          id: 5,
          club: "הפועל באר-שבע",
          info: "הפועל באר שבע הוא מועדון כדורגל ישראלי מהעיר באר שבע, המשחק בליגת העל הישראלית. המועדון הוקם בשנת 1949, ומאז 2007 הוא מנוהל על ידי אשת העסקים אלונה ברקת, שמכהנת כבעלי המועדון. המועדון כולל גם קבוצות נוער, נערים וילדים, ובתי ספר לכדורגל. המועדון חבר מן המניין בארגון המועדונים האירופיים.",
          imgClub: "https://upload.wikimedia.org/wikipedia/he/2/27/HBSBC.png",
          players: [{ id: 1, name: "מיגל ויטור", age: 32 }, { id: 2, name: "מרוואן קבהא", age: 30 }, { id: 3, name: "לואי טאהא", age: 32 }, { id: 4, name: "שון גולדברג", age: 25 }],
          win: 2, draw: 3, loss: 0, points: 9
        }
      ],
      items: [
        { id: 1, prod: "צעיף", cost: 30, src: tezif_mc_pt, team_name: 'מכבי פתח תקווה', quantity: 0 },
        { id: 2, prod: "כדור", cost: 80, src: ball_mc_pt, team_name: "מכבי פתח תקווה", quantity: 0 },
        { id: 3, prod: "חולצה", cost: 50, src: shirt_mc_pt, team_name: "מכבי פתח תקווה", quantity: 0 },
        { id: 4, prod: "כובע", cost: 25, src: hat_mc_pt, team_name: "מכבי פתח תקווה", quantity: 0 },
        { id: 5, prod: "צעיף", cost: 30, src: tezif_mc_tlv, team_name: "מכבי תל אביב", quantity: 0 },
        { id: 6, prod: "כדור", cost: 80, src: ball_mc_tlv, team_name: "מכבי תל אביב", quantity: 0 },
        { id: 7, prod: "חולצה", cost: 50, src: shirt_mc_tlv, team_name: "מכבי תל אביב", quantity: 0 },
        { id: 8, prod: "כובע", cost: 25, src: hat_mc_tlv, team_name: "מכבי תל אביב", quantity: 0 },
        { id: 9, prod: "צעיף", cost: 30, src: tezif_mc_haifa, team_name: "מכבי חיפה", quantity: 0 },
        { id: 10, prod: "כדור", cost: 80, src: ball_mc_haifa, team_name: "מכבי חיפה", quantity: 0 },
        { id: 11, prod: "חולצה", cost: 50, src: shirt_mc_haifa, team_name: "מכבי חיפה", quantity: 0 },
        { id: 12, prod: "כובע", cost: 25, src: hat_mc_haifa, team_name: "מכבי חיפה", quantity: 0 },
        { id: 13, prod: "צעיף", cost: 30, src: tezif_btr, team_name: "ביתר ירושלים", quantity: 0 },
        { id: 14, prod: "כדור", cost: 80, src: ball_btr, team_name: "ביתר ירושלים", quantity: 0 },
        { id: 15, prod: "חולצה", cost: 50, src: shirt_btr, team_name: "ביתר ירושלים", quantity: 0 },
        { id: 16, prod: "כובע", cost: 25, src: hat_btr, team_name: "ביתר ירושלים", quantity: 0 },
        { id: 17, prod: "צעיף", cost: 30, src: tezif_hp_sheva, team_name: "הפועל באר שבע", quantity: 0 },
        { id: 18, prod: "כדור", cost: 80, src: ball_hp_sheva, team_name: "הפועל באר שבע", quantity: 0 },
        { id: 19, prod: "חולצה", cost: 50, src: shirt_hp_sheva, team_name: "הפועל באר שבע", quantity: 0 },
        { id: 20, prod: "כובע", cost: 25, src: hat_hp_sheva, team_name: "הפועל באר שבע", quantity: 0 }
      ],
      cartItems: [],
      total_price: 0,
      pointA: 0,
      pointB: 0,
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams')),
      article_num: 0,
      articles: [
        { id: 0, title: "לצד סון: רוקאביצה בין נבחרי העונה באסיה", sub_title: "חלוץ מכבי חיפה בין 15 המועמדים. לינק להצבעה בפנים", image: rokoviza, context: data1 },
        { id: 1, title: "חזק חזק ונתחזק: מצעד ההעברות הגדולות של ינואר", sub_title: "לרגל פתיחת חלון ההעברות, טופ 5 מדרג את החתמות החורף", image: maman, context: data2 },
        { id: 2, title: "בשליפה: המאמנים שנמצאים בסכנת הרחקה", sub_title: "בשל עדכון בחוקה, גם לספסלים נספרים צהובים. הנתונים פה:", image: teams, context: data3 }
      ],
      resultsGames: []
    }
  }
  //comp - Article
  setArticleNum = (num) => {
    this.state.article_num = num;
  }

  //add team to array - from Teams
  getTeamFromChild = (data) => {
    let newArr;
    if (this.state.teamsFromLocalstorage === null) {
      newArr = [...this.state.teams]
    } else {
      newArr = [...this.state.teamsFromLocalstorage]
    }
    let rWin = Math.floor(Math.random() * 4)
    let rDraw = Math.floor(Math.random() * 4)
    let rLoss = Math.floor(Math.random() * 4)
    let points = rWin * 3 + rDraw
    let newTeam = { id: ++this.counter, club: data.club, items: [], info: data.info, imgClub: data.imgClub, players: data.players, win: rWin, draw: rDraw, loss: rLoss, points: points }
    newArr = [...newArr, newTeam]
    this.setState({
      teams: newArr
    }, () => {
      localStorage.setItem('teams', JSON.stringify(this.state.teams))
    })
  }

  //Store function to update increment items quantity   
  UpdateIncrement = (id) => {
    let item = this.state.items.find(item => item.id === id);
    let qua = item.quantity++
    let total = this.state.total_price + item.cost;
    this.setState({ quantity: qua, total_price: total })
  }

  //Store function to update decrement items quantity   
  UpdateDecrement = (id) => {
    let item = this.state.items.find(item => item.id === id);
    if (item.quantity === 0) return;
    let qua = item.quantity--
    let total = this.state.total_price - item.cost;
    this.setState({ quantity: qua, total_price: total })

  }
  //Store function to add itmes to cart
  addToCart = (id) => {
    let item = this.state.items.find(item => item.id === id)
    if (item.quantity === 0) return;
    if (this.state.cartItems.find(item => item.id === id)) return;
    let newCart = [...this.state.cartItems, item]
    this.setState({ cartItems: newCart })
  }

  //Store function to remove items from cart
  RemoveItem = (id) => {
    let cartItems = this.state.cartItems.filter(item => item.id !== id);
    let item = this.state.cartItems.find(item => item.id === id);
    let items_price = this.state.total_price - item.cost * item.quantity;
    item.quantity = item.quantity - item.quantity
    this.setState({ cartItems: cartItems, total_price: items_price, quantity: item.quantity })
  }

  //Store function to get confirm on the order
  ConfirmOrder = () => {
    if (this.state.cartItems.length > 0) {
      document.getElementById("su").innerHTML = "תודה שקנית אצלנו,הזמנתך אושרה במערכת שלנו, אימייל עם פרטי ההזמנה יישלחו אליך";
      document.getElementById("su").style.display = "block";
      this.setState({ cartItems: [], total_price: 0 })
      return
    }
    document.getElementById("wr").innerHTML = "לא נוספו מוצרים לסל הקניות, אנא בחר מוצרים מהחנות";
    document.getElementById("wr").style.display = "block";
  }

  //Home function to update the table
  handleGameBtn = (teamA, teamB) => {
    let newArray
    if (localStorage.getItem('teams')) {
      newArray = JSON.parse(localStorage.getItem('teams'))
    }
    else {
      newArray = [...this.state.teams]
    }
    let points, A, B
    let rndA = Math.floor(Math.random() * 7)
    let rndB = Math.floor(Math.random() * 7)
    newArray.map((team, index) => {
      if (team.id === teamA) {
        A = team
        if (rndA > rndB) {
          //team A won
          points = (A.win + 1) * 3 + A.draw
          A = { ...A, win: A.win + 1, points: points }
        } else if (rndB > rndA) {
          //teamA lost
          A = { ...A, loss: A.loss + 1 }
        } else {
          //equal score
          points = A.win * 3 + A.draw + 1
          A = { ...A, draw: A.draw + 1, points: points }
        }
      }
      if (team.id === teamB) {
        B = team
        if (rndA < rndB) {
          //team A won
          points = (B.win + 1) * 3 + B.draw
          B = { ...B, win: B.win + 1, points: points }
        } else if (rndB < rndA) {
          //teamA lost
          B = { ...B, loss: B.loss + 1 }
        } else {
          //equal score
          points = B.win * 3 + B.draw + 1
          B = { ...B, draw: B.draw + 1, points: points }
        }
      }
    })
    newArray = newArray.filter((team) => team.id != teamA && team.id != teamB)//סינון הקבוצות שלא נמצאו והחזרת המערך בלעדיהם
    newArray = [...newArray, A, B]// עדכון הקבוצות החדשות למערך
    this.setState({
      pointA: rndA, pointB: rndB,
      teams: newArray, teamsFromLocalstorage: newArray
    }, () => {
      localStorage.setItem('teams', JSON.stringify(this.state.teams))
      let tA = this.state.teams.find(team => team.id === teamA)//מציאת האובייקט של קבוצה א
      let tB = this.state.teams.find(team => team.id === teamB)//מציאת האובייקט של קבוצה ב
      let result = { teamA: tA.club, teamB: tB.club, pA: this.state.pointA, pB: this.state.pointB }//שמירת האובייקט לצורך הצגת התוצאות
      let newArray = [...this.state.resultsGames, result]//הוספה למערך תוצאות המשחקים
      this.setState({ resultsGames: newArray })//עדכון תוצאות
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() =>
          <Home teams={this.state.teams}
            handleGameBtn={this.handleGameBtn}
            pointA={this.state.pointA}
            pointB={this.state.pointB}
            setArticleNum={this.setArticleNum}
            resultsGames={this.state.resultsGames}
          />}></Route>
        <Route path="/teams" render={() => <Teams teams={this.state.teams}
          sendToParent={this.getTeamFromChild} />}></Route>
        <Route path="/table" render={() => <TableTeams teams={this.state.teams} />}></Route>
        <Route path="/store" render={() => <StoreTeams
          items={this.state.items}
          addToCart={this.addToCart}
          cartItems={this.state.cartItems}
          RemoveItem={this.RemoveItem}
          ConfirmOrder={this.ConfirmOrder}
          total_price={this.state.total_price}
          handleIncrement={this.UpdateIncrement}
          handleDecrement={this.UpdateDecrement} />}></Route>
        <Route path="/team" render={() => <Team />}></Route>
        <Route path="/article" render={() => <Article articles={this.state.articles} article_num={this.state.article_num} />}></Route>
      </Switch>
    );
  }
}

export default withRouter(Manager);