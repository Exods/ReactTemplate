const CHANGE_NEWS = 'change_news';
const ADD_NEWS = 'add_news';

let initialState ={
        newsList:[
            {id:1,message:'news 1'},
            {id:2,message:'news 2'},
            {id:3,message:'news 3'},
            {id:4,message:'news 4'},
            {id:5,message:'news 5'},
            {id:6,message:'news 6'},
        ],
        newsInputValue:'New'
    }

const newsReducer = (state = initialState, action) => {
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