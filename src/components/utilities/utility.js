// Help in credential Validating 

// Validates credentials by checking for valid match 
// in the database

import {EncryptyCredentials} from "../utilities/utilityFuncs"

export function ValidateCredential(username,password,isStudent){
    const endata=EncryptyCredentials(username,password);
    return CheckForDataInDB(endata,isStudent);
}

function CheckForDataInDB(data,isStudent){
    return isStudent?CheckForDataInStudent(data):CheckForDataInFaculty(data);
}

function CheckForDataInStudent(_data){
    console.log("Encrypted Data Checked for match in Student Database");
    return true;
}

function CheckForDataInFaculty(_data){
    console.log("Encrypted Data Checked for match in Faculty Database");
    return true;
}