

let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', async () => {

console.log('Clicked!');

const url = '../src/api/create';

  const surveyTitle = document.getElementById('survey-title-input').value;
  const data = {
    name: surveyTitle
  };

  const submit_response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });


console.log('Clicked');
});
