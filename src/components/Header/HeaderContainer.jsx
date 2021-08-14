import React from 'react';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth_reducer';
import {connect} from 'react-redux';
import {usersAPI} from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount(){
        usersAPI.authUser().then(response => {
                if(response.data.resultCode === 0) { // User authorized
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                    // this.props.setAuthUserData('SET_USER_DATA', response.data.data.login);
                }
        })
    }
    render(){
       return  (
       <Header {...this.props} />
    ) 
    }         
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);