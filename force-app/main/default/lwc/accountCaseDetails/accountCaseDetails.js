import { LightningElement,api,wire } from 'lwc';
import getReatedCaseRecords from '@salesforce/apex/WireAdpaterController.getRelatedCaseRecords';
import { getRecord ,getFieldValue} from 'lightning/uiRecordApi';

import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import CREATED_FIELD from '@salesforce/schema/Account.CreatedDate';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_ID from '@salesforce/schema/Account.Id';

const fields = [REVENUE_FIELD, CREATED_FIELD, ACCOUNT_NAME, ACCOUNT_ID];

export default class AccountCaseDetails extends LightningElement {
    @api recordId;

    cases;

    @wire(getRecord, { recordId: '$recordId', fields })
    account;

    get name() {
        return getFieldValue(this.account.data, ACCOUNT_NAME);
    }

    @wire(getReatedCaseRecords,{accId:'$recordId'})
    wiredCases({ error, data }) {
        if (data) {
            console.log(this.recordId);
            this.cases = data;
            this.error = undefined;
            console.table(this.cases,[]);
        } else if (error) {
            console.log(error);
            this.error = error;
            this.cases = undefined;
        }
    }

}