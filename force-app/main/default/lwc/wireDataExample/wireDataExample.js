import { LightningElement,wire } from 'lwc';
import getCaseRecords from '@salesforce/apex/WireAdpaterController.getCaseRecords';


export default class WireDataExample extends LightningElement {

    columns = [
        { label: 'Case Number', fieldName: 'CaseNumber',type: 'url' },
        { label: 'Subject', fieldName: 'Subject', type: 'text' },
        { label: 'Status', fieldName: 'Status', type: 'text' },
        { label: 'CreatedDate', fieldName: 'CreatedDate', type: 'date' },
    ];
    
    cases;
    error;
    subject ='Media';

    @wire(getCaseRecords,{subjectName:'$subject'})
    wiredCases({ error, data }) {
        if (data) {
            this.cases = data;
            this.error = undefined;
        } else if (error) {
            console.log(error);
            this.error = error;
            this.cases = undefined;
        }
    }

    searchCase(event){        
        this.subject = event.target.value;        
    }
 



}