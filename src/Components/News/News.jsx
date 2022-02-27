import React, {Component} from 'react';
import classes from './News.module.css'

const NewsList = (props) => {
    return (

        <>
            {props.news.newsList.map(function (element, key) {
                return <li key={key}>{element.message}</li>
            })}
        </>
    );
}
export default class News extends Component {

    render() {
        let refNews = React.createRef();
        let ChangeNewsValue = () => {

            this.props.ChangeNewsValue(refNews);
        }
        let addNews = () => {
            if (refNews.current.value.length<4){
                return false;
            }
            this.props.addNews(refNews)
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
                    <input onChange={ChangeNewsValue} ref={refNews} type="text" value={this.props.news.newsInputValue}/>
                    <input onClick={addNews} type="submit"/>
                </div>
            </>
        )
    }
}