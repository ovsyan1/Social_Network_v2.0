import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => {
       return <DialogItem id={dialog.id} name={dialog.name} img={dialog.img}/>
    })

    let messagesElements = props.state.messages.map(message => {
        return <Message message={message.message}/>
    })
    
    let newMessageElement = React.createRef();

    const addTxt = () => {
        props.dispatch({type: 'ADD-POST', status: 'message'});
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', status: 'message',
        newText: text});
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
                        <textarea onChange={onMessageChange}  ref={newMessageElement} value={props.state.newMessageText} cols="10" rows="2"></textarea>     
                </div>
                <button onClick={addTxt}>add</button>
            </div>
        </div>
    )
}

export default Dialogs;