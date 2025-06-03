const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 30,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
});

module.exports = mongoose.model("Client", clientSchema);