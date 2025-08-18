import React from 'react';

function About() {
  return (
    <div className="about">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About Me</h1>
      
      {/* Profile Section */}
      <div className="md:flex md:space-x-8 mb-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="/images/about-me.jpg"
            alt="Prashant Lonikar"
            className="rounded-lg w-full max-w-sm mx-auto object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Solutions Engineer at Briink</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm Prashant Lonikar, an AI Solutions Engineer with 5+ years of experience bridging the gap between cutting-edge technology and real business needs. 
            Currently at Briink, I'm helping organizations unlock their full potential through intelligent automation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My journey started in electrical engineering, evolved through climate finance and sustainability, and now focuses on developing and selling AI products that solve real-world problems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I believe in the power of working prototypes over wireframes, speaking both technical and business languages, and building genuine customer relationships based on mutual success.
          </p>
        </div>
      </div>

      {/* Career Journey */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Career Journey</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6 py-2">
            <h3 className="text-xl font-semibold text-gray-800">AI Customer Solutions Engineer at Briink</h3>
            <p className="text-gray-600">2024 - Present</p>
            <p className="text-gray-700 mt-2">
              Leading customer solutions engineering division, conducting pilots with large corporates and asset managers, 
              and bridging sales and engineering teams to deliver exceptional customer experiences.
            </p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6 py-2">
            <h3 className="text-xl font-semibold text-gray-800">Senior Analyst at ClimateAligned</h3>
            <p className="text-gray-600">2022 - 2024</p>
            <p className="text-gray-700 mt-2">
              Specialized in AI applications for sustainability and climate finance, developing innovative solutions 
              and building strong client relationships in the environmental sector.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-6 py-2">
            <h3 className="text-xl font-semibold text-gray-800">Analyst & Early Career</h3>
            <p className="text-gray-600">2019 - 2022</p>
            <p className="text-gray-700 mt-2">
              Built foundation in data analysis, sustainability, and technology applications while pursuing advanced education.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Skills */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">Master's Degree</h3>
              <p className="text-gray-600">Completed while working full-time</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">Bachelor's in Electrical Engineering</h3>
              <p className="text-gray-600">Strong technical foundation</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Core Competencies</h2>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800">AI & Machine Learning</h3>
              <p className="text-blue-700">Product development, prototyping, and implementation</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800">Solutions Engineering</h3>
              <p className="text-green-700">Bridging technical and business requirements</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-800">Customer Success</h3>
              <p className="text-purple-700">Relationship building and client satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Interests */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Beyond the Professional</h2>
        <p className="text-lg text-gray-700 mb-4">
          When I'm not developing AI solutions or working with clients, I'm constantly tinkering with new technologies, 
          experimenting with generative AI, and exploring innovative applications. I believe in continuous learning and 
          staying at the forefront of technological advancement.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">AI Experimentation</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Technology Tinkering</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Continuous Learning</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Innovation</span>
        </div>
      </div>
    </div>
  );
}

export default About;