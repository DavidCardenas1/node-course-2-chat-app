
import path = require('path');
import express = require('express');

const publicPath:string = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

// console.log(publicPath);


