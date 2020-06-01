/** This module implements all of the API routes for my server.
 * @module api
 */
const express = require('express');
const api = express.Router();



api.post('/create', async(req, res) => {
  const data = req.body;
  console.log('data');

  if (data !== data) {
       await res.json({ success: false });
   } else {
       await res.json({ success: true});
   }


  let fs = require('fs');
  fs.writeFile('src/static/JSON/test2.json', JSON.stringify(req.body), (err) => {
    if (err){ throw err};
    console.log('the file has been saved');
  });



});
module.exports = api ;
