const ADD_MESSAGE = 'addMessage';
const CHANGE_MESSAGE = 'changeMessage';
const CLEAN_MESSAGE = 'cleanMessage';

 const messageReducer=(state,action)=>{
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