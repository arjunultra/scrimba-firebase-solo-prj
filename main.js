// firebase code
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {
  databaseURL:
    "https://realtime-database-4c002-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementInDB = ref(database, "endorsementList");
// Webpage
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
  divEl.classList.add("li-div");
  endorsementList.append(liEl);
  liEl.append(divEl);
  userInput.value = "";
});
