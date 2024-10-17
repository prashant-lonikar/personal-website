import React from 'react';

function Media() {
  const mediaMentions = [
    {
      title: "Example Media Mention 1",
      outlet: "Tech News Today",
      date: "2024-01-15",
      link: "#"
    },
    {
      title: "Example Media Mention 2",
      outlet: "Science Weekly",
      date: "2023-11-30",
      link: "#"
    }
  ];

  return (
    <div className="media">
      <h1 className="text-4xl font-bold mb-6">Media Mentions</h1>
      <ul className="space-y-6">
        {mediaMentions.map((mention, index) => (
          <li key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{mention.title}</h3>
            <p className="text-gray-600 mb-2">{mention.outlet}, {mention.date}</p>
            <a href={mention.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Read Article</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Media;