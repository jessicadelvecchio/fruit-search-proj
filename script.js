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
  // console.log(results);
  return results;
}

// * Function to handle input event
function searchHandler(e) {
  const inputVal = e.target.value;
  let results = search(inputVal);
  showSuggestions(results, inputVal);
}

// * Function to show search list and highlight items on hover
function showSuggestions(results, inputVal) {
  suggestionsList.innerHTML = "";

  if (results) {
    for (fruit of results) {
      let listItem = document.createElement("li");

      listItem.innerText = fruit;
      suggestionsList.appendChild(listItem);

      listItem.addEventListener("mouseover", () => {
        listItem.classList.add("item-on-hover");
      });

      listItem.addEventListener("mouseout", () => {
        listItem.classList.remove("item-on-hover");
      });
    }
    suggestionsList.classList.add("has-suggestion");
  }
}

// * Function to populate the search box with a user’s selected suggestion *****
function useSuggestion(e) {
  const clickedItemValue = e.target.innerText;
  console.log(clickedItemValue);
  input.value = clickedItemValue;
}

// * Eventlisteners
input.addEventListener("keyup", searchHandler);
suggestionsList.addEventListener("click", useSuggestion);
