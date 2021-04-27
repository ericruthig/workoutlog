const Express = require('express');
const database = require('./db');
const userController = require('./controllers/userController');
const log = require('./controllers/logController');

const app = Express();
app.use(Express.json());

app.use('/user', userController);
app.use('/log', log);

database.sync();

app.listen(3000, function(){
    console.log('App is listening on Port 3000');
});
