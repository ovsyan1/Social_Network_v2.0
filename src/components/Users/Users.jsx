import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/gordon.jpg';

const Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i  = 1;i <= pagesCount;i++){
        pages.push(i);
    }

    return(
        <div>
                <div className={classes.box_pagination}>
                    <span>&#60;</span>
                    {pages.map(page => {
                        if(page <= 15){
                           return <span className={props.currentPage === page && classes.selectedPage} onClick={(e) => props.onPageChanged(page)}>{page}</span> 
                        }
                       
                    })}
                    <span>&#62;</span>
                </div>
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