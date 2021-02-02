const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gigSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: Array,
        required: false
    },
    styles: {
        type: Array,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    delivery: {
        type: Number,
        required: false
    },
    fabrics: {
        type: Array,
        required: false
    },
    coverImage: {
        type: String,
        required: false
    },
    gallery: {
        type: Array,
        required: false
    },
    keywords: {
        type: Array,
        required: false
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedAt: {
        type: Date,
        required: false
    },
    createdAt: {
        type: Date,
        required: true
    }
})


module.exports = mongoose.model('Gig', gigSchema)