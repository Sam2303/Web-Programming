/** This module implements all of the API routes for my server.
 * @module api
 */
const express = require('express');
const api = express.Router();
const elem = {};



api.post('/create', async(req, res) => {
  const data = req.body;
  console.log('create data recieved');

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

api.post('/results', async(req, res) => {

  const data = req.body;
  console.log('data recieved');

  if (data !== data){
    await res.json({success:false});
  } else {
    await res.json({success:true});
  }

  let fs = require('fs');
  fs.writeFile('src/static/resultsJSON/test.json', JSON.stringify(data), (err) => {
    if (err){throw err};
    console.log('the results have been recorded');
  });


});


api.get('/viewResults', async (res,req) => {
  const url = '../src/static/resultsJSON/test.json';
  const response = await fetch(url);
  const data = response.json();

  if (data !== data){
    await res.json({success:false});
  } else {await res.json({success:true});
      }

});


module.exports = api ;
