const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    cid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    fulfilled: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Donation = mongoose.model('donation', DonationSchema);
