'use strict';

// overall block of code to the burger menu work
let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('navBarToggle');
navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});



// Fetch Request for Questionaire
//loading the function when the page loads
window.onload = printQuestions();
async function printQuestions(){
  // Defining the route to the JSON file
    const url = '../static/JSON/example-questionnaire.json';
// Fetch Query
    const response = await fetch(url);
// The Response from the Fetch
    const data = await response.json()
// Get Id of the empty div in the html which all of out questions and answers will entered into
    let questionBox = document.getElementById('questions-box');
// Print the name of the questionnaire
    let questionnaireTitle = document.createElement('h2');
    questionnaireTitle.id = 'questionnaireTitle';
    questionnaireTitle.textContent = data.name;
    document.body.insertBefore(questionnaireTitle, questionBox);
//loop for going through the questions and printing all of them
      for(let id = 0; id < data.questions.length; id++){
//just logging the questions in the console
        console.log(data.questions[id].text);
// Making of the Div of each question and answer
        let listCreate = document.createElement('div');
        listCreate.id = 'seperateQuestion'
        let submit = document.getElementById('submit-button');
        questionBox.appendChild(listCreate);

// The input of the questions into the div above from the JSON file
        let questionText = document.createElement('label');
        questionText.id = 'questionText'
        let Qtext = document.createTextNode(data.questions[id].text);
        questionText.appendChild(Qtext);
        listCreate.appendChild(questionText);



// if statements to see what sort of question it is to decide what answer box is needed
        if(data.questions[id].type === 'text'){
          console.log(data.questions[id].id +' ' +  'TEXT');

          let textAnswer = document.createElement('input');
          textAnswer.type = 'text';
          textAnswer.id = id
          textAnswer.className = 'textBox'

          listCreate.appendChild(textAnswer);
        }
        else if(data.questions[id].type === 'number'){
            console.log(data.questions[id].id +' ' +  'NUMBER');

            let textAnswer = document.createElement('input');
            textAnswer.type = 'number';
            textAnswer.id = id
            textAnswer.className = 'numberBox'
            listCreate.appendChild(textAnswer);

        }
        else if(data.questions[id].type === 'single-select'){
            console.log(data.questions[id].id +' ' +  'SINGLE SELECT');

            for(let i = 0; i<data.questions[id].options.length; i++){

              let optionsPrint = document.createElement('p');
              optionsPrint.textContent = data.questions[id].options[i];
              optionsPrint.id = 'option' + i;
              optionsPrint.className = 'options';


              let singleBox = document.createElement('input');
              singleBox.type = 'checkbox';
              singleBox.className = 'checkbox';
              singleBox.name = 'radio'
              singleBox.id = i;


              listCreate.appendChild(optionsPrint);
              optionsPrint.appendChild(singleBox);


            }
        }
        else if(data.questions[id].type === 'multi-select'){
            console.log(data.questions[id].id +' ' +  'MULTI SELECT');

            for(let i = 0; i<data.questions[id].options.length; i++){

              let optionsPrint = document.createElement('p');
              optionsPrint.textContent = data.questions[id].options[i];
              optionsPrint.id = 'option' + i;
              optionsPrint.className = 'options';

              let checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.className = 'checkbox';
              checkbox.id = i;
;
              listCreate.appendChild(optionsPrint);
              optionsPrint.appendChild(checkbox);

        }
      }
        else{console.log('there must be an error in your questions!!');}

      }
}
