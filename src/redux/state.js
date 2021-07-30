import { rerenderEntireTree } from "../render";

let state = {
    profilePage:{
        posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 'likes 23'},
        { id: 2, message: "It's my first post", likesCount: 'likes 56'},
        { id: 3, message: 'yo'},
        { id: 4, message: 'yo'},
        { id: 5, message: 'yo'},
        { id: 6, message: 'yo'}
      ], 
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
    },
    // sidebar:{
    //     friends:[
    //         {id: 1, name: 'Andrew'},
    //         {id: 2, name: 'Vasya'},
    //         {id: 3, name: 'Oleg'}
    //     ]
    // }
    
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;