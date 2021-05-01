let arrayOfThings = [];

function displayTodo() {
  let input = document.querySelector("#thing-todo");
  if (input.value === "") {
    console.log("empty");
  } else {
    const newLiList = document.querySelector("#list-item ");
    const newLi = document.createElement("li");
    newLi.classList.add("new-todo");
    newLiList.appendChild(newLi);
    newLi.innerHTML = `${input.value}
      <span class="del-button"><i type ="button" class="fas fa-trash-alt"></i></span>
   `;

    newArray = arrayOfThings.push(input.value);
    console.log(arrayOfThings);

    input.value = "";
  }
}
function deleteTodo() {
  console.log("run");
  const delLi = document.querySelector(".new-todo");
  delLi.parentNode.removeChild(delLi);
}
const delBut = document.querySelector(".fas fa-trash-alt");
if (delBut === null) {
  delBut.addEventListener("click", deleteTodo, false);
}
const but = document.querySelector(".b1");
but.addEventListener("click", displayTodo, false);
