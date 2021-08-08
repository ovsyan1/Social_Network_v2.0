import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/gordon.jpg';

class Users extends React.Component{
    componentDidMount(){
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount)
                console.log(response.data);
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render(){

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i  = 1;i <= pagesCount;i++){
            pages.push(i);
        }
        console.log(this.props);
        return(
            <div>
                <div className={classes.box_pagination}>
                    {pages.map(page => {
                       return <span className={this.props.currentPage === page && classes.selectedPage} onClick={(e) => this.onPageChanged(page)}>{page}</span>
                    })}
                </div>
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