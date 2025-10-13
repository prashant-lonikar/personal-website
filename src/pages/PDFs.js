import React from 'react';
import PDFViewer from '../components/PDFViewer';

const PDFs = () => {
  // List of your PDF documents
  const pdfDocuments = [
    {
      path: '/pdfs/[Backup] BRP Prashant Lonikar.pdf',
      title: 'BRP Document (Backup)',
      description: 'Biometric Residence Permit backup document'
    },
    {
      path: '/pdfs/1B PAN CARD PRASHANT LONIKAR.pdf',
      title: 'PAN Card',
      description: 'Permanent Account Number card document'
    },
    {
      path: '/pdfs/Annexure E.pdf',
      title: 'Annexure E',
      description: 'Supporting document'
    },
    {
      path: '/pdfs/Application Form.pdf',
      title: 'Application Form',
      description: 'Official application form'
    },
    {
      path: '/pdfs/Appointment Confirmation.pdf',
      title: 'Appointment Confirmation',
      description: 'Confirmed appointment details'
    },
    {
      path: '/pdfs/finalform.pdf',
      title: 'Final Form',
      description: 'Final application form document'
    },
    {
      path: '/pdfs/Immigration status.pdf',
      title: 'Immigration Status',
      description: 'Current immigration status document'
    },
    {
      path: '/pdfs/indian-passport-checklist-minor_new.pdf',
      title: 'Indian Passport Checklist (Minor)',
      description: 'Checklist for minor passport applications'
    },
    {
      path: '/pdfs/NEW Aadhaar Prashant Lonikar 2022.pdf',
      title: 'Aadhaar Card (2022)',
      description: 'Updated Aadhaar card document'
    },
    {
      path: '/pdfs/newform.pdf',
      title: 'New Form',
      description: 'New application form document'
    },
    {
      path: '/pdfs/newform 3.pdf',
      title: 'New Form 3',
      description: 'Updated application form document'
    },
    {
      path: '/pdfs/newform 6.pdf',
      title: 'New Form 6',
      description: 'Latest application form document'
    },
    {
      path: '/pdfs/Old Passport.pdf',
      title: 'Previous Passport',
      description: 'Previous passport document'
    },
    {
      path: '/pdfs/Share code.pdf',
      title: 'Share Code',
      description: 'Official share code document'
    },
    {
      path: '/pdfs/tatkal-undertaking.pdf',
      title: 'Tatkal Undertaking',
      description: 'Tatkal service undertaking form'
    },
    {
      path: '/pdfs/UK Address Proof.pdf',
      title: 'UK Address Proof',
      description: 'Proof of UK address document'
    },
    {
      path: '/pdfs/VFS Declaration.pdf',
      title: 'VFS Declaration',
      description: 'VFS Global declaration form'
    }
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
