import { LightningElement } from 'lwc';

export default class EventHierarchy extends LightningElement {

    selectedItems = 0;
    totalItems =0;

    processdata(event)
    {
        console.log('data is received');
        this.selectedItems = event.detail.selected;
        this.totalItems = event.detail.total;
    }

    resetdata()
    {
        this.template.querySelector('c-event-parent-hierarchy').resetselected();
    }



}