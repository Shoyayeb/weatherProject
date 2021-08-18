// need to install npm express
const express = require("express");
const https = require("https");
const {
    type
} = require("os");
const app = express();

app.get("/", function (req, res) {
    // my country's city  nothing work at all
    // const url = "https://api.openweathermap.org/data/2.5/forecast?q=dhaka&appid=3e46c14c99620c15ff05dab453f5d646&units=metric"

// other country's city     work but not all
    // const url = "https://api.openweathermap.org/data/2.5/forecast?q=los angeles&appid=3e46c14c99620c15ff05dab453f5d646&units=metric" 

// my country    not working
    // const url = "https://api.openweathermap.org/data/2.5/forecast?q=bangladesh&appid=3e46c14c99620c15ff05dab453f5d646&units=metric"

// other country    working
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=dhaka&appid=3e46c14c99620c15ff05dab453f5d646&units=metric" 


    // main problem is some city work but some city doesn't work.
    // Help me to figure this problem
    // my email: sa.fine@outlook.com


    https.get(url, function (response) {
        console.log("Status Code" + response.statusCode);
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.list[0].main.temp;
            const feel = weatherData.list[39].weather[0].description;
            const location = weatherData.city.name;
            const icon = weatherData.list[0].weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            // console.log(tem);
            res.write("<p>The weather condition in " + location + " is " + feel + "</p>")
            res.write("<h1> Temparature is " + temp + " and  " + feel + "</h1>")
            res.write(`<img src=` + imgUrl + ` alt="Weather in image">`)
            // uncomment next line for debug when json parse fail ⬇️
            // console.log(weatherData);
            res.send()
        })
    })
    // res.send("Server is up and running")
})
app.listen(3000, function () {
    console.log("server is up and running on port 3000");
})
