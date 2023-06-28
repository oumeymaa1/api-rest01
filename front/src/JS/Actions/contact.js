import axios from "axios";
import { FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS } from "../ActionType/contact"

// GET ALL CONTACTS
export const getContacts = () => async (dispatch) => {
    dispatch ({type: LOAD_CONTACTS});
    try {
        let result = await axios.get('/api/contact/all')
        dispatch ({type: GET_CONTACTS, payload:result.data});
    } catch (error) {
        dispatch({type:FAIL_CONTACTS, payload: error.reponse});
    }
}
//ADD CONTACT
export const addContact =(newContact ) =>async (dispatch) =>{
    try {
        await axios.post("/api/contact/add", newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload: error.response});
    }
};
//DELETE
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contact/delete/${id}`);
        dispatch(getContacts());
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload: error.response});
    }
};
//EDIT
export const editContact =  (id, newContact) => async (dispatch) =>{
    try {
        await axios.put(`/api/contact/edit/${id}`, newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload: error.response});
    }
};
//GET ONE CONTACT

export const getContact = (id) => async (dispatch) => {
    try {
        let result = await axios.get(`/api/contact/${id}`);
        dispatch({type: GET_CONTACTS, payload:result.data});
    } catch (error) {
        dispatch({type:FAIL_CONTACTS, payload: error.response});
    }
};

