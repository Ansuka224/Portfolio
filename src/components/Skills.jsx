import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {

  const professionalSkills = [
    { name: 'Python', level: 60 },
    { name: 'Javascript', level: 80 },
    { name: 'HTML & CSS', level: 86 },
    { name: 'React JS', level: 70 },
  ];

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-gray-300 to-purple-100 p-8 pt-28'>
      <div>
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800">Skills</h1>
        </header>
      </div>
      
      <div className='flex flex-wrap justify-center items-center gap-52 bg-pink-50 p-16 rounded-lg shadow-lg max-w-4xl mx-auto'>
        {professionalSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center h-44 w-32">
            <CircularProgressbar
              value={skill.level}
              text={`${skill.level}%`}
              styles={buildStyles({
                textColor: '#374151',
                pathColor: '#14b8a6',
                trailColor: '#d1d5db',
                textSize: '20px',
              })}
            />
            <p className="text-center mt-4 text-xl font-medium text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
