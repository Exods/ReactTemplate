
import {add_message,change_message} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
/*
export default class DialogsConteiner extends Component {

    render() {

        let addMessage = (text) => {
            this.props.store.dispatch(add_message(text))
        }
        let changeInput = (text) => {
            this.props.store.dispatch(change_message(text))
        }

        let message = this.props.store.getState();
        return (
            <Dialogs
                addMessage={addMessage}
                changeInput={changeInput}
                message={message.message}
            />
        )
    }
}
 */
let mapStateToProps = (state)=>{
    return{
        message:state.message
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        addMessage:(text)=>{
            dispatch(add_message(text))
        },

        changeInput:(text)=>{
            dispatch(change_message(text))
        },
    }
}
let SuperDialogsConteiner = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

 export default  SuperDialogsConteiner;