import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import {doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import AddAndUpdateContact from './AddandUpdatecontacts';
import { useState } from 'react';
import { toast } from 'react-toastify';



const ContactBar = ({contact}) => {
    const [isOpen,setIsopen]=useState(false);
    
    const onOpen=()=>{
      console.log('button is clicked')
      setIsopen(true);
    }
    const onClose=()=>{
      setIsopen(false);
    }
  
  const deleteContacts=async (id) => {
  try{
    await deleteDoc(doc(db,"contacts",id));
    toast.success("contact deleted successfully")
  }
  catch(error){
    console.log(error);
  }  
}
  return (
    <>
    <div className="mb-5 flex bg-amber-200 rounded-2xl items-center justify-between p-2"key={contact.id}>
             <div className="flex">
             <FaRegUserCircle className="text-orange-400 text-4xl mr-4 mt-2 ml-1.5" />
             <div>
         <div className="text-2xl" >{contact.name}</div>
         <div className="text-[18px]">{contact.email}</div>
         </div>
        </div>
        <div className="flex">
        <RiStickyNoteAddFill className="text-4xl"  onClick={onOpen} />
         <MdDeleteSweep  onClick= {()=>deleteContacts(contact.id)} className="text-4xl text-orange-400"/>
         </div> 
         </div>
               <AddAndUpdateContact
               contact={contact}
               isUpdate
               isOpen={isOpen}
               onClose={onClose}
             />
             </>
  );
};

export default ContactBar;