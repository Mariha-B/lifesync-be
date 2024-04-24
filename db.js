const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let dbConnection;

if (!uri) {
    throw new Error('Please add Mongo URI to .env.*');
}

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db();
            return cb()
        })
        .catch((err) => {
            console.log(err)
            return cb(err)
        })
    },

    getDb: () => dbConnection
}

