//const elem = {};

let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', async () => {

  console.log('clicked');
  const url = '../src/api/results';

  let container_div = document.getElementById('questions-box');
  let count = container_div.getElementsByTagName('div').length;


    const json = '../static/JSON/example-questionnaire.json';
    const response = await fetch(json);
    const getJ = await response.json()

  const surveyTitle = document.getElementById('questionnaireTitle').innerHTML;

  const data = {name : surveyTitle,};
  data.answers = [];


  for (let i=0; i<count; i++){
    let questionId = i;
    let questionTitle = document.getElementById(i).innerHTML;
    elem.qAnswer = document.getElementById('input'+i).value;

    let check = document.getElementById('seperateQuestion');
    elem.checkType = document.getElementsByClassName('radioBox');

    if(getJ.questions[i].type === 'single-select'){

      elem.checkBoxes = document.getElementsByName('radioOptions');
      elem.checkBoxesChecked = "";

      for (let z = 0; z<elem.checkBoxes.length; z++){
        if(elem.checkBoxes[z].checked){
          elem.checkBoxesChecked += elem.checkBoxes[z].value + "";
        }
          elem.checkBoxes[z].checked = false;
      }
      elem.qAnswer = elem.checkBoxesChecked;
  }

  elem.checkType = document.getElementsByClassName('checkbox');

  if(getJ.questions[i].type === 'multi-select'){

    elem.checkBoxes = document.getElementsByName('checkOptions');
    elem.checkBoxesChecked = "";

    for (let z = 0; z<elem.checkBoxes.length; z++){
      if(elem.checkBoxes[z].checked){
        elem.checkBoxesChecked += elem.checkBoxes[z].value + ", ";
      }
        elem.checkBoxes[z].checked = false;
    }
    elem.qAnswer = elem.checkBoxesChecked;
}


    let answer = {
      id: questionId,
      text: questionTitle,
      response: elem.qAnswer
    };

    console.log(answer);
    data.answers.push(answer);
}



    const submit_response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const returned = await submit_response.json();
    if (returned.success === true) {
         console.log('File Saved');
     } else {
         console.log('There has been an error');
     }

  });
