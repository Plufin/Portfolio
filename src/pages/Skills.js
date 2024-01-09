import React from 'react';

const Skills = () => {
  const skillsList = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    // Add more skills as needed
  ];

  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;