import React from 'react';

const Notfoundcontact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[320px] py-16 w-full">
      <div className="relative bg-white/60 border border-orange-200/40 rounded-3xl shadow-2xl p-8 flex flex-col items-center max-w-xs backdrop-blur-lg">
        <img className="h-32 w-32 mb-4 drop-shadow-lg animate-pulse bg-gradient-to-tr from-orange-200 to-yellow-100 rounded-full" src="/images/notfoundContact.png" alt="No contacts found" />
        <p className="text-2xl font-semibold text-orange-600 bg-gradient-to-r from-orange-100 to-yellow-200 px-6 py-2 rounded-xl shadow">
          No Contacts Yet
        </p>
      </div>
    </div>
  );
};

export default Notfoundcontact;