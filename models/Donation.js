const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    charity: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    donationType: {
        type: String,
        required: true
    },
    fulfilled: {
        type: Boolean,
        default: false
    }
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Donation = mongoose.model('donation', DonationSchema);
