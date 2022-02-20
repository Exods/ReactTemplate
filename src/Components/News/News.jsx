import React, {Component} from 'react';
import classes from './News.module.css'
import {add_news, news_change} from "../../redux/state";


const NewsList = (props) => {
    return (

        <>
            {props.news.map(function (element, key) {
                return <li key={key}>{element.message}</li>
            })}
        </>
    );
}
export default class News extends Component {

    render() {
        let refNews = React.createRef();
        let ChangeNewsValue = () => {

            this.props.dispatch(news_change(refNews));
        }
        let addNews = () => {
            if (refNews.current.value.length<4){
                return false;
            }
            this.props.dispatch(add_news(refNews));
        }

        return (
            <>
                <div className={classes.news}>
                    <h3>News</h3>
                </div>
                <div className={classes.news_list}>
                    <ul>
                        <NewsList news={this.props.news}/>
                    </ul>
                    <input onChange={ChangeNewsValue} ref={refNews} type="text" value={this.props.inputValue}/>
                    <input onClick={addNews} type="submit"/>
                </div>
            </>
        )
    }
}