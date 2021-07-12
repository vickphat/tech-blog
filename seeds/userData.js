const { User } = require('../models');

const userData = [
    {
        username: 'Vick',
        password: 'Password1'

    },
    {
        username: 'Kellie',
        password: 'Password2'
    },
    {
        username: 'Mila',
        password: 'Password3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;