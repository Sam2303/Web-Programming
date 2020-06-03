let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', async () => {

  console.log('clicked');
  const url = '../src/api/results';

  let container_div = document.getElementById('questions-box');
  let count = container_div.getElementsByTagName('div').length;


  const surveyTitle = document.getElementById('questionnaireTitle').innerHTML;

const data = {name : surveyTitle,};
data.answers = [];

  for (let i=0; i<count; i++){
    console.log(i);

    let questionId = i;
    let questionTitle = document.getElementById(i).innerHTML;
    let qAnswer = document.getElementById('input'+i).value;

    let answer = {
      id: questionId,
      text: questionTitle,
      response: qAnswer
    };

    let containerDiv = document.getElementById('seperateQuestion');
    let countOptions = containerDiv.getElementsByTagName('p').length;
    

    data.answers.push(answer);
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
