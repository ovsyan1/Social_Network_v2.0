import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { setUsersAC, followAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users_reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersCount:(totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);