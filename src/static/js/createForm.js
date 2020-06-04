const elem = {};

let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', async function(){

  const url = '../src/api/create'
  const surveyTitle = document.getElementById('survey-title-input').value;
  const data = {
    name: surveyTitle,
  };
  data.questions = [];


  let container_div = document.getElementById('createQuestions');
  let count = container_div.getElementsByClassName('questionAdd').length;
  console.log(count);
  for(let i=0; i<count; i++){
    console.log('Main Loop for each Question'+i);
    let questionId = document.getElementById('qId'+i).value;
    let qText = document.getElementById('qTitleInput'+i).value;
    let qType = document.getElementById('Type'+i).innerHTML;

    let question = {
      id: questionId,
      text: qText,
      type: qType,
      };
      question.options = [];
      data.questions.push(question);
      console.log(question);

      if (qType === 'single-select'){
        let container = document.getElementById('SSqOption');
        let amount = container.getElementsByTagName('input');
        let optionString = '';
        for (let z = 0; z<amount.length; z++){
          let option = document.getElementById('qOp' + z).value;
          question.options.push(option);
          console.log(option);
        }
      }

      if (qType === 'multi-select'){
        let container = document.getElementById('MultiqOption');
        let amount = container.getElementsByTagName('input');
        let optionString = '';
        for (let z = 0; z<amount.length; z++){
          let option = document.getElementById('qOp' + z).value;
          question.options.push(option);
          console.log(option);
        }
      }
    }


  const submit_response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const returned = await submit_response.json();
  if (returned.success === true) {
       console.log('it worked');
   } else {
       console.log('There has been an error');
   }

});
