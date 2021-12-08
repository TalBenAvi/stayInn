const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const userService = require('./services/user.service');

const app = express();


// Express App Configuration:
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());
app.use(
    session({
        secret: 'some secret token',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

// Express Routing:
app.get('/', (req, res) => {
    res.send('Success');
});

// User API (CRUDL)

// LIST
app.get('/host', (req, res) => {
    userService.query().then((users) => {
        res.send(users);
    });
});
// DELETE
app.delete('/host', (req, res) => {
    const { userId } = req.params;
    userService
        .remove(userId, user)
        .then(() => {
            res.send('Deleted User Successfuly!');
        })
        .catch((err) => {
            res.status(401).send('Not an admin');
        });
});

// SIGNUP
app.post('/host', (req, res) => {
    const newUser = req.body;
    console.log('Signup req from:', newUser);
    userService.signup(newUser).then((user) => {
        req.session.loggedinAt = Date.now();
        req.session.user = user;
        const copyUser = { ...user };
        delete copyUser.password;
        res.send(copyUser);
    });
});
// LOGIN
app.post('/host', (req, res) => {
    const exUser = req.body;
    userService
        .checkLogin(exUser)
        .then((user) => {
            req.session.loggedinAt = Date.now();
            req.session.user = user;
            const copyUser = { ...user };
            delete copyUser.password;
            console.log(copyUser.nickname + ' has logged in');
            res.send(copyUser);
        })
        .catch((err) => {
            res.status(401).send(err);
        });
});
// LOGOUT
app.post('/', (req, res) => {
    req.session.destroy();
    res.end();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
