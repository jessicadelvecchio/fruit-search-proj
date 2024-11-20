// input and suggestions container
const input = document.querySelector("#fruit");
const suggestionsList = document.querySelector(".suggestions ul");

// fruit list
const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// Function to filter fruits based on input, creates arr of results

function search(inputVal) {
  let results = [];
  fruits.forEach((fruit) => {
    if (fruit.toLowerCase().includes(inputVal.toLowerCase())) {
      results.push(fruit);
    }
  });
  console.log(results);
  return results;
}

// Function to handle input event
function searchHandler(e) {
  const inputVal = e.target.value;
  let results = search(inputVal);
  showSuggestions(results, inputVal);
}

// TODO ***** Highlight the suggestion below a user’s cursor *****
// Add an event listener to trigger whenever a user hovers over one of the suggestions in the drop down list. Write a function which highlights the suggestion. Attach this function to the event listener.

function showSuggestions(results, inputVal) {
  //create drop down search result list

  suggestionsList.innerHTML = "";

  for (fruit of results) {
    let listItem = document.createElement("li");
    listItem.innerText = fruit;
    suggestionsList.appendChild(listItem);
  }
}

// TODO ***** Populate the search box with a user’s selected suggestion *****
// When a user clicks on a suggestion, that string should fill the Search Bar. Add an event listener which triggers when a user clicks. Write a function useSuggestion() to populate the Search Bar with the suggestion. Add this function to the event listener.

function useSuggestion(e) {}

// an event listener for key strokes.
input.addEventListener("input", (e) => {
  // console.log("User typed:", e.target.value);
});

input.addEventListener("keyup", searchHandler);
suggestionsList.addEventListener("click", useSuggestion);
