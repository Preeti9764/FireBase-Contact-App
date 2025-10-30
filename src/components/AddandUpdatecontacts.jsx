import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { doc, addDoc, collection, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import Modal from './Modal.jsx'
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required")
})
const AddAndUpdateContact = ({ contact = { name: '', email: '' }, isUpdate, isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("contact added successfully")

    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("contact updated successfully")

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactValidationSchema}
          initialValues={
            isUpdate ? {
              name: contact.name,
              email: contact.email,

            } : {
              name: "",
              email: "",
            }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border px-3 py-2 rounded-md focus:border-orange-400 outline-none transition-all" placeholder="Enter contact name" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border px-3 py-2 rounded-md focus:border-orange-400 outline-none transition-all" placeholder="Enter email address" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button type="submit" className="self-end border bg-orange-400 text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-orange-500 transition-all mt-4">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;