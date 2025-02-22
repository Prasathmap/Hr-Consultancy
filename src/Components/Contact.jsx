import React, { useState } from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Contact() {
  const [form, setForm] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-20">
      {/* WhatsApp Button */}
      <button
        onClick={() => setForm((prev) => !prev)}
        aria-label="Contact via WhatsApp"
        className="cursor-pointer"
      >
        <FaWhatsappSquare className="sm:h-14 h-12 w-12 text-green-600 rounded-lg shadow-lg" />
      </button>

      {/* Overlay & Form */}
      {form && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
          <div className="bg-white rounded-lg sm:p-10 p-6 max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setForm(false)}
              aria-label="Close form"
              className="absolute top-4 right-4"
              type="button"
            >
              <RxCross2 size={25} />
            </button>

            <p className="text-3xl font-semibold mb-6 text-center">
              Want to discuss your project?
            </p>

            {/* Form Inputs */}
            <div className="space-y-4">
              <input
                className="w-full h-12 border-b outline-none"
                type="text"
                placeholder="Your Name *"
                autoFocus
              />
              <input
                className="w-full h-12 border-b outline-none"
                type="email"
                placeholder="Your Email *"
              />
              <input
                className="w-full h-12 border-b outline-none"
                type="text"
                placeholder="Phone Number *"
              />
              <input
                className="w-full h-12 border-b outline-none"
                type="text"
                placeholder="Looking For *"
              />
              <input
                className="w-full h-12 border-b outline-none"
                type="text"
                placeholder="Skype ID / WhatsApp No"
              />
              <textarea
                className="w-full h-20 border-b outline-none resize-none"
                placeholder="Your Message"
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-red-700 text-white h-10 rounded-md w-1/2 font-bold">
                Enquiry Now
              </button>

              <a
                href="https://api.whatsapp.com/send/?phone=9566867957&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white h-10 rounded-md w-1/2 font-bold flex justify-center items-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
