let submitBtn = document.getElementById('submit-button');


submitBtn.addEventListener('click', async () => {

console.log('Clicked!');

const url = '../src/api/create';

  const surveyTitle = document.getElementById('survey-title-input').value;
  const questionID = document.getElementById('qId').value;
  const questionTitle = document.getElementById('qTitleInput').value;
  const data = {
    name: surveyTitle,
    questions: [
      {
        id: questionID,
        text: questionTitle,
      }
    ]
  };

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
