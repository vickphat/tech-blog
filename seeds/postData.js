const { Post } = require('../models');

const postData = [
    {
        title: 'Test 1',
        content: 'Hello World!',
        user_id: 1

    },
    {
        title: 'Test 2',
        content: '!dlroW olleH',
        user_id: 2
    },
    {
        title: 'Test 3',
        content: 'Will this work? I do not even know myself',
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;