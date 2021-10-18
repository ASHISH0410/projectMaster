public without sharing class WireAdpaterController {
  
@Auraenabled(cacheable=true)
public static List<Case> getCaseRecords(String subjectName){
    try {
        String key = '%' + subjectName + '%';  
        return [Select id,subject,status,createdDate,CaseNumber from Case  where subject like:key];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}

@Auraenabled(cacheable=true)
public static List<Case> getRelatedCaseRecords(String  accId){
    try {
        return [Select id,subject,status,createdDate,CaseNumber from Case  where accountId =:accId];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}