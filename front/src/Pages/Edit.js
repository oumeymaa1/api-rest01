import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useMatch, useNavigate} from 'react-router-dom';
import {getContact, editContact} from '../JS/Actions/contact';
import {Form, Button} from 'react-bootstrap';

const Edit = () => {
const [newContact, setNewContact] = useState({});
const dispatch = useDispatch ();
const contact = useSelector(
  (state) => state.contactReducer.contact
);

const match = useMatch ("/edit/:id");
const navigate = useNavigate();

const handleChange = (e) =>{
  setNewContact ({...newContact, [e.target.name] : e.target.value});

};
useEffect(() => {
  dispatch(getContact(match.params.id));
});

const handleEdit = () =>{
  dispatch(editContact(match.params.id, newContact));
  navigate(-1)
};
  return (
    <div>
              
       <Form.Label>Name</Form.Label>
       <Form.Control 
       type= 'text'
       placeholder={`${contact.name}`} 
       value={newContact.name}
       name = 'name'
       onChange={handleChange}
       />

      <Form.Label>Email adress</Form.Label>
       <Form.Control 
       type= 'text'
       placeholder={`${contact.email}`} 
       value={newContact.email}
       name = 'email'
       onChange={handleChange}
       />

      <Form.Label>Phone</Form.Label>
       <Form.Control 
       type= 'number'
       placeholder={`${contact.phone}`} 
       value={newContact.phone}
       name = 'phone'
       onChange={handleChange}
       />
      <Button variant="primary" type="submit" onClick={handleEdit}>
        Submit
      </Button>      

    </div>
  )
}

export default Edit

