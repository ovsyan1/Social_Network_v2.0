import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/gordon.jpg';

const Users = (props) => {
    if(props.users.length === 0){
        axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            props.setUsers(response.data.items);
        })
    }
    
    return(
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={classes.img} 
                                src={ u.photos.small !== null ? u.photos.small : userPhoto } 
                                alt={u.name}/>
                        </div>
                        <div>
                            {u.followed 
                            ? <button className={classes.btn} onClick={() => {props.unfollow(u.id)}}>unFollow</button>
                            : <button className={classes.btn} onClick={() => {props.follow(u.id)}}>Follow</button>} 
                        </div>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;