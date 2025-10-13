import React from 'react';
import PDFViewer from '../components/PDFViewer';

const PDFs = () => {
  // List of your PDF documents
  const pdfDocuments = [
    {
      path: '/pdfs/sample-resume.pdf',
      title: 'Resume',
      description: 'My professional resume and CV'
    },
    // Add more PDFs here as you upload them
    // {
    //   path: '/pdfs/research-paper.pdf',
    //   title: 'Research Paper',
    //   description: 'My latest research publication'
    // },
    // {
    //   path: '/pdfs/portfolio.pdf',
    //   title: 'Portfolio',
    //   description: 'Complete portfolio of my work'
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Documents & PDFs
          </h1>
          <p className="text-xl text-gray-600">
            Download my documents, research papers, and other PDF resources
          </p>
        </div>

        <div className="grid gap-6">
          {pdfDocuments.map((doc, index) => (
            <PDFViewer
              key={index}
              pdfPath={doc.path}
              title={doc.title}
              description={doc.description}
            />
          ))}
        </div>

        {pdfDocuments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No PDF documents available yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFs;
