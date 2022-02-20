const CHANGE_NEWS = 'change_news';
const ADD_NEWS = 'add_news';

const newsReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NEWS:
            state.newsInputValue = action.newsValue;
            break;
        case ADD_NEWS:
            state.newsList.push(action.news);
            state.newsInputValue = '';
            break;
        default:
            break;
    }

    return state;
}

export const news_change = (refNews) => {
    return {
        type: 'change_news',
        newsInputValue: refNews
    }
}
export const add_news = (refNews) => {
    return {
        type: 'add_news',
        news: {
            id: 7, message: refNews.current.value
        }

    }

}

export default newsReducer;