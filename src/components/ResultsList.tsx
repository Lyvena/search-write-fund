import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchResults = async () => {
  // TODO: Implement actual API call
  return [
    { id: 1, title: 'AI Project 1', description: 'Description of AI Project 1' },
    { id: 2, title: 'Funding Opportunity 1', description: 'Details of Funding Opportunity 1' },
  ];
};

const ResultsList = () => {
  const { data: results, isLoading, error } = useQuery({
    queryKey: ['searchResults'],
    queryFn: fetchResults,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>
      <ul className="space-y-4">
        {results.map((result) => (
          <li key={result.id} className="border-b pb-4 last:border-b-0">
            <h3 className="font-medium text-lg">{result.title}</h3>
            <p className="text-gray-600">{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;