import React, { useState } from 'react';

function Hobbies() {
  const [activeCategory, setActiveCategory] = useState('learning');

  const categories = {
    learning: {
      title: "Learning & Growth",
      icon: "📚",
      color: "blue"
    },
    tech: {
      title: "Tech Tinkering",
      icon: "⚡",
      color: "green"
    },
    culture: {
      title: "Culture & Entertainment",
      icon: "🎬",
      color: "purple"
    },
    events: {
      title: "Events & Networking",
      icon: "🎯",
      color: "orange"
    }
  };

  const hobbies = {
    learning: [
      {
        title: "Chinese Language",
        description: "Currently learning Mandarin Chinese to expand my global perspective and connect with more people.",
        status: "In Progress",
        details: "Focusing on conversational skills and business vocabulary. Practice with native speakers weekly.",
        icon: "🇨🇳"
      },
      {
        title: "AI & Machine Learning",
        description: "Constantly experimenting with new AI models and staying updated with the latest developments.",
        status: "Ongoing",
        details: "Building side projects, testing new APIs, and exploring emerging use cases.",
        icon: "🤖"
      },
      {
        title: "Sustainability & Climate",
        description: "Deep diving into climate science, policy, and innovative solutions for a sustainable future.",
        status: "Continuous",
        details: "Reading research papers, attending conferences, and exploring new technologies.",
        icon: "🌱"
      }
    ],
    tech: [
      {
        title: "Fun App Development",
        description: "Building small, useful applications that solve everyday problems or just bring joy.",
        status: "Active",
        details: "Recently built a personal diary app, token counter for LLMs, and various productivity tools.",
        icon: "💻"
      },
      {
        title: "AI Experimentation",
        description: "Testing the boundaries of what's possible with current AI technology.",
        status: "Regular",
        details: "Creating AI-powered tools, experimenting with prompt engineering, and exploring new applications.",
        icon: "🧪"
      },
    ],
    culture: [
      {
        title: "Movies & TV",
        description: "Big fan of media that involves complex world building. Zack Snyder movies and Kitchen Nightmares are my guilty pleasures.",
        status: "Always Watching",
        details: "Recent favorites include 'Dune' and 'Arrival' in films and 'Succession' in TV.",
        icon: "🎬"
      },
      {
        title: "Reading",
        description: "Mix of technical books, science fiction, and non-fiction that expands my worldview. Enid Blyton was my introduction to fiction.",
        status: "Regular",
        details: "Currently reading 'Why We Sleep'.",
        icon: "📖"
      },
      {
        title: "Music",
        description: "Classical music and songs from the 80s. Hard to beat.",
        status: "Daily",
        details: "Often listen while coding, reading, or during long work sessions.",
        icon: "🎵"
      }
    ],
    events: [
      {
        title: "Tech Meetups",
        description: "Regularly attending AI, sustainability, and technology-focused events in London.",
        status: "Monthly",
        details: "Great way to stay connected with the community and discover new opportunities.",
        icon: "🤝"
      },
      {
        title: "Conferences",
        description: "Speaking at and attending major conferences in AI, climate tech, and sustainability.",
        status: "Quarterly",
        details: "Recent events include AI conferences, climate summits, and industry gatherings.",
        icon: "🎤"
      },
      {
        title: "Networking",
        description: "Building meaningful connections with professionals across different industries.",
        status: "Ongoing",
        details: "Coffee chats, virtual meetups, and collaborative projects.",
        icon: "🌐"
      }
    ]
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="hobbies">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Beyond the Professional</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Life isn't all work and no play. Here's what I'm passionate about, learning, and exploring outside of my career.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
              activeCategory === key
                ? `${getColorClasses(category.color)} border-current`
                : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span className="font-medium">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {categories[activeCategory].title}
          </h2>
          <p className="text-gray-600">
            {activeCategory === 'learning' && "Continuous growth and skill development"}
            {activeCategory === 'tech' && "Building, experimenting, and innovating"}
            {activeCategory === 'culture' && "Art, entertainment, and cultural exploration"}
            {activeCategory === 'events' && "Community engagement and networking"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hobbies[activeCategory].map((hobby, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">{hobby.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{hobby.title}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getColorClasses(categories[activeCategory].color)}`}>
                    {hobby.status}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {hobby.description}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {hobby.details}
              </p>
            </div>
          ))}
        </div>
      </div>



      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Want to discuss any of these interests or find common ground?
        </p>
        <a 
          href="mailto:prashant.lonikar@gmail.com" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
}

export default Hobbies;
