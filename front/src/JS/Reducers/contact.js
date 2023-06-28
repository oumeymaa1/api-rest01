//IMPORT
 import {
    FAIL_CONTACTS,
    GET_CONTACT,
    GET_CONTACTS,
     LOAD_CONTACTS
 } from "../ActionType/contact";


//intialeState
 
const initialState = {
    listContacts: [],
    errors: null,
    load: false,
    contact:{}
}

//pure function
const contactReducer = (state = initialState,{type,payload}) => {
    switch(type){
            case GET_CONTACT:
                return {
                  ...state,
                    contact:payload.contact,
                    load:false
                }
            case LOAD_CONTACTS:
                return {
                  ...state,
                    load:true,
                }
            case FAIL_CONTACTS:
                return {
                  ...state,
                    load:false,
                    errors:payload
                }
                case GET_CONTACTS:
                return {
                  ...state,
                    load:false,
                    listContacts:payload.listContacts        
                }
            default:
                return state
        }
}

export default contactReducer