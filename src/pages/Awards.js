import React, { useState } from 'react';

function Awards() {
  const [selectedImage, setSelectedImage] = useState(null);

  const awards = [
    {
      name: "Analytics for Society Award",
      organization: "Imperial College Business School",
      year: 2023,
      description: "Runner up. Awarded for the best use of analytics and AI in addressing the gap towards the UN Sustainable Development Goals.",
      image: "/images/analytics-for-society-award.png"
    },
  ];

  return (
    <div className="awards">
      <h1 className="text-4xl font-bold mb-6">Awards and Honors</h1>
      <div className="space-y-6">
        {awards.map((award, index) => (
          <div key={index} className="border-b pb-4 flex items-start">
            {award.image && (
              <img
                src={award.image}
                alt={award.name}
                className="w-24 h-24 object-cover rounded-lg mr-4 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedImage(award.image)}
              />
            )}
            <div>
              <h2 className="text-2xl font-semibold mb-2">{award.name}</h2>
              <p className="text-gray-600 mb-1">{award.organization}, {award.year}</p>
              <p>{award.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Award"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Awards;