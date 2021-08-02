import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map(post => {
            return <Post message={post.message} count={post.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div className={classes.post}>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} cols="20" rows="4"/>
                    </div>
                    <div>
                       <button onClick={addPost}>Add post</button> 
                    </div>
                </div>
                    <div className={classes.posts}>
                        New post
                        {postsElements}
                    </div>
            </div>
}

export default MyPosts;