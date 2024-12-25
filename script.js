const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Write Something to add as task");
    console.log("Nothing Written");
  } else {
    let li = document.createElement("li");
    li.innerHtml = inputBox.value;
    listContainer.appendChild(li);
      console.log("The Task added is", li);
      let span
  }
  inputBox.value = "";
}
