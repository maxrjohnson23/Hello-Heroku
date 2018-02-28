const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const Car = require("./car");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/api/cars", (req, res) => {
    let cars = [];
    cars.push(new Car("Ford","GT"));
    cars.push(new Car("Lamborghini","Aventador"));
    cars.push(new Car("Dodge","Viper"));
    cars.push(new Car("McLaren","P1"));

    res.send(cars);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});