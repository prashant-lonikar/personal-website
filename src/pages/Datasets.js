import React, { useState, useEffect } from 'react';

function Datasets() {
    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        // In a real implementation, you'd need to set up a backend endpoint 
        // or use a static file listing mechanism to get the CSV files
        // This is a placeholder example
        const availableDatasets = [
            {
                name: "dataset1.csv",
                path: "/datasets/dataset1.csv"
            },
            // Add more datasets here
        ];
        setDatasets(availableDatasets);
    }, []);

    const handleDownload = (path, filename) => {
        fetch(path)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            });
    };

    return (
        <div className="datasets">
            <h1 className="text-4xl font-bold mb-6">Available Datasets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {datasets.map((dataset, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => handleDownload(dataset.path, dataset.name)}
                    >
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-lg font-medium">{dataset.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Datasets;