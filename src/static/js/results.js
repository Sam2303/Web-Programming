'use strict';
const elem = {};
let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('navBarToggle');
navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});


window.onload = async function printResults(){
  const url = '../static/resultsJSON/test.json';
  const response = await fetch(url);
  const data = await response.json();

  //console.log(data);
  const rObject = document.getElementById('questions-box');
	const rTitle = document.createElement('h1');
  rTitle.textContent = data.name + ' Results';
  rTitle.id = 'questionnaireTitle';

  document.body.insertBefore(rTitle, rObject);

  for (let i=0; i<data.answers.length; i++){
    let resultDiv = document.createElement('div');
    resultDiv.id = 'seperateQuestion';
    rObject.appendChild(resultDiv);

    let resultText = document.createElement('p');
    resultText.className = 'questionText';
    resultText.textContent = data.answers[i].text;
    resultDiv.appendChild(resultText);

    let responseText = document.createElement('p');
    responseText.className = 'textBox';
    responseText.textContent = 'Answer: ' + data.answers[i].response;
    resultDiv.appendChild(responseText);
  }
};

let downloadBtn = document.getElementById('download-button');
downloadBtn.addEventListener('click', async function() {

  const url = '../static/resultsJSON/test.json';
  const response = await fetch(url);
  const data = await response.json();

  download(JSON.stringify(data), "Answers.json");

  });

  // Function that creates a link with a downloadable file
  function download(data, fileN) {
   const a = document.createElement("a");
   const file = new Blob([data]);
   a.href = URL.createObjectURL(file);
   a.download = fileN;
   a.click();
  }
