import React from 'react';

function Media() {
  const mediaMentions = [
    {
      title: "Climate fintech is exciting investors right now. Here's why it's primed to be the next red-hot sector",
      outlet: "Business Insider",
      date: "2023-10-24",
      link: "https://www.businessinsider.com/climate-fintech-red-hot-sector-is-capturing-investor-attention-right-now-2023-10"
    },
    {
      title: "The 53 most promising climate tech startups of 2023, from AI robotics to soil carbon sampling, according to top VCs",
      outlet: "Business Insider",
      date: "2023-10-13",
      link: "https://www.businessinsider.com/most-promising-climate-tech-startups-vcs-2023-10"
    },
    {
      title: "Nashik students bag gold, silver medals in state-level science meet",
      outlet: "Times of India",
      date: "2013-03-08",
      link: "https://timesofindia.indiatimes.com/city/nashik/nashik-students-bag-gold-silver-medals-in-state-level-science-meet/articleshow/18856469.cms"
    },
    ,
    {
      title: "ICSE results out, AUS duo share pole position",
      outlet: "Times of India",
      date: "2014-05-22",
      link: "https://timesofindia.indiatimes.com/city/nashik/icse-results-out-aus-duo-share-pole-position/articleshow/35448179.cms"
    }
  ];

  return (
    <div className="media">
      <h1 className="text-4xl font-bold mb-6">Media Mentions</h1>
      <ul className="space-y-6">
        {mediaMentions.map((mention, index) => (
          <li key={index} className="border-b pb-4">
            <a href={mention.link} target="_blank" rel="noopener noreferrer" className="block">
              <h3 className="text-xl font-semibold mb-2">{mention.title}</h3>
              <p className="text-gray-600 mb-2">{mention.outlet}, {mention.date}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Media;