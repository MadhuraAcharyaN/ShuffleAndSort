const btnShuffle = document.getElementById("shuffle-btn");
const btnSort = document.getElementById("sort-btn");
const boxWrapper = document.getElementById("box-wrapper");

const colorClasses = [
  "light-blue",
  "sky-color",
  "dark-blue",
  "sky-color",
  "dark-blue",
  "light",
  "light",
  "light-blue",
  "dark-blue",
];

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//remove all child div
function remove(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.lastChild);
  }
}

//create box
function createBox(currentNum) {
  const box = document.createElement("div");
  box.innerText = currentNum;
  box.classList.add("box");
  box.classList.add(colorClasses[currentNum - 1]);
  boxWrapper.appendChild(box);
}

//initial load, on sort
function sort() {
  remove(boxWrapper);

  for (let i = 1; i <= 9; i++) {
    createBox(i);
  }
}

//shuffle on cliking SHUFFLE
function shuffleBoxes() {
  nums.sort(() => Math.random() - 0.5);

  remove(boxWrapper);

  nums.forEach((num) => {
    createBox(num);
  });
}

//add event listner
btnShuffle.addEventListener("click", shuffleBoxes);
btnSort.addEventListener("click", sort);

sort();
