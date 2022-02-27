import React, {Component} from 'react';
import {add_news, news_change} from "../../redux/news-reducer";
import News from "./News";


export default class NewsContainer extends Component {

    render() {
        let ChangeNewsValue = (refNews) => {
            this.props.store.dispatch(news_change(refNews));
        }
        let addNews = (refNews) => {
            this.props.store.dispatch(add_news(refNews));
        }
        let news = this.props.store.getState();
        return (
            <News
                addNews={addNews}
                ChangeNewsValue={ChangeNewsValue}
                news={news.news}
            />
        )
    }
}