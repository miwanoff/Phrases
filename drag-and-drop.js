function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  //   event.dataTransfer.setData("text", "Ирис");
  event.dataTransfer.setData("text", event.target.innerHTML);
}

function drop(event) {
  event.preventDefault();
  var drop = document.getElementById("word");
  var data = event.dataTransfer.getData("text");
  drop.innerHTML += `${data} `;
}
