const { connect } = require('mongoose');
require('dotenv').config()

connect('').then(() => {
    console.log(`MongoDB Has Been Connected`);
}).catch((err) => {
    console.log(`Error connecting MongoDB : ${err}`);
    return;
})
