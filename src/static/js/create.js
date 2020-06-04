'use strict';
let questionCreate = document.getElementById('createQuestions');
let addQuestionBtn = document.getElementById('addBtn');
elem.number = 0;
elem.ssNumber = 2;
elem.msNumber = 2;
addQuestionBtn.addEventListener('click', function(){

// creating the div for the individual questions created
  let questionAddCreate = document.createElement('div');
  questionAddCreate.className = 'questionAdd';
  questionAddCreate.id = elem.number;
  questionCreate.appendChild(questionAddCreate);


// putting the contents of the create question in

// making ID and Text input
  let idText = document.createElement('p');
  idText.className = 'qText';
  idText.textContent = "Enter question ID: ";

  let idInput = document.createElement('input');
  idInput.className = 'qInput';
  idInput.id = 'qId'+elem.number;

  questionAddCreate.appendChild(idText);
  questionAddCreate.appendChild(idInput);

// making question title input
  let qTitle = document.createElement('p');
  qTitle.className = 'qText';
  qTitle.textContent = "Enter question title: ";

  let qTitleInput = document.createElement('input');
  qTitleInput.className = 'qInput';
  qTitleInput.id = 'qTitleInput'+elem.number;

  questionAddCreate.appendChild(qTitle);
  questionAddCreate.appendChild(qTitleInput);

// making the question type drop down
  let qType = document.createElement('p');
  qType.className = 'qText';
  qType.textContent = 'Choose a Question Type: ';
  questionAddCreate.appendChild(qType);


  let qTypes = document.createElement('ul');
  qTypes.id = 'qTypesSelect';
  questionAddCreate.appendChild(qTypes);

  let qTypeText = document.createElement('li');
  qTypeText.className = 'chooseType';
  qTypeText.textContent = 'Text';

  let qTypeNumber = document.createElement('li');
  qTypeNumber.className = 'chooseType';
  qTypeNumber.textContent = 'Number';

  let qTypeSingleSelect = document.createElement('li');
  qTypeSingleSelect.className = 'chooseType';
  qTypeSingleSelect.textContent = 'Single-Select';

  let qTypeMultSelect = document.createElement('li');
  qTypeMultSelect.className = 'chooseType';
  qTypeMultSelect.textContent = 'Multi-Select';

  qTypes.appendChild(qTypeText);
  qTypes.appendChild(qTypeNumber);
  qTypes.appendChild(qTypeSingleSelect);
  qTypes.appendChild(qTypeMultSelect);

// making the add option in for more qOption
// making the question qOption input
  qTypeText.addEventListener('click', function TextType(){

    let qType = document.createElement('p');
    qType.textContent = "text";
    let no = elem.number -1;
    console.log(no);
    qType.id = 'Type'+no;

    questionAddCreate.appendChild(qType);

    qTypeText.removeEventListener('click', qTypeText);

});


qTypeNumber.addEventListener('click', function numberType(){

  let qType = document.createElement('p');
  qType.textContent = "number";
  let no = elem.number -1;
  console.log(no);
  qType.id = 'Type'+no;

  questionAddCreate.appendChild(qType);

  qTypeNumber.removeEventListener('click', qTypeNumber);


});


  qTypeSingleSelect.addEventListener('click', function SSType(){

    let qType = document.createElement('p');
    qType.textContent = "single-select";
    let no = elem.number -1;
    qType.id = 'Type'+no;

    questionAddCreate.appendChild(qType);

    let qSingleSelect = document.createElement('div');
    qSingleSelect.id = 'SSqOption';
    questionAddCreate.appendChild(qSingleSelect);

    let SSqOption = document.createElement('p');
    SSqOption.className = 'qOption';
    SSqOption.textContent = 'Single-Select Option';

    let singleSelectInput = document.createElement('input');
    singleSelectInput.className = 'qInput';

      for(let i = 0; i < 2; i++){

        let SSqOption = document.createElement('p');
        SSqOption.className = 'qOption';
        SSqOption.textContent = 'Single-Select Option';

        let singleSelectInput = document.createElement('input');
        singleSelectInput.className = 'qInput';
        singleSelectInput.id = 'qOp'+i;



        qSingleSelect.appendChild(SSqOption);
        qSingleSelect.appendChild(singleSelectInput);

        qTypeSingleSelect.removeEventListener('click', SSType);
      }

      let addBtn = document.createElement('i');
      addBtn.className = 'fa fa-plus-circle';
      qSingleSelect.appendChild(addBtn);

  addBtn.addEventListener('click', function(){
    let ssNo = elem.ssNumber;
    let SSqOption = document.createElement('p');
    SSqOption.className = 'qOption';
    SSqOption.textContent = 'Single-Select Option';

    let singleSelectInput = document.createElement('input');
    singleSelectInput.className = 'qInput';
    singleSelectInput.id = 'qOp'+ssNo;


    qSingleSelect.appendChild(SSqOption);
    qSingleSelect.appendChild(singleSelectInput);
    elem.ssNumber++;

    });
  });



  qTypeMultSelect.addEventListener('click', function MSType(){
    let qType = document.createElement('p');
    qType.textContent = "multi-select";
    let no = elem.number -1;
    console.log(no);
    qType.id = 'Type'+no;

    questionAddCreate.appendChild(qType);

    let qMultSelect = document.createElement('div');
    qMultSelect.id = 'MultiqOption';
    questionAddCreate.appendChild(qMultSelect);

    let MultiqOption = document.createElement('p');
    MultiqOption.className = 'qOption';
    MultiqOption.textContent = 'Multi-Select Option';

    let MultiInput = document.createElement('input');
    MultiInput.className = 'qInput';

      for(let i = 0; i < 2; i++){
        let MultiqOption = document.createElement('p');
        MultiqOption.className = 'qOption';
        MultiqOption.textContent = 'Multi-Select Option';

        let MultiInput = document.createElement('input');
        MultiInput.className = 'qInput';
        MultiInput.id = 'qOp'+i;

        qMultSelect.appendChild(MultiqOption);
        qMultSelect.appendChild(MultiInput);
      }

      let addBtn = document.createElement('i');
      addBtn.className = 'fa fa-plus-circle';
      qMultSelect.appendChild(addBtn);

  addBtn.addEventListener('click', function(){
    let msNo = elem.msNumber;
    let MultiqOption = document.createElement('p');
    MultiqOption.className = 'qOption';
    MultiqOption.textContent = 'Multi-Select Option';

    let MultiInput = document.createElement('input');
    MultiInput.className = 'qInput';
    MultiInput.id = 'qOp'+msNo;


    qMultSelect.appendChild(MultiqOption);
    qMultSelect.appendChild(MultiInput);

    elem.msNumber++;

    qTypeMultSelect.removeEventListener('click', MSType);
    });
  });
// making the add option in for more qOption
elem.number++;
});
