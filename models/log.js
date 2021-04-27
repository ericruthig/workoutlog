const sequelize = require('sequelize');
const database = require('../db');

const log = database.define('log', {
    description: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    definition: {
        type: sequelize.STRING,
        allowNull: false, 
    },
    result: {
        type: sequelize.STRING,
        allowNull: false,
    } ,
    owner_id: sequelize.STRING
});
