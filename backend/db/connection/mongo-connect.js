const { connect } = require('mongoose');
require('dotenv').config()

connect('mongodb+srv://Syst:xoderz@xoderz.cz4cjej.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log(`MongoDB Has Been Connected`);
}).catch((err) => {
    console.log(`Error connecting MongoDB : ${err}`);
    return;
})