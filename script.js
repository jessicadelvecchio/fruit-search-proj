const input = document.querySelector("#fruit");
const suggestionsList = document.querySelector(".suggestions ul");

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

// * Function to filter fruits based on input, creates arr of results
function search(inputVal) {
  let results = [];
  fruits.forEach((fruit) => {
    if (fruit.toLowerCase().includes(inputVal.toLowerCase())) {
      results.push(fruit);
    }
  });
  return results;
}

// * Function to handle input event
function searchHandler(e) {
  const inputVal = e.target.value;
  let results = search(inputVal);
  clearList();
  showSuggestions(results, inputVal);
}

// * Function to show search list / if inputVal is deleted, remove list
function showSuggestions(results, inputVal) {
  suggestionsList.classList.add("has-suggestions");

  if (inputVal === "") {
    clearList();
  } else {
    for (let fruit of results) {
      let listItem = document.createElement("li");
      listItem.innerText = fruit;
      suggestionsList.appendChild(listItem);
    }
  }
}

// * Function to populate the search box with a user’s selected suggestion *****
function useSuggestion(e) {
  const selectedFruit = e.target.innerText;
  input.value = selectedFruit;
  input.focus();
  clearList();
}

// * Function to clear search list and remove has-suggestions class
const clearList = () => {
  suggestionsList.classList.remove("has-suggestions");
  suggestionsList.innerText = "";
};

// * Eventlisteners
input.addEventListener("keyup", searchHandler);
suggestionsList.addEventListener("click", useSuggestion);
