import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
        { id: 1, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: false, fullName: 'Dmitrii', status: 'Well done', location: {city: 'Minsk', country: 'Belarus'}},
        { id: 2, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: true, fullName: "Kyrylo", status: "I'm a boss", location: {city: 'Kyiv', country: 'Ukraine'}},
        { id: 3, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: true, fullName: 'Vasilii', status: "I'm angry", location: {city: 'Moscow', country: 'Russia'}},
    ])
    }
    
    
    return(
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={classes.img} src={u.photoURL} alt={u.fullName}/>
                        </div>
                        <div>
                            {u.followed 
                            ? <button className={classes.btn} onClick={() => {props.unfollow(u.id)}}>unFollow</button>
                            : <button className={classes.btn} onClick={() => {props.follow(u.id)}}>Follow</button>} 
                        </div>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;