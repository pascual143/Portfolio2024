/* eslint-disable no-lone-blocks */
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 contactForm_div">
        <div className="flex items-center justify-center">
          <h1 className="text-9xl contact_letters_c">C</h1>
          <h1 className="font-sans font-serif contact_letters">ontact</h1>
        </div>
        <div className="grid row-span-1 flex items-center justify-end my-2">
          <div className="grid grid-cols-2 flex flex-wrap	items-center justify-around my-2">
            <h2 className="grid grid-cols-2 flex items-center justify-center">
            <a href="https://www.linkedin.com/in/pascual-vila-web-developer/">
              <svg
                className="h-8 w-8 text-red-500 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                <rect x="2" y="9" width="4" height="12" />{" "}
                <circle cx="4" cy="4" r="2" />
              </svg></a>
              <a href="https://www.linkedin.com/in/pascual-vila-web-developer/">LinkedIn</a>
            </h2>
          </div>
          <div className="grid grid-cols-2 flex flex-wrap	items-center justify-around my-2">
            <h2 className="grid grid-cols-2 flex items-center justify-center">
            <a href="https://github.com/pascual143">
              <svg
                class="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg></a>
              <a href="https://github.com/pascual143">github</a>              
            </h2>
          </div>
          <div className="grid grid-cols-2 flex flex-wrap	items-center justify-around my-2">
            <h2 className="grid grid-cols-2 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Insta
            </h2>
            <h3>@pascualvilas</h3>
          </div>
          <div className="grid grid-cols-2 flex flex-wrap	items-center justify-around my-2">
            <h2 className="grid grid-cols-2 flex items-center justify-center">
              <svg
                class="h-8 w-8 text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="3 9 12 15 21 9 12 3 3 9" />{" "}
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />{" "}
                <line x1="3" y1="19" x2="9" y2="13" />{" "}
                <line x1="15" y1="13" x2="21" y2="19" />
              </svg>{" "}
              Email 
            </h2><h3>pascual.vila.segura@gmail.com</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

{
  /* <div className="mx-3 w-full max-w-[550px]"> */
}

{
  /* <form action="pascual.vila.segura@gmail.com" method="POST">
<div className="mb-1 my-12">
  <label
    for="name"
    className="mb-1 block text-base font-medium text-[#07074D]"
  >
    Full Name
  </label>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Full Name"
    className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
  />
</div>
<div className="mb-1">
  <label
    for="email"
    className="mb-1 block text-base font-medium text-[#07074D]"
  >
    Email Address
  </label>
  <input
    type="email"
    name="email"
    id="email"
    placeholder="example@domain.com"
    className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
  />
</div>
<div className="mb-1">
  <label
    for="subject"
    className="mb-1 block text-base font-medium text-[#07074D]"
  >
    Subject
  </label>
  <input
    type="text"
    name="subject"
    id="subject"
    placeholder="Enter your subject"
    className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
  />
</div>
<div className="mb-1">
  <label
    for="message"
    className="mb-1 block text-base font-medium text-[#07074D]"
  >
    Message
  </label>
  <textarea
    rows="4"
    name="message"
    id="message"
    placeholder="Type your message"
    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
  ></textarea>
</div>
<div>
  <button
    className="hover:shadow-form rounded-md bg-[#6A64F1] py-1 px-4 text-base font-semibold text-white outline-none"
  >
    Submit
  </button>
</div>
</form> */
}
// </div>
