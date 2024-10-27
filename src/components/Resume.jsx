import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    const options = {
      margin: 1,
      filename: 'Ansuka_Thapaliya_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-100 to-gray-300 p-10 pt-32'>
      {/* Added pt-32 to add padding to the top and make room for the fixed navbar */}
      <header className='text-center mb-10'>
        <h1 className='text-6xl font-bold text-gray-800'>Resume</h1>
      </header>
      <div ref={resumeRef} className='max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-md'>
        <section className='mb-10'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Contact</h2>
          <p className='text-gray-600'><strong>Phone:</strong> 9813346343</p>
          <p className='text-gray-600'><strong>Email:</strong> ansukathapaliya224@gmail.com</p>
          <p className='text-gray-600'><strong>Location:</strong> Budhanilkantha, Kathmandu</p>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Education</h2>
          <div className='mb-6'>
            <h3 className='text-2xl font-bold text-gray-800'>Secondary School</h3>
            <p className='text-gray-600'>Xavier International College | 2021-2023</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-gray-800'>BSc(Hons) Computer Science and Artificial Intelligence</h3>
            <p className='text-gray-600'>Sunway College Kathmandu | 2023 - Continue</p>
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Summary</h2>
          <p className='text-gray-600'>
            I'm passionate about data and programming, always eager to learn new things. While I don't have formal experience yet, I'm a quick learner with a solid foundation in Python, Power BI, JavaScript, and React. I'm also a strong English speaker, which helps me communicate effectively. I'm excited to build on these skills and dive deeper into the field.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Skills</h2>
          <ul className='list-disc list-inside text-gray-600'>
            <li>Python - Basic</li>
            <li>Power BI - Basic</li>
            <li>JavaScript - Basic</li>
            <li>React JS - Basic</li>
          </ul>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Language</h2>
          <p className='text-gray-600'>English, Nepali, Hindi</p>
        </section>
      </div>
      <div className='text-center mt-10'>
        <button
          onClick={handleDownload}
          className='py-2 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold hover:from-purple-600 hover:to-orange-500'
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
