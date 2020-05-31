
let submitBtn = document.getElementById('submit-button');
document.addEventListener('click', function(){
  let surveyTitle = document.getElementById('survey-title-input').value;
  let newObject = {
    "name": surveyTitle
  };

  let JSONstring = JSON.stringify(newObject);
  const fs = require('fs');
  fs.writeFile('../JSON/thing.json', JSONstring, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
  });

  console.log(JSONstring);
});
