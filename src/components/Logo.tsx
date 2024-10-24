import React from 'react';
import { Brain, Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Brain className="h-8 w-8 text-white" />
        <Rocket className="h-4 w-4 text-blue-300 absolute -bottom-1 -right-1 transform rotate-45" />
      </div>
      <span className="text-2xl font-bold text-white">AI-PGF</span>
    </div>
  );
};

export default Logo;