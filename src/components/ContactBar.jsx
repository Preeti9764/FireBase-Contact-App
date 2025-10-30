import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import AddAndUpdateContact from './AddandUpdatecontacts';
import { useState } from 'react';
import { toast } from 'react-toastify';



const ContactBar = ({ contact }) => {
  const [isOpen, setIsopen] = useState(false);

  const onOpen = () => {
    console.log('button is clicked')
    setIsopen(true);
  }
  const onClose = () => {
    setIsopen(false);
  }

  const deleteContacts = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("contact deleted successfully")
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="mb-5 flex bg-amber-200 rounded-2xl items-center justify-between p-4 shadow transition-transform hover:scale-[1.025] hover:shadow-lg" key={contact.id}>
        <div className="flex">
          <FaRegUserCircle className="text-orange-400 text-5xl mr-4 mt-1 ml-1" />
          <div>
            <div className="text-2xl font-semibold" >{contact.name}</div>
            <div className="text-[15px] text-gray-700">{contact.email}</div>
          </div>
        </div>
        <div className="flex">
          <button title="Edit contact" className="rounded-full bg-white border border-orange-300 text-orange-500 p-2 mx-1 shadow active:scale-95 transition hover:bg-orange-50" onClick={onOpen}>
            <RiStickyNoteAddFill className="text-2xl" />
          </button>
          <button title="Delete contact" className="rounded-full bg-white border border-orange-300 text-orange-400 p-2 mx-1 shadow active:scale-95 transition hover:bg-orange-50" onClick={() => deleteContacts(contact.id)}>
            <MdDeleteSweep className="text-2xl" />
          </button>
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