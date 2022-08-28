// contains utility functions
// Uses function's in utility.js

import {ValidateCredential} from "../utilities/utility"

// All components use only these set of functions 

//Encrypts the credentials and return's it
export function EncryptyCredentials(username,password){
    console.log("Encrypt Credentials - Not yet implmented");
    return `${username} ${password}`;
}

export function CheckCredentialsValidity(username,password,isStudent){
   return  ValidateCredential(username,password,isStudent)
}

// sends the log of validation
export function UserNameValidator(_username){
    return "validator succesful";
}

export function PasswordValidator(_password){
    return "validator succesful";
}