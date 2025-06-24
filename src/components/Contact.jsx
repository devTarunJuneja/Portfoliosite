import React from 'react';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
  FaHeadset,
} from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <section id="contact" className="bg-[#e8efff] dark:bg-gray-900 py-20 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/62c5589fc4bbccac9fe40ae7/6720b4192811f02758e707d7_6720b3dd4b8d2dd6b2260e74_id-wfh-2.png"
            alt="Get in touch illustration"
            className="h-full w-full object-contain p-6"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <div className="flex items-center space-x-2 mb-6">
            <FaHeadset className="text-2xl text-black dark:text-white" />
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Get In <span className="text-purple-700 dark:text-purple-400">Touch</span>
            </h2>
          </div>

          <form
            action="https://formspree.io/f/xrbqpboz"
            method="POST"
            className="space-y-4"
          >
            {/* Name */}
            <div className="flex items-center bg-[#e8efff] dark:bg-gray-700 rounded-md px-3 py-2 border border-gray-300 dark:border-gray-600">
              <FaUser className="text-gray-600 dark:text-gray-300 mr-2" />
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="bg-transparent text-black dark:text-white w-full focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-[#e8efff] dark:bg-gray-700 rounded-md px-3 py-2 border border-gray-300 dark:border-gray-600">
              <FaEnvelope className="text-gray-600 dark:text-gray-300 mr-2" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="bg-transparent text-black dark:text-white w-full focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center bg-[#e8efff] dark:bg-gray-700 rounded-md px-3 py-2 border border-gray-300 dark:border-gray-600">
              <FaPhone className="text-gray-600 dark:text-gray-300 mr-2" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="bg-transparent text-black dark:text-white w-full focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
            </div>

            {/* Message */}
            <div className="flex items-start bg-[#e8efff] dark:bg-gray-700 rounded-md px-3 py-2 border border-gray-300 dark:border-gray-600">
              <FaCommentDots className="text-gray-600 dark:text-gray-300 mt-2 mr-2" />
              <textarea
                name="message"
                required
                placeholder="Message"
                rows="4"
                className="bg-transparent text-black dark:text-white w-full focus:outline-none resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-md shadow-md transition inline-flex items-center"
              >
                Submit <FaPaperPlane className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
