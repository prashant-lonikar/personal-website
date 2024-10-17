import React from 'react';

function Awards() {
  const awards = [
    {
      name: "Example Award 1",
      organization: "Tech Innovation Society",
      year: 2023,
      description: "Awarded for outstanding contribution to...",
    },
    {
      name: "Example Award 2",
      organization: "Science Research Foundation",
      year: 2022,
      description: "Recognized for groundbreaking work in...",
    }
  ];

  return (
    <div className="awards">
      <h1 className="text-4xl font-bold mb-6">Awards and Honors</h1>
      <div className="space-y-6">
        {awards.map((award, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2">{award.name}</h2>
            <p className="text-gray-600 mb-1">{award.organization}, {award.year}</p>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;