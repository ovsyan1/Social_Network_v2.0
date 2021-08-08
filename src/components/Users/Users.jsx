import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/gordon.jpg';

class Users extends React.Component{
    constructor(props){
        super(props)
        alert('new')
            axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render(){
        return(
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img className={classes.img} 
                                    src={ u.photos.small !== null ? u.photos.small : userPhoto } 
                                    alt={u.name}/>
                            </div>
                            <div>
                                {u.followed 
                                ? <button className={classes.btn} onClick={() => {this.props.unfollow(u.id)}}>unFollow</button>
                                : <button className={classes.btn} onClick={() => {this.props.follow(u.id)}}>Follow</button>} 
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
}

export default Users;