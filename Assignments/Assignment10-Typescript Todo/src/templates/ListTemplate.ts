import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  // render(fullList:FullList):void,
  render(fullList: FullList, searchKeyword?: string): void; // Add searchKeyword parameter
}

export default class ListTemplate implements DOMList {
  //because we didnot pass it as parameter
  ul: HTMLUListElement;

  //making the class singleton -> Only has one instance
  static instance: ListTemplate = new ListTemplate();

  /**
   * Makes a constructor private to ensure that the class cannot be instantiated from outside the class itself.
   * FullList class is singleton ( only one instance of the class is supposed to exist).
   */
  private constructor() {
    this.ul = document.getElementById("list-item") as HTMLUListElement;
  }

  /**
   * Clear the list on DOM
   */
  clear(): void {
    this.ul.innerHTML = "";
  }

  /**
   * FullList class is singleton ( only one instance of the class is supposed to exist).
   * @param fullList
   * @param searchKeyword //for the search functionality
   */
  render(fullList: FullList, searchKeyword?: string,showCompleted?: boolean, showRemaining?: boolean): void {
    //clears the list for not having the problem of duplication
    this.clear();

    //Added for the searching
    let filteredList = searchKeyword
      ? fullList.list.filter((item) =>
          item.item.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      : fullList.list;
    //End search the inputted value


    //For Showing the List Accoding to btn clicked Either Show Checked else Unchecked or all
    if (showCompleted) {
        filteredList = filteredList.filter((item) => item.checked);
      } else if (showRemaining) {
        filteredList = filteredList.filter((item) => !item.checked);
      }

    //redering the all the items in the list - obtained through get()
    // fullList.list.forEach(item => {
    filteredList.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className =
        "list-group-item d-flex align-items-center justify-content-between gap-1";

      //For the checkbox in each item
      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = item.id; //obtained through getter in ListItem
      check.checked = item.checked; //obtained through getter in ListItem
      li.append(check);

      //toggle the checked box
      check.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save(); //save to local storage
      });

      //add label to the list item
      const label = document.createElement("label") as HTMLLabelElement;
      label.className = "flex-grow-1 ml-2"; // Use flex-grow-1 to make the label take up remaining space
      label.htmlFor = item.id;
      label.textContent = item.item; //item holds the description in ListItem
      li.append(label);

      //delete button
      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "btn btn-danger";
      button.textContent = "X";
      li.append(button);

      //if clicked delete the item
      button.addEventListener("click", () => {
        fullList.removeItem(item.id); //remove the item FullList
        this.render(fullList);
      });

      //adding it the ul parent
      this.ul.append(li);
    });
  }
}
