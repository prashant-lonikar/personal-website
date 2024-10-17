import React from 'react';

function Publications() {
  const publications = [
    {
      title: "Example Publication 1",
      authors: "Your Name, Co-author Name",
      journal: "Journal of Example Studies",
      year: 2023,
      link: "#"
    },
    {
      title: "Example Publication 2",
      authors: "Your Name, Another Co-author",
      journal: "International Conference on Examples",
      year: 2022,
      link: "#"
    }
  ];

  return (
    <div className="publications">
      <h1 className="text-4xl font-bold mb-6">Publications</h1>
      <ul className="space-y-6">
        {publications.map((pub, index) => (
          <li key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
            <p className="text-gray-600 mb-1">{pub.authors}</p>
            <p className="text-gray-600 mb-2">{pub.journal}, {pub.year}</p>
            <a href={pub.link} className="text-blue-600 hover:text-blue-800">View Publication</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Publications;