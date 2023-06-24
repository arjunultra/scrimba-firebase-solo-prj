const userInput = document.getElementById("endorsement");
const submitBtn = document.getElementById("submit-btn");
const endorsementList = document.getElementById("endorsement-list");
let endorsementArray = [userInput.value];
console.log(endorsementArray);
submitBtn.addEventListener("click", function () {
  let valueOfInput = userInput.value;
  const liEl = document.createElement("li");
  const divEl = document.createElement("div");
  divEl.textContent = valueOfInput;
  //liEl.textContent = divEl;
  divEl.classList.add("li-div");
  endorsementList.append(liEl);
  liEl.append(divEl);
  userInput.value = "";
});
