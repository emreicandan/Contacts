import React from 'react'
import { useContact } from '../ContactContex'
import List from './List';
import Form from './Form';



function Contacts() {
    const {contact , setContact} = useContact();
    return (
    <div className='App'>
    <List/>
    <Form/>
    </div>
  )
}

export default Contacts
