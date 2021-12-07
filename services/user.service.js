const fs = require('fs')
const gUsers = require('../user.json')

module.exports = {
    query,
    getById,
    signup,
    checkLogin,
    remove
}

function query(filterBy = {}) {
    return Promise.resolve(gUsers)
}

function getById(userId) {
    const user = gUsers.find(user => user._id === userId)
    return Promise.resolve(user)
}

function remove(userId) {
    const idx = gUsers.find(currUser => currUser._id === userId)
    gUsers.splice(idx, 1);
    return _saveUsersToFile();
}

function checkLogin(exUser) {
    const user = gUsers.find(user => {
        return user.nickname === exUser.nickname &&
        user.password === exUser.password;
    })
    console.log('after check',user);
    
    if(!user) return Promise.reject('Invalid User/Password')
    return Promise.resolve(user)
   
}

function signup(newUser) {
    console.log(`newUser`, newUser)
    const user = {
        ...newUser,
        score : 100,
        _id : _makeId(),
    }
    console.log(`user`, user)
    gUsers.push(user)
    return _saveUsersToFile().then(() => user)
}

function _makeId(length = 10) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _saveUsersToFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile('user.json', JSON.stringify(gUsers, null, 2), (err) => {
            if (err) return reject(err)
            resolve();
        })
    })
}