import React, { useState } from 'react'
import { useContact } from '../ContactContex'

function List() {
    const [filterText , setFilterText] = useState('');
    const {contact , setContact} = useContact();
    const [call , setCall] = useState(false)
    const handleSubmit =(e)=>{ 
        e.preventDefault();
        console.log(filterText);
        setFilterText('')
    }
    const filtered = contact.filter((item)=>{
        return Object.keys(item).some((key)=>{
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        }) 
    })
    const handleCall = ()=>{
      setCall(!call)
    }
  return (
    <div className='filter-list'>
        <h1>My-Contacts</h1>
        <form onSubmit={handleSubmit}>
            <input className='listinp' placeholder='Filter Contacts' value={filterText} onChange={(e)=>{setFilterText(e.target.value)}}/>
        </form>
        {!call ? <ul>
            {filtered.map((filterArr , i )=>{
                return <li key={i}> {filterArr.fullName}  <button className='Call' onClick={handleCall}>Call</button> <hr /> </li>
            })}
        </ul> : <h1>Creating a call.. <button className='Endcall' onClick={handleCall}>End Call</button></h1>}
    </div>
  )
}

export default List
