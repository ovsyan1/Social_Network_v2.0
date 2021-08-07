const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let count = 6;

let initialState = {
    users: [
        // { id: 1, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: false, fullName: 'Dmitrii', status: 'Well done', location: {city: 'Minsk', country: 'Belarus'}},
        // { id: 2, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: true, fullName: "Kyrylo", status: "I'm a boss", location: {city: 'Kyiv', country: 'Ukraine'}},
        // { id: 3, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: true, fullName: 'Vasilii', status: "I'm angry", location: {city: 'Moscow', country: 'Russia'}},
        // { id: 4, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: false, fullName: 'Oksana'},
        // { id: 5, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: false, fullName: 'Stefan'},
        // { id: 6, photoURL: "https://globalkz.biz/usr/person/big-person-15755432141.jpg", followed: true, fullName: 'Arsen'}
    ]
}

const usersReducer = (state = initialState, action) => {
    
        switch(action.type){
            case FOLLOW: 
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return{...user, followed: true}
                    }
                    return user
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(user => {
                        if(user.id === action.userId){
                            return{...user, followed: false}
                        }
                        return user
                    })
                }
            case SET_USERS:
                return {...state, users: [...state.users, ...action.users]}

            default:
                return state;
        }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;