const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1:

// Create an object called cat.

// Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".

const cat = {
  complain: function sayMeow() {
    console.log("Meow");
  },
};
cat.complain();

// Question 2:

// Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.

// Change its innerHTML value to "Updated heading".

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3:

// Use the style property on the heading variable from the question above to change its font size to "2em".
heading.style.fontSize = "2em";

// Question 4:

// Add a class to the heading variable called subheading.

heading.classList.add("subheading");

// Question 5:

// Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.

// Loop through the p elements and change the colour of each to "red".

const allPara = document.querySelectorAll("p");

for (let i = 0; i < allPara.length; i++) {
  allPara[i].style.color = "red";
}

// Question 6:

// Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7:

// Create a function that has one parameter called list.

// Inside the function, loop through the list parameter and console log the name property in each object.

// Call the function and pass in the cats variable in the script.js file in the repo.

function listfunc(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

listfunc(cats);
