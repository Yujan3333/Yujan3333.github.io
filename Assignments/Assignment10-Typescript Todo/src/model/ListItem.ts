
//Item Object must have the properties defined here
export interface Item{
    id:string,
    item:string,
    checked:boolean,
}


export default class ListItem implements Item{
    /**
     * 
     * @param _id item id
     * @param _item item desc
     * @param checked status
     * 
     */
    constructor(
        private _id:string ='',
        private _item:string ='',
        private _checked:boolean = false,
    ){}

    //getter for id
    get id():string{
        return this._id;
    }

    //setter for id
    set id(id:string){
        this._id = id;
    }

    //getter for id
    get item():string{
        return this._item;
    }

    //setter for id
    set item(item:string){
        this._item = item;
    }

    //getter for id
    get checked():boolean{
        return this._checked;
    }

    //setter for id
    set checked(checked:boolean){
        this._checked = checked;
    }

}