import React from 'react'
import { useState } from 'react'
import { useContact } from '../ContactContex'

function Form() {
    const [form , setForm] = useState({fullName : "" , phoneNumber:""})  
    const {contact , setContact} = useContact();
    const InputChange=(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }
    const handleFormSubmit=(e)=>{
        if(form.fullName === '' || form.phoneNumber === ''){
           return false;
        };
        e.preventDefault();
        setContact([...contact , form]);
        setForm({fullName:'' , phoneNumber:''})
    }
    return (
    <div className='form'>
    <form>
        <input className='frm' name='fullName' value={form.fullName} placeholder='Full Name' onChange={InputChange}/>
        <input  className='frm' name='phoneNumber' value={form.phoneNumber} placeholder='Phone Number' onChange={InputChange}/>
        <button className='frm-btn' onClick={handleFormSubmit}>Add</button>
    </form>
      
    </div>
  )
}

export default Form
