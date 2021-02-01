import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import NavWeb from './Nav';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        console.log(this.props.articles);
        return (<div style={{ textAlign: 'center' }}>
            <NavWeb />
            {this.props.articles.filter(article => article.id === this.props.article_num).map((item, index) =>
                <div key={index}>
                    <h3 style={{ marginTop: 15 }}>{item.title}</h3>
                    <h5>{item.sub_title}</h5>
                    <img style={{ width: "40%" }} src={item.image}></img>
                    <p style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>{item.context}</p>
                </div>)}
        </div>);
    }
}

export default withRouter(Article);