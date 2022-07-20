// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  // Confirm data load
  document.getElementById("container").innerHTML = "";
  nameCountSpan.innerHTML = "";
  nameCountSpan.innerHTML = babyData.length;
  for (let i = 0; i < babyData.length; i++){
    document.getElementById("container").innerHTML += `<p><b> "${babyData[i].name}"</b>  (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})</p>`;
  }
}

// Display Names by Gender
function searchGender() {
  document.getElementById("container").innerHTML = "";
  nameCountSpan.innerHTML = "";
  let response = prompt("Please search gender");
  let count = 0;
    for (let i = 0; i < babyData.length; i++){
      if (response.toLocaleLowerCase() === babyData[i].gender.toLowerCase()){
        document.getElementById("container").innerHTML += `<p><b> "${babyData[i].name}"</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})</p>`;
        count++;
    }
  }
  nameCountSpan.innerHTML = count;
}

// Display Names within a Range of Ranks
function searchRank() {
  document.getElementById("container").innerHTML = "";
  nameCountSpan.innerHTML = "";
  let count = 0;
  let min = prompt("Please enter min value");
  let max = prompt("Please enter max value");
  for (let i = 0; i < babyData.length; i++){
    if (min <= babyData[i].rank && max >= babyData[i].rank){
      document.getElementById("container").innerHTML += `<p><b> "${babyData[i].name}"</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})</p>`;
        count++;
    }
  }
  nameCountSpan.innerHTML = count;
}

// Display Names with Starting Letter
function searchStartingLetter() {
  document.getElementById("container").innerHTML = "";
  nameCountSpan.innerHTML = "";
  let count = 0;
  let letter = prompt("Please search names by their first letter");
  for (let i = 0; i < babyData.length; i++){
    if (letter.toLocaleLowerCase() === babyData[i].name[0].toLowerCase()){
      document.getElementById("container").innerHTML += `<p><b> "${babyData[i].name}"</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})</p>`;
        count++;
    }
  }
  nameCountSpan.innerHTML = count;
}

// Display Names with a Specific Length
function searchLength() {
  document.getElementById("container").innerHTML = "";
  nameCountSpan.innerHTML = "";
  let count = 0;
  let lengthName = prompt("Please enter a number to show names with that length");
  for (let i = 0; i < babyData.length; i++){
    if (lengthName == babyData[i].name.length){
      document.getElementById("container").innerHTML += `<p><b> "${babyData[i].name}"</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})</p>`;
        count++;
     }
  }
  nameCountSpan.innerHTML = count;
}
