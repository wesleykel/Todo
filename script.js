const newTodo = {
  arrayOfThings: [],

  displayTodo: function () {
    let input = document.querySelector("#thing-todo");

    const newLiList = document.querySelector("#list-item ");
    const newLi = document.createElement("li");
    newLi.classList.add("new-todo");
    newLiList.appendChild(newLi);
    newLi.innerHTML = `${input.value}`;
    newArray = this.arrayOfThings.push(input.value);
    console.log(this.arrayOfThings);
  },

  /*getToDo: function () {
    
    newArray = this.arrayOfThings.push(input.value);
    console.log(newArray);
  },*/

  //deleteTodo: function () {
  // this.arrayOfThings.pop();
  // console.log(this.arrayOfThings);
  // },
};
