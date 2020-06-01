/** This module implements all of the API routes for my server.
 * @module api
 */

const express = require('express');

const api = express.Router();

function linked(){
  console.log('linked');
}

api.post('/create', async(req) => {

  const {name: qTitle} = req.body;
  console.log('Hello World')
  console.log(qTitle);

  let json = JSON.parse('<json string>');
  let data = JSON.stringify(json);
  let fs = require('fs');
  fs.writeFile("file.json", data);


});
module.exports = api ;
