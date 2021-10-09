import { LightningElement,track,api} from 'lwc';

export default class EventParentHierarchy extends LightningElement {

    @track 
    childrenDetails =[
         {
          name:"Child One",
          id: 0,
          selected : false
         },
         {
            name:"Child Two",
            id: 1,
            selected : true
        },
        {
            name:"Child Three",
            id: 2,
            selected : false
        },
        {
            name:"Child Four",
            id: 3,
            selected : true
        }
];

info ={};

@api
resetselected()
{
    console.log('called from grand parent');
    try{
     var newarray = this.childrenDetails.filter((obj) => obj.selected === true);
     console.log(newarray);
     console.log('hey');
     newarray.forEach(function (arrayItem) {
        arrayItem.selected = false;
    });
    this.notifyparent();
}
catch(error)
{
    console.log('here'+error);
}

}

connectedCallback()
{
    console.log("call from connected callback");
    this.notifyparent();
}

changeData(event)
{
// Retrieve item and assign ref to updatedItem
console.log(event.detail);

console.log(this.childrenDetails);


let updatedChildItem = this.childrenDetails.find((element) => { return element.id ===  event.detail });
console.log(updatedChildItem);
updatedChildItem.selected = !(updatedChildItem.selected);
console.log(this.childrenDetails);
//Find index of specific object using findIndex method.    
//objIndex = this.childrenDetails.findIndex((obj => obj.id == 1));

//Log object to Console.
//console.log("Before update: ", objIndex);

this.notifyparent();

}

notifyparent()
{
    const selecteditems = this.childrenDetails.filter((obj) => obj.selected === true).length;
    const totalsize = this.childrenDetails.length;
    this.info = { total:totalsize,selected:selecteditems};
 
    const selectedEvent = new CustomEvent("callfromparent", {
        detail: this.info
      });
  
      // Dispatches the event.
      this.dispatchEvent(selectedEvent);

}


}