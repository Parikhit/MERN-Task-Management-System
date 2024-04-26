const express = require('express');
const colors = require('colors');
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');
const connectDB = require('./config/db.js');
require('dotenv').config();

const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.all(
    '/graphql',
    graphqlHTTP({
        schema,
    })
);

// app.use(express.static(path.join(__dirname, '..', '/client/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
// });

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
