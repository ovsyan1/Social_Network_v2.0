import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs_reducer';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => {
       return <DialogItem id={dialog.id} name={dialog.name} img={dialog.img}/>
    })

    let messagesElements = props.state.messages.map(message => {
        return <Message message={message.message}/>
    })
    

    const addTxt = () => {
        props.dispatch(addMessageActionCreator());
    }
    const onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action);
    }
    console.log(props);
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                        <textarea onChange={onMessageChange}   value={props.state.newMessageText} cols="10" rows="2"></textarea>     
                </div>
                <button onClick={addTxt}>add</button>
            </div>
        </div>
    )
}

export default Dialogs;