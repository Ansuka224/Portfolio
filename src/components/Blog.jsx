import React, { useState } from 'react';

const Blog = () => {
  const [blogs] = useState([
    {
      title: 'The Importance of Learning JavaScript',
      content: `JavaScript is one of the most popular programming languages used today. It is essential for building interactive web applications and is a must-learn for any aspiring developer.`
    },
    {
      title: 'React vs Angular: Which One Should You Choose?',
      content: `React and Angular are two popular front-end frameworks. While React is a library focused on UI components, Angular is a complete front-end framework. Choosing between them depends on your project's requirements.`
    },
    {
      title: 'Top 5 Tips for Writing Clean Code',
      content: `Writing clean code is crucial for maintainability. Some key tips include using meaningful variable names, keeping functions short, and sticking to consistent formatting.`
    }
  ]);

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-300 to-purple-100 p-6 pt-24'>
      <header className='text-center mb-10'>
        <h1 className='text-5xl font-bold text-gray-800'>My Blog</h1>
      </header>
      <div className='max-w-5xl mx-auto grid grid-cols-1 gap-16'>
        {blogs.map((blog, index) => (
          <div key={index} className='bg-red-100 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg'>
            <h2 className='text-3xl font-bold text-teal-800 mb-6'>{blog.title}</h2>
            <p className='text-gray-600'>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
