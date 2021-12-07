const STORAGE_KEY = 'loggedinUser';
const USER_URL = '/#/';
import axios from 'axios'
export const userService = {
    getLoggedinUser,
    query,
    signup,
    login,
    logout,
    removeUser
};

window.userService = userService;

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY));
}

function query() {
    return axios.get(USER_URL).then(res => res.data);
}

function removeUser(userId) {
    return axios.delete(USER_URL + userId).then(res => res.data);
}

function signup(newUser) {
    return axios
        .post(USER_URL, newUser)
        .then((res) => res.data)
        .then((user) => {
            console.log(user);
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
            return user;
        });
}

function login(exUser) {
    return axios
        .post(USER_URL, exUser )
        .then((res) => res.data)
        .then((user) => {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
            return user;
        });
}

function logout() {
   return axios.post(USER_URL).then(()=>{
       sessionStorage.removeItem(STORAGE_KEY);
   })
}
