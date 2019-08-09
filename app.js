//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
console.log(argv.direccion);

// const encodedUlr= encodeURI(argv.direccion);

// console.log(encodedUlr)

// const instance = axios.create({
//     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
//    // timeout: 1000,
//     headers: {'x-RapidAPI-Key': 'c45fde364fmsh14014cb2818a86fp1d4a41jsne600b015c1be'}
//   });

//   instance.get()
//     .then((resp)=>{ 
//     console.log(resp.data.Results[0]);
//   }).catch(err => {
//       console.log('ERROR!!!!',err)
//   })

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.750000,-74.000000)
//     .then(console.log)
//     .catch(console.log)

const getInfo=async (direccion)=>{
    // salida
 try{
    const coords=  await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima de ${ coords.direccion} es de ${temp}.`;

 } catch(e){

    return `No se pudo determinar el clima de ${direccion}`

 }
 
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)