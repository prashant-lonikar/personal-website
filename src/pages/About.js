import React from 'react';

function About() {
  return (
    <div className="about">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="/images/about-me.jpg"
            alt="Prashant Lonikar"
            className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p className="text-lg">
            Hello, I'm Prashant Lonikar. I'm a Senior Analyst specializing in products at the intersection of AI and sustainability.
            I have over 4 years of experience in climate finance and sustainability.
          </p>
          <p className="text-lg">
            My research interests include new foundational AI models, AI and their applications in sustainability and finance.
          </p>
          <p className="text-lg">
            When I'm not working, I enjoy playing tennis and reading.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;