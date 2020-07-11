const express = require("express")
const app = express()
const config = require("./config")
const mongoose = require("mongoose")

// #Body-Phaser
app.use(express.urlencoded({limit: '50mb', extended: true}));


// Routes
const postRoute = require("./routes/post")
app.use("/post", postRoute)

const categoryRoute = require("./routes/category")
app.use("/category", categoryRoute)

//Starting Our Backend & Database
app.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI,
        {useNewUrlParser: true}
    );
    console.log(`We are live on http://localhost:${config.PORT}`)});