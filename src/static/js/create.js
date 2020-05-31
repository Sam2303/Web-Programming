'use strict';
let questionCreate = document.getElementById('createQuestions');
let addQuestionBtn = document.getElementById('addBtn');
addQuestionBtn.addEventListener('click', function(){



// creating the div for the individual questions created
  let questionAddCreate = document.createElement('div');
  questionAddCreate.id = 'questionAdd';
  questionCreate.appendChild(questionAddCreate);
// putting the contents of the create question in

// making ID and Text input
  let idText = document.createElement('p');
  idText.className = 'qText';
  idText.textContent = "Enter question ID: ";

  let idInput = document.createElement('input');
  idInput.className = 'qInput';

  questionAddCreate.appendChild(idText);
  questionAddCreate.appendChild(idInput);

// making question title input
  let qTitle = document.createElement('p');
  qTitle.className = 'qText';
  qTitle.textContent = "Enter question title: ";

  let qTitleInput = document.createElement('input');
  qTitleInput.className = 'qInput';

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
  qTypeText.addEventListener('click', function(){

    let typeTextDiv = document.createElement('div');
    typeTextDiv.id = 'textqOption';
    questionAddCreate.appendChild(typeTextDiv);

    let textqOption = document.createElement('p');
    textqOption.className = 'qOption';
    textqOption.textContent = 'Option';

    let textInput = document.createElement('input');
    textInput.className = 'qInput';

      for(let i = 1; i < 3; i++){
        let textqOption = document.createElement('p');
        textqOption.className = 'qOption';
        textqOption.textContent = 'Option';

        let textInput = document.createElement('input');
        textInput.className = 'qInput';

        typeTextDiv.appendChild(textqOption);
        typeTextDiv.appendChild(textInput);
      }

      let addBtn = document.createElement('i');
      addBtn.className = 'fa fa-plus-circle';
      typeTextDiv.appendChild(addBtn);

  addBtn.addEventListener('click', function(){
    let textqOption = document.createElement('p');
    textqOption.className = 'qOption';
    textqOption.textContent = 'Option';

    let textInput = document.createElement('input');
    textInput.className = 'qInput';


    typeTextDiv.appendChild(textqOption);
    typeTextDiv.appendChild(textInput);
      });


  });

  qTypeNumber.addEventListener('click', function(){

    let typeNumberDiv = document.createElement('div');
    typeNumberDiv.id = 'numberqOption';
    questionAddCreate.appendChild(typeNumberDiv);

    let NumberqOption = document.createElement('p');
    NumberqOption.className = 'qOption';
    NumberqOption.textContent = 'Option';

    let NumberInput = document.createElement('input');
    NumberInput.className = 'qInput';

      for(let i = 1; i < 3; i++){
        let NumberqOption = document.createElement('p');
        NumberqOption.className = 'qOption';
        NumberqOption.textContent = 'Option';

        let NumberInput = document.createElement('input');
        NumberInput.className = 'qInput';

        typeNumberDiv.appendChild(NumberqOption);
        typeNumberDiv.appendChild(NumberInput);
      }

      let addBtn = document.createElement('i');
      addBtn.className = 'fa fa-plus-circle';
      typeNumberDiv.appendChild(addBtn);

  addBtn.addEventListener('click', function(){
    let NumberqOption = document.createElement('p');
    NumberqOption.className = 'qOption';
    NumberqOption.textContent = 'Option';

    let NumberInput = document.createElement('input');
    NumberInput.className = 'qInput';


    typeNumberDiv.appendChild(NumberqOption);
    typeNumberDiv.appendChild(NumberInput);
    });
  });


  qTypeSingleSelect.addEventListener('click', function(){

    let qSingleSelect = document.createElement('div');
    qSingleSelect.id = 'SSqOption';
    questionAddCreate.appendChild(qSingleSelect);

    let SSqOption = document.createElement('p');
    SSqOption.className = 'qOption';
    SSqOption.textContent = 'Option';

    let singleSelectInput = document.createElement('input');
    singleSelectInput.className = 'qInput';

      for(let i = 1; i < 3; i++){
        let SSqOption = document.createElement('p');
        SSqOption.className = 'qOption';
        SSqOption.textContent = 'Option';

        let singleSelectInput = document.createElement('input');
        singleSelectInput.className = 'qInput';

        qSingleSelect.appendChild(SSqOption);
        qSingleSelect.appendChild(singleSelectInput);
      }

      let addBtn = document.createElement('i');
      addBtn.className = 'fa fa-plus-circle';
      qSingleSelect.appendChild(addBtn);

  addBtn.addEventListener('click', function(){
    let SSqOption = document.createElement('p');
    SSqOption.className = 'qOption';
    SSqOption.textContent = 'Option';

    let singleSelectInput = document.createElement('input');
    singleSelectInput.className = 'qInput';


    qSingleSelect.appendChild(SSqOption);
    qSingleSelect.appendChild(singleSelectInput);
    });
  });



  qTypeMultSelect.addEventListener('click', function(){

    let qMultSelect = document.createElement('div');
    qMultSelect.id = 'MultiqOption';
    questionAddCreate.appendChild(qMultSelect);

    let MultiqOption = document.createElement('p');
    MultiqOption.className = 'qOption';
    MultiqOption.textContent = 'Option';

    let MultiInput = document.createElement('input');
    MultiInput.className = 'qInput';

      for(let i = 1; i < 3; i++){
        let MultiqOption = document.createElement('p');
        MultiqOption.className = 'qOption';
        MultiqOption.textContent = 'Option';

        let MultiInput = document.createElement('input');
        MultiInput.className = 'qInput';

        qMultSelect.appendChild(MultiqOption);
        qMultSelect.appendChild(MultiInput);
      }

      let addBtn = document.createElement('i');
      addBtn.className = 'fa fa-plus-circle';
      qMultSelect.appendChild(addBtn);

  addBtn.addEventListener('click', function(){
    let MultiqOption = document.createElement('p');
    MultiqOption.className = 'qOption';
    MultiqOption.textContent = 'Option';

    let MultiInput = document.createElement('input');
    MultiInput.className = 'qInput';


    qMultSelect.appendChild(MultiqOption);
    qMultSelect.appendChild(MultiInput);
    });
  });
// making the add option in for more qOption
});
