  mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB Successfully');
    } catch (error) {
        console.log("Error connecting to mongodb", error);
        process.exit(1);
    }
}

module.exports = connectToDB;