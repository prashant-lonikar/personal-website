import React from 'react';

const PDFViewer = ({ pdfPath, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      <div className="flex space-x-4">
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          View PDF
        </a>
        <a
          href={pdfPath}
          download
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default PDFViewer;
