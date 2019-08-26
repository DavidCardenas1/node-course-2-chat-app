
import path = require('path');
import express = require('express');

const publicPath:string = path.join(__dirname, '../public');
let app = express();
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

// console.log(publicPath);


