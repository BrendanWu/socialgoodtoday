const mongoose = require('mongoose');

const CharitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
    amountRaised: {
        type: Number,
        required: true   
    }
});

module.exports = Charity = mongoose.model('charity', CharitySchema);
