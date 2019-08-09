const axios = require('axios');


const getClima = async (lat,lng)=>{
    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cc235c3fc0f79da55c7ae4cfbb82c1c3&units=metric`)
    return resp.data.main.temp
}

module.exports ={
    getClima
}