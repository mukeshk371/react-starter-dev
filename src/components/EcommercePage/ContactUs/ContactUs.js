import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto pt-16">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            Have a question or need support? Fill out the form below and we'll
            get back to you as soon as possible.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="border-[1px] mt-1 px-3 py-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="border-[1px] mt-1 px-3 py-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                rows={3}
                className="border-[1px] mt-1 px-3 py-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600">
            Feel free to reach out to us using the information below:
          </p>
          <div className="mt-4">
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
