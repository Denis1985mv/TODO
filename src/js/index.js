import { singularity } from "./eventhorizon";
import { intoInfinity } from "./intoinfinity";
import { clearButton } from "./clear";
import { buttonCenter } from "./buttinсontrolсenter";

intoInfinity();
clearButton();
buttonCenter();

function timeOne () { 
  const timeCheckOne = 1;

  let btnThree = document.getElementById("buttonTimeThree");
  btnThree.classList.remove("active");

  let btnTwo = document.getElementById("buttonTimeTwo");
  btnTwo.classList.remove("active");

  let btnOne = document.getElementById("buttonTimeOne");
  btnOne.classList.remove("activeDell");
  btnOne.classList.add("active");

  let i = 0;
      while (i < 100) {
      let elem = document.querySelector("#dell");
      if(elem != null){
      elem.remove();
      }
    ++i
    }

  singularity(timeCheckOne);

}

function timeTwo () { 
    const timeCheckOne = 2;

    let btn2 = document.getElementById("buttonTimeOne");
    btn2.classList.add("activeDell");

    let btn3 = document.getElementById("buttonTimeThree");
    btn3.classList.remove("active");

    let btn = document.getElementById("buttonTimeTwo");
    btn.classList.remove("activeDell");
    btn.classList.add("active");

    let i = 0;
    while (i < 100) {
    let elem = document.querySelector("#dell");
    if(elem != null){
    elem.remove();
    }
    ++i
  }
  
  singularity(timeCheckOne);
}

function timeThree () { 
  const timeCheckOne = 3;

  let btn2 = document.getElementById("buttonTimeOne");
  btn2.classList.add("activeDell");

  let btn = document.getElementById("buttonTimeTwo");
  btn.classList.add("activeDell");

  let btn3 = document.getElementById("buttonTimeThree");
  btn3.classList.remove("activeDell");
  btn3.classList.add("active");


  let i = 0;
  while (i < 100) {
  let elem = document.querySelector("#dell");
  if(elem != null){
  elem.remove();
  }
  ++i
  }
  singularity(timeCheckOne);
}

timeOne();


buttonTimeOne.addEventListener("click", timeOne);
buttonTimeTwo.addEventListener("click", timeTwo);
buttonTimeThree.addEventListener("click", timeThree);

singularity();