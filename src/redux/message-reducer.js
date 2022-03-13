const ADD_MESSAGE = 'addMessage';
const CHANGE_MESSAGE = 'changeMessage';
const CLEAN_MESSAGE = 'cleanMessage';

let initialState = {
        messageClean:'Mess',
        message: [
            "Привет",
            "Yo",
            "Бро",
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
     let stateCopy;
    switch (action.type){
        case ADD_MESSAGE:
            stateCopy = {...state}
            stateCopy.message = [...state.message];
            let newMessage = action.message;
            stateCopy.message.push(newMessage);
            stateCopy.messageClean = ' ';
            return stateCopy;
        case CHANGE_MESSAGE:
            stateCopy = {...state}
            stateCopy.messageClean = action.message;
            return stateCopy;
        case CLEAN_MESSAGE:
            stateCopy.messageClean = action.message;
            return stateCopy;
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