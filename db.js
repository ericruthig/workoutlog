const Sequelize = require('sequelize');

const db = new Sequelize('workoutlog', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

db
    .authenticate()
    .then(() => {
        console.log('Connection success');
    })
    .catch((err) => {
        console.error('Unable to connect to the database', err);
    });


module.exports = db;