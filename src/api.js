/** This module implements all of the API routes for my server.
 * @module api
 */

const express = require('express');

const api = express.Router();

api.post('/create', async(req, res) => {

  const {name: qTitle} = req.body;
  console.log('Hello World')
  console.log(qTitle);

  await res.json({ success:true });


  let data = JSON.stringify(qTitle);
  let fs = require('fs');
  fs.writeFile("./src/static/JSON/file.json", data);


});
module.exports = api ;
