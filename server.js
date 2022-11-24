const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
//route 
require('./app/routes/Ticket.routes')(app);

const db = require("./app/models");
const Ticket = require("./app/models/Ticket");

 db.sequelize.sync({ force: true }).then(() => {
     console.log('Synchronysation des models et insertion des donnee minimal ');
     db.Ticket.create({
         contenus: "testContenus",
         document: "testDocuments"
     })
 })


const PORT = 8080;
// const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


//donant donant
// ataoko lo ny zavatra ataoko
