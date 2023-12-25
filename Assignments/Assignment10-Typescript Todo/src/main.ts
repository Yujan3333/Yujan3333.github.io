import "./css/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

//initialize all the js functionality after the HTML docs are loaded
const initApp = (): void => {
  const fullList = FullList.instance; //accessing the singleton
  const template = ListTemplate.instance; //accessing the singleton

  // Add input event listener for the SEARCH input form
  const searchInput = document.getElementById(
    "searchKeyword"
  ) as HTMLInputElement;

  searchInput.addEventListener("input", () => {
    const searchKeyword = searchInput.value.trim();
    template.render(fullList, searchKeyword);
  });
  //Search END

  const itemEntryForm = document.getElementById(
    "addTaskForm"
  ) as HTMLFormElement;

  //on form submit Adding ITEM
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    //to prevent the page from reload
    event.preventDefault();

    //taking value inputted by user in form - Get the new item value
    const input = document.getElementById(
      "taskDescription"
    ) as HTMLInputElement;
    const newEntryText: string = input.value.trim(); //removes the whitespaces
    if (!newEntryText.length) return; //returns so no adding empty items to list - default if empty string is false

    // create new item
    //if the list is empty id=1 else last item id+1
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    //ListItem(id,item_desc_boolean default:false)
    const newItem = new ListItem(itemId.toString(), newEntryText);

    //adding the item to the list
    fullList.addItem(newItem);

    // Re-render list with new item included
    template.render(fullList);

    // Clear the form input
    input.value = "";
  });


  //Render all the tasks 
  document.getElementById("allTasks")?.addEventListener("click", () => {
    template.render(fullList);
  });

  //Render the Checked Completed Tasks
  document
    .getElementById("completedTasks")
    ?.addEventListener("click", () => {
    //   const completedList = fullList.list.filter((item) => item.checked);
    //   template.render(new FullList(completedList));
    template.render(fullList, undefined, true, false);
    });

 //Render the Unchecked Remaining Tasks   
  document
    .getElementById("remainingTasks")
    ?.addEventListener("click", () => {
    //   const remainingList = fullList.list.filter((item) => !item.checked);
    //   template.render(new FullList(remainingList));
    template.render(fullList, undefined, false, true);
    });

  //clear items button

  //load the item list
  fullList.load();
  template.render(fullList);
};

//runs the initApp after the HTML document is loaded
document.addEventListener("DOMContentLoaded", initApp);
