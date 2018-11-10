const express = require('express');
const app = express();
const path = require('path')

app.use( express.static( `${__dirname}/build` ) );
const distFilePath = path.join(__dirname, 'build/index.html')

app.get('*', (req, res)=>{
  res.sendFile(distFilePath);
})

app.listen(4000, () => console.log("Listening on 4000"));