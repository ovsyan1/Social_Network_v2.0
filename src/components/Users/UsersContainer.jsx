import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { setUsersAC, followAC, unfollowAC } from '../../redux/users_reducer';

// const UsersContainer = () => {
//     return(
//         <div>
//             Users will be here
//         </div>
//     )
// }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);