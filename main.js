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
  nameCountSpan.innerHTML = babyData.length;
  for (let i = 0; i < babyData.length; i++){
    document.getElementById("container").innerHTML += `<p><b> "${babyData[i].name}"</b>  (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})</p>`
  }

}

// Display Names by Gender
function searchGender() {
  prompt.toLowerCase();
  if (babyData[i].gender == prompt){
    
  }
}

// Display Names within a Range of Ranks
function searchRank() {
  console.log("Search By Rank");
}

// Display Names with Starting Letter
function searchStartingLetter() {
  console.log("Search by Starting Letter");
}

// Display Names with a Specific Length
function searchLength() {
  console.log("Search by Name Length");
}
