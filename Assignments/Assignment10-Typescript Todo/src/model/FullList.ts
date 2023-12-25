import ListItem from "./ListItem";


interface List{
    list:ListItem[],
    load():void,
    save():void,
    clearList():void,
    addItem(itemObj:ListItem):void,
    removeItem(id:string):void,
}


export default class FullList implements List{
    
    //creating a static instance for adding new item in the list
    static instance: FullList=new FullList();       //Singleton Pattern- Only one instance

    constructor( private _list:ListItem[]=[]){}

    /**
     * Get the array of list
     */
    get list():ListItem[]{
        return this._list;
    }
    
    /**
     * Function to load the method
     */
    load(): void {
        //gets the JSON string stored in localstorage using key "myList"
        const storedList:string | null = localStorage.getItem("myList");
        
        //if local storage returns a null
        if (typeof storedList !== "string") return

        //the array in localstorage should be of object of ItemList
        //pasedList is a object representing a single item
        const parsedList:{_id:string,_item:string,_checked:boolean}[]=JSON.parse(storedList)    
            parsedList.forEach(itemObj=>{
                const newListItem =new ListItem(itemObj._id, itemObj._item,itemObj._checked);

                //using the static keyword we can access the instance to addItem()
                FullList.instance.addItem(newListItem);
            })
    }

    /**
     * Save the list to the local Storage
     */
    save():void{
        //"myList" is key and value is a JSON string -> localstorage only holds key value pair
        localStorage.setItem("myList",JSON.stringify(this._list))
    }

    /**
     * Override the current list in local storage
     */
    clearList(): void {
        this._list=[];
        this.save();
    }

    /**
     * 
     * @param itemObj Add Single ListItem
     */
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);   //Add the new item on the list
    }

    /**
     * Function to remove a item from the FullList
     * @param id
     */
    removeItem(id: string): void {
        //create a new array and overrides the current array without the argument id
        this._list =this._list.filter(item => item.id !==id)
        //overrides the current localstorage with the new list
        this.save();
    }



}