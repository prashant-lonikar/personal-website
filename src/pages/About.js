import React from 'react';

function About() {
  return (
    <div className="about">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img 
            src="/profile-picture.jpg" 
            alt="Your Name" 
            className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p className="text-lg">
            Hello, I'm [Your Name]. I'm a [Your Profession] specializing in [Your Field].
            I have [X] years of experience in [Relevant Areas].
          </p>
          <p className="text-lg">
            My research interests include [List 2-3 Key Areas]. I'm passionate about
            [Something You're Passionate About in Your Field].
          </p>
          <p className="text-lg">
            When I'm not working, I enjoy [1-2 Hobbies or Interests].
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;