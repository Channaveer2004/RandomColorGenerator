

function indexpicker() {
  const array = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let num = Math.floor(Math.random() * array.length);
  return array[num];
}

function colorPicker(indexNum) {
  for (let i = 0; i < 6; i++) {
    indexNum += indexpicker();
  }
  return indexNum;
}


function onClick(){
  for (let i = 1; i < 25; i++) {
    let indexNum = '#'
    let index = colorPicker(indexNum);
    document.getElementById(`b${i}`).innerHTML = index;
    document.querySelector(`.cl${i}`).style.backgroundColor = index;
  }
}

document.querySelector(".btn").addEventListener("click",onClick);
