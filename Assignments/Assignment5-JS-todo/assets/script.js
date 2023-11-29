// array to store objects
let allTasks = [];

const addTaskInput = document.getElementById("addTaskInput");
const addTaskSubmit = document.getElementById("addTaskSubmit");
const listItem = document.getElementById("listItem");
const completedItem = document.getElementById("completedItem");

addTaskSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  addTask();
});

//Add new task
const addTask = () => {
  const taskText = addTaskInput.value.trim();
  if (taskText !== "") {
    const oneTask = {
      content: taskText,
      status: false,
    };

    // push the new added task to the array
    allTasks.push(oneTask);

    //func for determining list or completed list
    updateTasks();

    // clearing the text field of input
    addTaskInput.value = "";
  }
};

// function to update the task to determine whether its completed or not
const updateTasks = () => {
  //clear the current lists
  listItem.innerHTML = "";
  completedItem.innerHTML = "";

  if (allTasks.length === 0) {
    // If there are no tasks, display a "List is empty" item with different content for list and completed list
    createEmptyListItem(listItem, "No tasks to be done");
    createEmptyListItem(completedItem, "No completed tasks");
  } else {
    allTasks.forEach((oneTask, index) => {
      // For each list li
      const li = document.createElement("li");
      // 1st element is checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = oneTask.status;
      checkbox.onchange = () => toggleTaskCompletion(index);
      li.appendChild(checkbox);

      // 2nd element is span for inline
      const textSpan = document.createElement("span");
      textSpan.innerText = oneTask.content;
      li.appendChild(textSpan);

      // condition to put in completed block or add new task block
      if (oneTask.status) {
        li.classList.add(
          "completed",
          "list-group-item",
          "d-flex",
          "justify-content-start",
          "align-items-center"
        );
        completedItem.appendChild(li);
      } else {
        li.classList.add(
          "list-group-item",
          "d-flex",
          "justify-content-start",
          "align-items-center"
        );
        listItem.appendChild(li);
      }
    });
  }
};

// Function to create a "List is empty" item with custom content
const createEmptyListItem = (list, content) => {
  const li = document.createElement("li");
  li.classList.add('p-3','list-group-item', 'd-flex', 'justify-content-start', 'align-items-center');
  li.innerText = content;
  list.appendChild(li);
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
  allTasks[index].status = !allTasks[index].status;
  updateTasks();
}

// for initial phase
updateTasks();
