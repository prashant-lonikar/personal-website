import React from 'react';

function Work() {
  const pillars = [
    {
      title: "Design & Prototype New Products",
      subtitle: "Working prototypes over wireframes: the magic of customers trying tools is unmatched",
      description: "I believe in the power of rapid prototyping and getting real tools into customers' hands. This approach has led to breakthrough insights and successful product launches.",
      proofPoints: [
        {
          title: "GHG Data Finder",
          description: "Developed a comprehensive tool for finding and analyzing greenhouse gas data, helping sustainability teams reduce spend on data providers.",
          impact: "Introduced a new product line for the company"
        },
        {
          title: "AI-in-Spreadsheets",
          description: "Built AI-powered spreadsheet formula (before Google launched the same thing!), to help myself and my team automate unstructured work in spreadsheets.",
          impact: "Increased Excel-based task speed by 80% for colleagues"
        },
        {
          title: "AI for Real Estate",
          description: "Working on tools to help buyers and sellers better comply with real-estate regulations. Currently work-in-progress.",
          impact: "Automatic repetitive compliance tasks using AI"
        },
        {
          title: "New Web Scanner",
          description: "Developed AI-agents to find verified corporate information from the internet with source references and zero hallucination.",
          impact: "Reduced manual data collection time by 90%"
        }
      ],
      icon: "🔧",
      color: "blue"
    },
    {
      title: "Bridge Sales & Engineering",
      subtitle: "Speaking both languages is key to delivering rapid value while managing expectations",
      description: "I serve as the crucial link between technical teams and sales organizations, ensuring clear communication and realistic expectations that lead to successful implementations.",
      proofPoints: [
        {
          title: "Customer Solutions Engineering Division",
          description: "Started and leading the customer solutions engineering division at Briink, establishing processes and best practices from the ground up.",
          impact: "Mitigating client churn"
        },
        {
          title: "Large Corporate Pilots",
          description: "Conducted over half a dozen pilots single-handedly with large corporates and asset managers, demonstrating technical expertise and business acumen.",
          impact: "Creating new revenue streams and validating product ideas"
        },
        {
          title: "Cross-Team Collaboration",
          description: "Facilitated seamless communication between engineering, sales, and customer success teams, ensuring project alignment and delivery.",
          impact: "Scoping solutions, defining timelines, executing prototypes"
        }
      ],
      icon: "🌉",
      color: "green"
    },
    {
      title: "Build Customer Relationships",
      subtitle: "Customers want you to succeed so they can succeed. It's not a battle.",
      description: "Being able to speak the analyst and customer language, I focus on building genuine partnerships with clients, understanding their challenges deeply, and working collaboratively to achieve mutual success.",
      proofPoints: [
        {
          title: "Client Webinars & Training",
          description: "Conducted in-person and online webinars for clients about using generative AI in their work, building trust and expertise sharing.",
          impact: "Increased client engagement"
        },
        {
          title: "Churned and Cold Client Recovery",
          description: "Successfully brought back previously churned clients through relationship rebuilding and demonstrating renewed value proposition.",
          impact: "Revamping the client pipeline"
        },
        {
          title: "Long-term Partnerships",
          description: "Developing lasting relationships with key clients, becoming their trusted problem-solver, and advisor for AI and technology decisions.",
          impact: "Increasing client retention rate"
        }
      ],
      icon: "🤝",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-800",
        accent: "bg-blue-600"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-800",
        accent: "bg-green-600"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-800",
        accent: "bg-purple-600"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="work">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">My Work</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I solve the critical problem of analysts spending too much time on non-analysis tasks, 
          helping companies unlock business potential through intelligent AI solutions.
        </p>
      </div>

      {/* Three Pillars */}
      <div className="space-y-16">
        {pillars.map((pillar, index) => {
          const colors = getColorClasses(pillar.color);
          return (
            <div key={index} className={`${colors.bg} rounded-2xl p-8 border ${colors.border}`}>
              <div className="flex items-start mb-6">
                <div className={`${colors.accent} text-white text-3xl p-3 rounded-full mr-4`}>
                  {pillar.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-3 text-gray-800">{pillar.title}</h2>
                  <p className="text-xl font-semibold mb-4 text-gray-700 italic">
                    "{pillar.subtitle}"
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Proof Points */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillar.proofPoints.map((point, pointIndex) => (
                  <div key={pointIndex} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">{point.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {point.description}
                    </p>
                    <div className={`inline-block ${colors.accent} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                      {point.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how AI solutions can streamline your operations and unlock new opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="mailto:prashant.lonikar@gmail.com" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Get in Touch
          </a>
          <a 
            href="/projects" 
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 font-semibold"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
