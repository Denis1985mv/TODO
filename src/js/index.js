// import {  } from "./obj";

const bottanOne = document.querySelector("#bottanOne");
const bottanSectionOne = document.querySelector("#bottanSectionOne");

bottanOne.addEventListener("click", function () {
document.location.href = './pagenote.html';
return valHTMLOne;
});

for (let i = 0, length = localStorage.length; i < length; i++) {

  const key = localStorage.key(i);
  let value = {};
  value = localStorage[key];

  var obj = JSON.parse(value);
 
  console.log(obj,  "объект");
  console.log(obj.text,  "Имя");
  console.log(obj.priority,  "Число");
  console.log(obj.energyCosts,  "energy");
  console.log(obj.timeCosts,  "energy");
  console.log(typeof(obj),"здесь");
  let name = obj.text;
  let priority = obj.priority;
  let energy = obj.energyCosts;
  let timeCosts = obj.timeCosts;
  document.write(`Название задачи ${name}, приоритет ${priority}, важность ${energy}, период ${timeCosts} `, "<br>");

  let nameColor;
  if(priority === 1){
    nameColor = "blockBorderColorThree";
  }else if(priority === 2){
    nameColor = "blockBorderColorTwo";
  }else if(priority === 3){
    nameColor = "blockBorderColorOne";
  }

  let zipper = "zipper";
  let zipperTwo = "zipper";
  let zipperThree = "zipper";
  let flashUrl="./svg/flash.svg";

  if(energy === 1){
    flashUrl="./svg/flashactiv.svg";
    zipper = "zipperActiv";
  }else if(energy === 2){
    flashUrl="./svg/flashactiv.svg";
    zipper = "zipperActiv";
    zipperTwo = "zipperActiv";
  }else if(energy === 3){
    flashUrl="./svg/flashactiv.svg";
    zipper = "zipperActiv";
    zipperTwo = "zipperActiv";
    zipperThree = "zipperActiv";
  }
  
  const mainHTML = `
                  <div  class="block blockTop"> 
                  <div class="${nameColor}">
                      <p class="blockText">${name}</p>
                      <img class="${zipper} leftZipper" src=${flashUrl} alt="flash.svg.pic">
                      <img class="${zipperTwo} mainZipper" src="${flashUrl}" alt="flash.svg.pic">
                      <img class="${zipperThree} mainZipper" src="${flashUrl}" alt="flash.svg.pic">
                  </div>
                  </div>
                  `;

  console.log(mainHTML);

  const textMainGo = document.querySelector("#textMainGo");
  textMainGo.insertAdjacentHTML("afterend", mainHTML);
}

const bottonClear = document.querySelector("#bottanClear");

bottonClear.addEventListener("click", function () {
  localStorage.clear()
});

