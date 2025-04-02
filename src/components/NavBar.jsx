import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";

 
const NavBar = ({onOpen,filtercontacts}) => {
  return (
    <div>
      <div className='bg-white  flex m-1 mt-3 justify-center ml-3 mr-3 p-1.5 font-bold rounded-2xl' >
        <img src="/images/logos_firebase.svg" className='mr-2'></img>
       FireBase Contact App
      </div>
      <div className=' relative flex items-center'>
      <FaSearch 
      
      className='absolute m-4 text-white '/>
        <input 
        onChange={filtercontacts}
        type="text" className='border-1 border-white text-white bg-transparent flex-grow rounded-2xl px-7 py-2 m-2 ml-2.5' ></input>
        <button className='flex align-middle'><MdAddCircle className='text-5xl text-white cursor-pointer' onClick={onOpen}/></button>
      </div>
      </div>
  );
};

export default NavBar;