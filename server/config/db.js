const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() =>
            console.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold)
        )
        .catch((error) => console.log(error));
};

module.exports = connectDB;
