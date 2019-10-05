const mongoose = require("mongoose")

mongoose.Promise = global.Promise; //evitar warnings de promisse
mongoose.set('useUnifiedTopology', true)
module.exports = mongoose.connect('mongodb://localhost:27017/escola', { useNewUrlParser: true })