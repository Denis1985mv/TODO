
const valueGo = { text: '', priority: 0, energyCosts: 0 }

const bottonTwo = document.querySelector("#bottanTwo");
const textvelueGo = document.querySelector("#saveResult");

bottonTwo.addEventListener("click", function () {

  function backPage() {
    document.location.href = './index.html';
  };

  setTimeout(backPage, 3000);

  let text = document.querySelector("#valueInput").value;

  let e = document.getElementById("timeValue");
  let value = Number(e.value);
 
  console.log(value,"dfgdf");

  let timeCosts = 0;
  if(value === 1){
    timeCosts = 1;
  }if (value === 2) {
    timeCosts = 2;
  } 


  let energyCosts = 0;
  if(document.getElementById('energyOne').checked){
    energyCosts = 1;
  }
  if(document.getElementById('energyTwo').checked){
    energyCosts = 2;
  }
  if(document.getElementById('energyThree').checked){
    energyCosts = 3;
  }

  let color = 0;
  if(document.getElementById('valueOne').checked){
      color = 1;
  }
  if(document.getElementById('valueTwo').checked){
      color = 2;
  }
  if(document.getElementById('valueThree').checked){
      color = 3;
  }

  valueGo.text = text;
  valueGo.priority = color;
  valueGo.energyCosts = energyCosts;
  valueGo.timeCosts = timeCosts;

  localStorage = 1;
  console.log(valueGo.energyCosts,"здесь");
  localStorage.setItem(localStorage.length, JSON.stringify(valueGo));

  const taskText = valueGo.text;
  const taskPriority = valueGo.priority;

  const taskHTML = `
                    <div class="textSave">
                    <p>Данные сахранены - </p> <br>
                    <p>Сейчас Вас перенаправит на главную страницу!</p>
                    </div>
                    `;

 console.log(taskHTML);

 textvelueGo.insertAdjacentHTML("afterend", taskHTML);

});

const bottonThree = document.querySelector("#bottanThree");

bottonThree.addEventListener("click", function () {
    document.location.href = './index.html';

});