const newTodo = {
  arrayOfThings: [],

  getToDo: function () {
    let input = document.querySelector("#thing-todo");
    newArray = this.arrayOfThings.push(input.value);
    console.log(newArray);
  },

  displayTodo: function () {
    console.log(this.arrayOfThings);
  },

  deleteTodo: function () {
    this.arrayOfThings.pop();
    console.log(this.arrayOfThings);
  },
};
