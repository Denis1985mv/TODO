// import { Person } from "./person";


// const person = new Person;
// console.log(person.name);
// alert(person.name);
//const el = document.getElementById("bottanTwo");
//el.addEventListener("click", modifyText, false);

const bottonTwo2 = document.querySelector('#bottanTwo');
const bottanSection = document.querySelector('#bottanSection');
console.log(bottonTwo2);
bottonTwo2.addEventListener('click', function(){
  console.log("TEST");

  const valHTML = `
  <div class="block">     
  <p class="blockText">Name</p>
  <p class="blockText">Homework</p>
  </div>
  `;

  bottanSection.insertAdjacentHTML('afterend', valHTML);

})

const bottanOne = document.querySelector('#bottanOne');
const bottanSectionOne = document.querySelector('#bottanSectionOne');

bottanOne.addEventListener('click', function(){
    console.log("TEST");
  
    const valHTMLOne = `
                   <div class="bottonDawn bottonDawnPositionTop">
                        <p>todo design</p>
                    </div>
    `;
  
    bottanSectionOne.insertAdjacentHTML('afterend', valHTMLOne);
  
  })


