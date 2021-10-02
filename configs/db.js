const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/simpleapi"

const connection = async(res, req, next) => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log("MongoDB connected"))
        .catch((err)=> res.status(400).json(err))
    } catch (error) {
        res.status(500).json(err)
    }
}

module.exports = connection;