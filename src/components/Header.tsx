import React from 'react';
import { Info } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI-PGF Assistant</h1>
        <button className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md transition-colors">
          <Info size={18} />
          <span>About</span>
        </button>
      </div>
    </header>
  );
};

export default Header;