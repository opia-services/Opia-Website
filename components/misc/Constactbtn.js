import React from "react";
import mailtoLink from 'mailto-link';

const sendEmail = () => {
  const emailOptions = {
    to: 'recipient@example.com',
    subject: 'Your subject',
    body: 'Your email body'
  };

  const link = mailtoLink(emailOptions);
  window.location.href = link;
};

const Contactbttn = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
      onClick={sendEmail} // Attach the sendEmail function to onClick event
    >
      {children}
    </button>
  );
};