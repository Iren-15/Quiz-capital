const answers = document.querySelectorAll(".answer");
const btn = document.querySelector("#btn");
const btnRepeat = document.querySelector("#btnRepeat");
const btnAnswer = document.querySelector("#btnAnswer");
const rez = document.querySelector(".result");
const rezTxt = document.querySelector(".resultTxt");
const lbl = document.querySelectorAll("#answerLbl");

btn.addEventListener("click", count);

function count(e) {
  e.preventDefault();
  i = 0;
  answers.forEach(function (item) {
    if (item.checked === true) {
      i++;
    }
  });
  rez.textContent = i;
  gsap.to(".question", { x: 200, opacity: 0, duration: 0.7 });
  setTimeout(visibleChange, 700);
  function visibleChange() {
    rez.classList.toggle("invisible");
    rezTxt.classList.toggle("invisible");
    document.querySelector("form").classList.add("invisible");
    btnRepeat.classList.toggle("invisible");
    btnAnswer.classList.toggle("invisible");
    btn.classList.add("invisible");
  }
}

btnRepeat.addEventListener("click", repeatTest);

function repeatTest() {
  gsap.to(".question", { x: 0, opacity: 1, duration: 0.7 });

  btn.classList.toggle("invisible");
  btnRepeat.classList.toggle("invisible");
  btnAnswer.classList.toggle("invisible");
  rez.classList.toggle("invisible");
  rezTxt.classList.toggle("invisible");
  document.querySelector("form").classList.toggle("invisible");
  const input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked === true) {
      input[i].checked = false;
    }
  }
}

btnAnswer.addEventListener("click", answerTest);

function answerTest() {
  gsap.to(".question", { x: 0, opacity: 1 });
  btnRepeat.classList.toggle("invisible");
  btnAnswer.classList.toggle("invisible");
  btnBack.classList.toggle("invisible");
  rez.classList.toggle("invisible");
  rezTxt.classList.toggle("invisible");
  document.querySelector("form").classList.toggle("invisible");
  for (let i = 0; i < lbl.length; i++) {
    lbl[i].classList.add("answerShow");
  }
}

btnBack.addEventListener("click", backResult);

function backResult() {
  gsap.to(".question", {x:200, opacity: 0, duration: .7 });
  setTimeout(visibleChange2, 700);
  function visibleChange2() {
  rez.classList.toggle("invisible");
  rezTxt.classList.toggle("invisible");
  document.querySelector("form").classList.add("invisible");
  btnRepeat.classList.toggle("invisible");
  btnAnswer.classList.toggle("invisible");
  btnBack.classList.toggle("invisible");
  for (let i = 0; i < lbl.length; i++) {
    lbl[i].classList.remove("answerShow");
  }
  }
}
