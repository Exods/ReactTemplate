import messageReducer from "./message-reducer";
import newsReducer from "./news-reducer";


let store ={
    _state : {
       message:{
            messageClean:' ',
            message: [
                "Hisdf",
                "ddYo",
                "Ledsfsdds",
            ],
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
        },
       profile:{
           dataProfile: {
               name: 'Piter',
               lastName: 'Last name',
               age: '18'
           },

       },
       news:{
            newsList:[
                {id:1,message:'news 1'},
                {id:2,message:'news 2'},
                {id:3,message:'news 3'},
                {id:4,message:'news 4'},
                {id:5,message:'news 5'},
                {id:6,message:'news 6'},
            ],
            newsInputValue:'55',
        },
    },
    getState(){
        return this._state;
    },
    _callSubsriber (){
        console.log('State change!!!')
    },
    addMessage (message) {
        this._state.message.message.push(message);
        this._callSubsriber(this._state);

    },
    changeMessage (message){
        this._state.message.messageClean = message;
        this._callSubsriber(this._state);
    },
    changeNewsValue (newsValue){
        this._state.news.newsInputValue = newsValue;
        this._callSubsriber(this._state);
    },
    subscribe (observer){
        this._callSubsriber = observer;
    },
    dispatch(action){ // {type:'ADD-POST'}
        this._state.message = messageReducer(this._state.message, action);
        this._state.news = newsReducer(this._state.news, action);
        this._callSubsriber(this._state);
    }
}


window.store = store;
export default store;