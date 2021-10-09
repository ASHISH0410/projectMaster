import { LightningElement, api } from 'lwc';

export default class EventChildHierarchy extends LightningElement {

    @api childrenDetails;

    handleClick(event)
    {
        event.preventDefault();
        console.log(event.target.value);
     
        const selectedEvent = new CustomEvent("processchildselection", {
            detail:event.target.value
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent);
    }

}