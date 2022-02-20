const ADD_MESSAGE = 'addMessage';
const CHANGE_MESSAGE = 'changeMessage';
const CLEAN_MESSAGE = 'cleanMessage';

let initialState = {
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
    };
 const messageReducer=(state = initialState,action)=>{
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = action.message;
            state.message.push(newMessage);
            state.messageClean = '';
            break;
        case CHANGE_MESSAGE:
            state.messageClean = action.message;
            break;
        case CLEAN_MESSAGE:
            state.messageClean = action.message;
            break;
        default:
            break;
    }
    return state;
}
export const add_message= (refl)=>{
    return {
        type:'addMessage',
        message:refl.current.value
    }
}
export const change_message = (text)=>{
    return {
        type:'changeMessage',
        message: text
    }
}
export default messageReducer;