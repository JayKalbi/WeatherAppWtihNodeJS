const http = require("http");
const fs = require("fs");
var requests = require('requests');
const indexFile = fs.readFileSync("index.html","utf-8");

const replaceVal = (tempVal, orgVal) => {
    // let ft = orgVal.main.temp;
    // let Celsius = 5.0/9.0 * (ft-32);  
    let temperature = tempVal.replace("{%tempval%}",orgVal.main.temp);
    // ft = orgVal.main.temp_min;
    temperature = temperature.replace("{%tempmin%}",orgVal.main.temp_min);
    // ft = orgVal.main.temp_max;
    temperature = temperature.replace("{%tempmax%}",orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}",orgVal.name);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    temperature = temperature.replace("{$tempStatus%",orgVal.weather[0].main);

    return temperature;
    
}

const server = http.createServer((req,res)=> {
    if(req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Anand&APPID=b9516f0facbd229498b4cacf831acfb3")
        .on('data',  (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            // let Fahrenheit = arrData[0].main.temp;
            // let Celsius = ((Fahrenheit-32)*5)/9; 
            // console.log(Celsius);
            const realTimeData = arrData.map((val) => replaceVal(indexFile,val))
            .join("");
            res.write(realTimeData);
        })
        .on('end',  (err) => {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
            console.log('end');
        });
    }
})

server.listen(8000,"127.0.0.1");