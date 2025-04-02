import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import {db} from "./config/Firebase";
import AddAndUpdateContact from "./components/AddandUpdatecontacts";
import { ToastContainer, toast } from 'react-toastify';
import ContactBar from "./components/ContactBar";
import Notfoundcontact from "./components/Notfoundcontact";


const App = () => {
  const  [contacts,setContacts] =useState([]);
  const [isOpen,setIsopen]=useState(false);
  
  const onOpen=()=>{
    console.log('button is clicked')
    setIsopen(true);
  }
  const onClose=()=>{
    setIsopen(false);
  }

  useEffect(()=>{
    const getcontacts=async ()=>{
      try{
        const contactcollection = collection(db,"contacts");
        onSnapshot(contactcollection,(snapshot)=>{
          const contactLists =snapshot.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data(),
            }
        });
        setContacts(contactLists);
        return contactLists;
        })

       }
      catch(error){
        console.log(error);
      }
    };
    getcontacts();

  } 
  ,[])
  const filtercontacts= (e)=>{
    const value=e.target.value;

      const contactcollection = collection(db,"contacts");
      onSnapshot(contactcollection,(snapshot)=>{
        const contactLists =snapshot.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data(),
          }
      });
      const filteredcontact = contactLists.filter((contact)=>contact.name.toLowerCase()
      .includes(value.toLowerCase()));

      setContacts(filteredcontact);
      return filteredcontact;
      })
   
  };
 
  return (
    <>
  <div className="max-w-[500px] mx-auto" ><NavBar onOpen={onOpen} filtercontacts={filtercontacts} ></NavBar>
  
   <div className=" flex-col mt-4 ">
    
    {contacts.length<=0?
    <Notfoundcontact/>:
    contacts.map((contact)=>(
        <ContactBar  key="contact.id" contact={contact}  ></ContactBar>
      ))}
     </div> 

      
    </div>
    
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    <ToastContainer position="bottom-center" />
  
  </>
  )
}


export default App;
