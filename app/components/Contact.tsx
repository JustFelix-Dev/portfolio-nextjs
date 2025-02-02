'use client'
import React from 'react';
import emailjs  from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  LinkIcon,
  MailIcon,
  MapPin,
  TwitterIcon,
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ form,setForm ] = useState({
        name: '',
        email: '',
        message: ''
  })
  const [ loading,setLoading ] = useState(false);
  const [ response, setResponse] = useState('');
  const [ display,setDisplay] = useState(false);
  const [ color,setColor ] = useState(false);

  const handleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      const { name, value } = e.target;
      setForm({...form, [name]: value})
  };


const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=> {    
  e.preventDefault();

    setResponse('');
    setDisplay(false);
    setLoading(true);
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_NAME!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
        {
            from_name: form.name,
            to_name: 'Felix',
            from_email: form.email,
            to_email: 'owolabifelix78@gmail.com',
            message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_KEY!
        ).then(()=>{
          setColor(false)
            setLoading(false)
            setResponse('Thank You!. I would get back to you as soon as possible.')
            setDisplay(true)
            setForm({
                name: '',
                email: '', 
                message: ''
            })
        },(error)=>{
            setLoading(false)
            setColor(true)
            console.log(error)
            setResponse('Oops!. Looks like something went wrong!')
            setDisplay(true)
        })
};


  return (
    <div className='flex flex-col  border-l'>
      {/* Message Form */}
      <div className=" p-4 space-y-6">
        <h2 className="text-lg font-semibold">Reach Out 😄</h2>
        <form 
          className='max-w-md'
        ref={formRef}
          onSubmit={handleSubmit}>

        <input className='mb-3 w-full p-2 border rounded focus:outline-none focus:ring-[#B87D4B] focus:ring-2' type="text" name='name'  placeholder="Name" value={form.name} onChange={handleChange} required />
        <input className='mb-3 w-full p-2 border rounded focus:outline-none focus:ring-[#B87D4B] focus:ring-2' type="text" name='email'  placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring-[#B87D4B] focus:ring-2"
          placeholder="Write your message..."
          name='message'
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
        ></textarea>
        { display && <h6 className={`${color ? 'text-red-500':'text-green-700'} my-2 font-medium`}>{response}</h6>}
        <button type='submit' className="px-4 bg-[#B87D4B] text-[#18181b] py-2 rounded hover:bg-primary-dark transition">
          {loading ? 'Sending...':'Send Message'}
        </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="p-4 space-y-6">
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
    </div>
  );
};

export default Contact;
