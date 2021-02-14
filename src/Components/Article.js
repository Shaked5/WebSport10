import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import NavWeb from './Nav';

class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ textAlign: 'center', backgroundColor: 'lightcyan' }}>
        <NavWeb />
        {this.props.articles.filter(article => article.id === this.props.article_num).map((item, index) =>
          <div key={index}>
            <h3 style={{ marginTop: 15 }}>{item.title}</h3>
            <h5>{item.sub_title}</h5><br/>
            <img style={{ width: "40%", borderRadius: 10, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0' }} src={item.image}></img><br/><br/>
            <p style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>{item.context}</p>
          </div>)}
      </div>);
  }
}

export default withRouter(Article);