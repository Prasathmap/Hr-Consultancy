import React, { useState } from "react";

function Contact() {
  return (
    <div className="fixed bottom-10 right-10 z-20">
      {/* WhatsApp Button */}
      <button
        aria-label="Contact via WhatsApp"
        className="cursor-pointer"
      >
        <a href="https://api.whatsapp.com/send/?phone=8825577277&text&type=phone_number&app_absent=0"
        >
        <img src="/whatsapp-new.webp" className="sm:h-14 h-12 w-12 text-green-600 "/></a>
      </button>

    </div>
  );
}

export default Contact;
