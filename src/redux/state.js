import {renderEntireTree} from "../render";


let state = {
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
}
export let addMessage = (message)=>{
    let newMessage =message;
    state.message.push(newMessage);
    renderEntireTree(state);
}
export let changeMessage = (message)=>{
    state.messageClean = message;
    renderEntireTree(state);
}

export default state;