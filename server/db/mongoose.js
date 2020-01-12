const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bbb_users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})