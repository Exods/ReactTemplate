
const ADD_MESSAGE = 'addMessage';
const CHANGE_MESSAGE = 'changeMessage';
const CLEAN_MESSAGE = 'cleanMessage';
const CHANGE_NEWS = 'change_news';
const ADD_NEWS = 'add_news';

let store ={
    _state : {
        messageClean:' ',
        message: [
            "Hisdf",
            "ddYo",
            "Ledsfsdds",
        ],
        dataProfile: {
            name: 'Piter',
            lastName: 'Last name',
            age: '18'
        },
        dialogList: [
            {
                id: 1, name: 'Sasha',

            },
            {
                id: 2, name: 'Piter',

            },
            {
                id: 3, name: 'Sveta',

            },
            {
                id: 5, name: 'Sam5',

            },
            {
                id: 6, name: 'Sam6',

            },
            {
                id: 7, name: 'Sam7',

            },
            {
                id: 8, name: 'Sam8',

            },
        ],
        newsList:[
            {id:1,message:'news 1'},
            {id:2,message:'news 2'},
            {id:3,message:'news 3'},
            {id:4,message:'news 4'},
            {id:5,message:'news 5'},
            {id:6,message:'news 6'},
        ],
            newsInputValue:'',

    },
    getState(){
        return this._state;
    },
    _callSubsriber (){
        console.log('State change!!!')
    },
    addMessage (message) {
        this._state.message.push(message);
        this._callSubsriber(this._state);
    },
    changeMessage (message){
        this._state.messageClean = message;
        this._callSubsriber(this._state);
    },
    changeNewsValue (newsValue){
        this._state.newsInputValue = newsValue;
        this._callSubsriber(this._state);
    },
    subscribe (observer){
        this._callSubsriber = observer;
    },
    dispatch(action){ // {type:'ADD-POST'}
       switch (action.type){
           case ADD_MESSAGE:
               let newMessage = action.message;
               this._state.message.push(newMessage);
               this._state.messageClean = '';
               this._callSubsriber(this._state);
               break;
           case CHANGE_MESSAGE:
               this._state.messageClean = action.message;
               this._callSubsriber(this._state);
               break;
           case CLEAN_MESSAGE:
               this._state.messageClean = action.message;
               this._callSubsriber(this._state);
               break;
           case CHANGE_NEWS:
               this._state.newsInputValue = action.newsValue;
               this._callSubsriber(this._state);
               break;
           case ADD_NEWS:
               this._state.newsList.push(action.news);
               this._state.newsInputValue = '';
               this._callSubsriber(this._state);
               break;
           default:
               break;
       }
    }
}

export const add_message= (refl)=>{
    return {
        type:ADD_MESSAGE,
        message:refl.current.value
    }
}
export const change_message = (text)=>{
    return {
        type:CHANGE_MESSAGE,
        message: text
    }
}
export const news_change = (refNews)=>{
    return{
        type:CHANGE_NEWS,
        newsInputValue: refNews
    }
}
export const add_news=(refNews)=>{
    return{
        type:ADD_NEWS,
        news: {
            id:7,message:refNews.current.value
        }

    }

}
window.store = store;
export default store;