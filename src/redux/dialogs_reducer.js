const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {
    let count = 6;
        switch(action.type){
            case SEND_MESSAGE:
                count++;
                let newMessage = {
                    id: count,
                    message: state.newMessageText
                }
                state.messages.push(newMessage);
                state.newMessageText = '';
                return state;
            case UPDATE_NEW_MESSAGE_TEXT:
                state.newMessageText = action.newText;
                return state;
            default:
                return state;
        }
}


export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
        status: 'message'
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return{
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
        status: 'message'
    }
}

export default dialogsReducer;