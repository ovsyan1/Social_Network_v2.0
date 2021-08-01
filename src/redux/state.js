const addPost = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
    _state:{
            profilePage:{
                posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 'likes 23'},
                { id: 2, message: "It's my first post", likesCount: 'likes 56'},
                { id: 3, message: 'yo'},
                { id: 4, message: 'yo'},
                { id: 5, message: 'yo'},
                { id: 6, message: 'yo'}
              ],
              newPostText: 'it-kamasutra.com'
            },
            dialogsPage:{
                dialogs: [
                { id: 1, name: 'Dimych', img: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png'},
                { id: 2, name: 'Andrew', img: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png'},
                { id: 3, name: 'Sveta', img: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png'},
                { id: 4, name: 'Sasha', img: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png'},
                { id: 5, name: 'Sasha', img: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png'},
                { id: 6, name: 'Valera', img: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png'}
                ],
               messages: [
                { id: 1, message: 'Hi'},
                { id: 2, message: 'How are you?'},
                { id: 3, message: 'yo'},
                { id: 4, message: 'yo'},
                { id: 5, message: 'yo'},
                { id: 6, message: 'yo'}
                ],
                newMessageText: 'best-network'
            },
            // sidebar:{
            //     friends:[
            //         {id: 1, name: 'Andrew'},
            //         {id: 2, name: 'Vasya'},
            //         {id: 3, name: 'Oleg'}
            //     ]
            // }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;// observer-наблюдатель
    },

    count: 6,
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state);
    // },
    // addMessages() {
    //     this.count++;
    //     let newMessage = {
    //         id: this.count,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action){
        if(action.type === addPost){
            if(action.status === 'message'){
                this.count++;
                let newMessage = {
                    id: this.count,
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
            }else{
               let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
                }; 
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            }
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            if(action.status === 'message'){
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
            }else{
               this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state); 
            }
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: addPost
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store;
window.store = store;