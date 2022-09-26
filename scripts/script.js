const container = document.querySelector('#container');
const button = document.querySelector('#clear')

container.style.length = '960px';
container.style.width = '960px';
container.style.display ='grid';

//(`repeat(${rowtot}, 1fr)`);

container.style.gridTemplateColumns = (`repeat(64, 1fr))`);

let column = 1;
let row = 1;

for (let i = 1; i <= 4096; i++) {
  const square = document.createElement('div');
  //square.textContent = i;
  //square.style.border = '1px solid black';
  square.style.aspectRatio = '1'
  square.style.gridRow = row;
  square.style.gridColumn = column;
  column +=1;
  if (column === 65){
    row += 1;
    column = 1;
  }
  container.appendChild(square);
}

isClicked = false;
container.addEventListener("mousedown", () =>{
  isClicked = true;
})

container.addEventListener("mouseup", () =>{
  isClicked = false;
})

container.addEventListener("mousemove", function (e) {
  if (isClicked == true){
    e.target.classList.add('hovered');
  //e.target.style.background = 'blue'
  //console.log(e.target)
  };
});

let allDivs = container.querySelectorAll(":scope > div");

button.addEventListener('click', () => {
  console.log('clicked button')
  allDivs.forEach((item) => item.classList.remove('hovered'))
});