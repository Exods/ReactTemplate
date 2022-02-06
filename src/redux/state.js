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
        ]
    },
    getState(){
        return this._state;
    },
    _callSubsriber (){
        console.log('State change!!!')
    },
    addMessage (message) {
        let newMessage = message;
        this._state.message.push(newMessage);
        this._callSubsriber(this._state);
    },
    changeMessage (message){
        this._state.messageClean = message;
        this._callSubsriber(this._state);
    },
    subscribe (observer){
        this._callSubsriber = observer;
    },
    dispatch(action){ // {type:'ADD-POST'}
       switch (action.type){
           case 'addMessage':
               let newMessage = action.message;
               this._state.message.push(newMessage);
               this._state.messageClean = '';
               this._callSubsriber(this._state);
               break;
           case 'changeMessage':
               this._state.messageClean = action.message;
               this._callSubsriber(this._state);
               break;
           case 'cleanMessage':
               this._state.messageClean = action.message;
               this._callSubsriber(this._state);
               break;
           default:
               break;
       }
    }
}

window.store = store;
export default store;