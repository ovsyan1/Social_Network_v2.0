import * as axios from 'axios';


const api = 'https://social-network.samuraijs.com/api/1.0/';

// const instance = axios.create({
//         withCredentials: true,
//         baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//         headers: {
//             "API_KEY": "2d59a1d1-0abd-4ff2-a123-03118e91730d"
//         }
// })


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return axios.get(`${api}users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
                return response.data;
            });
    },
    getProfile(userId = 2){
       return axios.get(`${api}profile/${userId}`).then(response => {
           return response.data
       })
    },
    authUser(){
       return axios.get(api + `auth/me`, {
            withCredentials: true
        })
    },
    follow(userId){
       return axios.post(`${api}follow/${userId}`, {},{
        withCredentials: true,
        headers: {
        "API_KEY": "161f90c0-2ef7-4f63-89c5-48dd2a716be7"
        }
    })
    },
    unfollow(userId){
     return   axios.delete(`${api}follow/${userId}`, {
            withCredentials: true,
            headers: {
            "API_KEY": "161f90c0-2ef7-4f63-89c5-48dd2a716be7"
            }
            })
    }
}
