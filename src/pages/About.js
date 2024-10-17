import React from 'react';

function About() {
  return (
    <div className="about">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="space-y-4">
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
  );
}

export default About;