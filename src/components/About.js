import React, { useEffect } from 'react';

const About = ({ saveNavTextColor }) => {
  useEffect(() => {
    saveNavTextColor('#000');
  }, [saveNavTextColor]);

  return <div>About</div>;
};

export default About;
