require('dotenv').config();

const get_test = (req, res) => {
    const test = process.env.test;
    console.log(test);
};

module.exports = { get_test };
