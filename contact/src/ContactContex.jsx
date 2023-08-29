import React from "react";
import { useState , useContext,useEffect} from "react";

const ContactContext = React.createContext();

export const ContacProvider=({children})=>{
    const [contact , setContact] = useState([{fullName : "Emre Candan" , phoneNumber:'0554 444 44 44'},
        {fullName:"Gökhan" , phoneNumber:"0555 333 9333"},
        {fullName:'Gökçe' , phoneNumber:"0545 545 525"},{fullName:'Ahmet' , phoneNumber:"0545 545 542"},
        {fullName:'Mehmet' , phoneNumber:"0545 545 535"}, {fullName:'Erhan' , phoneNumber:"0545 545 542"}   ])
    useEffect(()=>{
        console.log(contact)
    },[contact])
    const data = {contact , setContact}
    return <ContactContext.Provider value={data} > {children} </ContactContext.Provider>
}

const useContact =()=> useContext(ContactContext);

export {useContact};