import React from 'react';

function Publications() {
  const publications = [
    {
      title: "India Sustainable Debt Market State of the Market 2021",
      authors: "Sandeep Bhattacharya, Neha Kumar, Prashant Lonikar",
      journal: "Climate Bonds Initiative",
      year: 2022,
      link: "https://www.climatebonds.net/files/documents/publications/India-Sustainable-Debt-Market-State-of-the-Market-2021-report.pdf"
    },
    {
      title: "Sustainable Development Goals - Accountants Creating Sustainable World Part",
      authors: "Institute of Chartered Accountants of India",
      journal: "Institute of Chartered Accountants of India",
      year: 2021,
      link: "https://drive.google.com/file/d/1wJ5aTEWSuyyar9oUCnNAlSLlX_KHhTXS/view"
    },
    {
      title: "Hong Kong Green Bond Market Briefing 2020",
      authors: "Ivy Lau, Prashant Lonikar",
      journal: "Climate Bonds Initiative",
      year: 2021,
      link: "https://www.climatebonds.net/files/documents/publications/Hong-Kong-Green-Bond-Market-Briefing-2020.pdf"
    },
    {
      title: "Post-issuance Reporting in the Green Bond Market 2021",
      authors: "Miguel Almeida, Prashant Lonikar",
      journal: "Climate Bonds Initiative",
      year: 2021,
      link: "https://www.climatebonds.net/files/documents/publications/Post-Issuance-Reporting-in-the-Green-Bond-Market-2021.pdf"
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