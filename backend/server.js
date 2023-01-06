const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/main.route");

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(routes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
})
    .then(() => {
        console.log('Successfully Connected To Database');
    }, (err) => {
        console.log('Error Connnecting To Database');
        console.trace(err);
    })

mongoose.connection.on('error', err => {
    console.log('Error After Inital Connection To Database');
});

app.listen(port, () => {
    console.log(`Server Started On Port ${port}`);
});