const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema(
    {
        date: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 3
        },
        month: {
            type: Number,
            trim: true,
            required: true,
        },
        year: {
            type: Number,
            required: true
        },       
    },

);

module.exports = mongoose.model('MyDate', dateSchema);