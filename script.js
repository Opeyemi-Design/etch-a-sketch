//get the container and the reset button
const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");

//define the static container size
const containerSize = 800;

//start with code for the default 4 by 4 sketch pad
for (let i = 0; i < 16; i++) {
    //declare variable to add new divs
    const div = document.createElement('div');

    //add class called "boxes" to the divs
    div.classList.add('boxes');

    //set the original sizes of the divs to 200px
    div.style.height = "200px";
    div.style.width = "200px";

    //event listener to add hover effect  
    div.addEventListener('mouseenter', () => {
      div.classList.add('hovered');
    });

    //append the newly created divs to the container  
    container.appendChild(div);
  }

//add event listener to reset button to clear the default sketchpad and replace it based on the number of sides the user wants
resetButton.addEventListener("click", () => {

  //function to clear container
  clearContainer();

  //get user input and parse it into a number
  const userInput = prompt("Enter the number of sides you want between 4 and 100:");
  const parsedInput = parseInt(userInput);

  //validate user input
  if (isNaN(parsedInput) || parsedInput < 4 || parsedInput > 100) {
    //display an error message to the user using this function
    return updateContainerWithErrorMessage();
  }
  //define the number of divs/boxes that will be added to the new sketchpad
  const numberOfBoxes = parsedInput * parsedInput;

  //define the height and width of the divs/boxes in the new sketchpad using the static container size of 800px
  const divSize = containerSize / parsedInput;
  
  //loop to add new boxes/divs
  for (let i = 0; i < numberOfBoxes; i++) {
    //declare variable to add new divs
    const div = document.createElement('div');

    //add class called "boxes" to the divs
    div.classList.add('boxes');

    //use the divSize variable to determine the size of the divs
    div.style.height = divSize + "px";
    div.style.width = divSize + "px";

    //event listener to add hover effect
    div.addEventListener('mouseenter', () => {
      div.classList.add('hovered');
    });
    
    //append the newly created divs to the container
    container.appendChild(div);
  }
});

//function to clear the default container
function clearContainer() {
  container.innerHTML = "";
}

//function to show error message to the user
function updateContainerWithErrorMessage() {
    container.textContent = "Invalid input. Please enter a number between 4 and 100.";
    container.style.fontFamily = "Arial, sans-serif";
    container.style.fontSize = "40px";
  }