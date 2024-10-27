import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  return (
    <div className='min-h-screen pt-32 bg-gradient-to-b from-gray-300 to-purple-100 p-6'>
      <header className='text-center mb-10'>
        <h1 className='text-5xl font-bold text-gray-800'>Contact Me</h1>
      </header>
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-rose-100 p-8 rounded-lg shadow-md'>
        <div className='contact-left'>
          <h2 className='text-4xl text-rose-300 font-semibold mb-4'>Let's Talk</h2>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <p className='font-semibold'>ansukathapaliya224@gmail.com</p>
            </div>
            <div className=' flex items-center font-semibold'>
              <p>+977 9813346343</p>
            </div>
            <div className='flex items-center font-semibold'>
              <p>Maitidevi, Kathmandu</p>
            </div>
          </div>
        </div>
        <form
          className='contact-right'
          onSubmit={async (e) => {
            e.preventDefault();
            let UserData = {
              name: name,
              email: email,
              message: message,
            };

            try {
              console.log("Sending data to API: ", UserData);
              let result = await axios({
                url: 'https://6717d6a0b910c6a6e02a3957.mockapi.io/aa/Contact',
                method: 'post',
                headers: {
                  'Content-Type': 'application/json',
                },
                data: UserData,
              });

              setName('');
              setEmail('');
              setMessage('');

              console.log('Response from API:', result.data);
              toast.success('Message Sent successfully');
            } catch (error) {
              console.error('Error sending message:', error);
              if (error.response) {
                console.error('Server responded with:', error.response.data);
              }
              toast.error('Unable to send message');
            }
          }}
        >
          <div className='mb-6'>
            <label htmlFor='name' className='block font-medium text-gray-800 mb-2'>Your Name:</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              id='name'
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='block font-medium text-gray-800 mb-2'>Your Email:</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              id='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='block font-medium text-gray-800 mb-2'>Anything Else:</label>
            <textarea
              name='message'
              placeholder='Send a Message'
              rows='8'
              id='message'
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md'
            ></textarea>
          </div>
          <div className='text-center'>
            <button
              className='contact-submit py-2 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold hover:from-purple-600 hover:to-orange-500'
              type='submit'
            >
              Submit now
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
