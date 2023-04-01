const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://mersanirania2:raniarania@cluster0.ikrnita.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true } ,
    (err) =>
    {
        if(!err) console.log(" mongodb connected");
        else console.log("connection error:" + err);
    }
) 