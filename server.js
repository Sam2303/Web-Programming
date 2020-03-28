const express = require ("express");
const path = require ("path");

const app = express();


app.use(express.static("src/pages"));
app.use(express.static(path.join(__dirname, 'src')));

app.listen(8080);
console.log("Website running on: http://127.0.0.1:8080")
