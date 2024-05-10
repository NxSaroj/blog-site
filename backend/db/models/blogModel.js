const { Schema, model } = require('mongoose'); 
const { randomUUID } = require('crypto')
let blogIdNum = 1;
const blogModel = new Schema({
    blogUUID: {
        type: String,
        default: randomUUID
    }, 
    blogId: {
        type: Number,
        default: blogIdNum+=1
    },
    blogAuthor: {
        type: String,
        required: true
    }, 
    blogTitle: {
        type: String,
        required: true
    },
    blogImage: {
        type: String,
        required: true
    },
    blogContent: {
        type: String,
        required: true
    },
    blogTimestamps: {
        type: String,
        default: `${new Date()}`
    }
})

module.exports = model('blogModel', blogModel)