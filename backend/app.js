const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    let {city} = req.query
    try {
       const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`)
        return res.status(200).json({message:"Ok",weather:data});
    } catch (error) {
        return res.status(400).json({message:"Something went wrong",error});
    }
});

app.listen(port,()=>{
    console.log(`Backend runs on port number ${port}`);
});

