import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    const onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }
    console.log(props);
    return(
        <Dialogs updateNewMessageChange={onMessageChange} 
        sendMessage={onSendMessageClick}
        dialogsPage={state} />
    )
}

export default DialogsContainer;