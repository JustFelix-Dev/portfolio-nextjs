import React from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  LinkIcon,
  MailIcon,
  MapPin,
  TwitterIcon,
} from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Message Form */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Reach Out 😄</h2>
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring-[#B87D4B] focus:ring-2"
          placeholder="Write your message..."
          rows={4}
        ></textarea>
        <button className="px-4 bg-[#B87D4B] text-[#18181b] py-2 rounded hover:bg-primary-dark transition">
          Send Message
        </button>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {/* Location */}
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          <p>Lagos, Nigeria</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <MailIcon className="w-5 h-5 text-gray-500" />
          <a href="mailto:owolabifelix78@gmail.com" className="hover:underline">
            owolabifelix78@gmail.com
          </a>
        </div>

        {/* Website */}
        <div className="flex items-center space-x-2">
          <LinkIcon className="w-5 h-5 text-gray-500" />
          <a
            href="https://felixdev.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            felixdev.com.ng
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-2">
          <LinkedinIcon className="w-5 h-5 text-gray-500" />
          <a
            href="https://linkedin.com/in/justfelixowolabi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            /in/justfelixowolabi
          </a>
        </div>

        {/* Twitter (X) */}
        <div className="flex items-center space-x-2">
          <TwitterIcon className="w-5 h-5 text-gray-500" />
          <a
            href="https://twitter.com/justfelix_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @justfelix_dev
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-2">
          <GithubIcon className="w-5 h-5 text-gray-500" />
          <a
            href="https://github.com/justfelix-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            /justfelix-dev
          </a>
        </div>

        {/* Medium */}
        <div className="flex items-center space-x-2">
          <LinkIcon className="w-5 h-5 text-gray-500" />
          <a
            href="https://medium.com/@owolabifelix78"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            medium.com/@owolabifelix78
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
