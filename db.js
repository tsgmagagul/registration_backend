const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'campusGuide',
    'user',
    '218728448',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;