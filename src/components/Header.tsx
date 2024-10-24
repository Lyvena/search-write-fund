import React from 'react';
import { Info, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Navigation from './Navigation';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        <div className="flex items-center space-x-4">
          <Navigation />
          <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700">
            <Info className="mr-2 h-4 w-4" />
            About
          </Button>
          <Link to="/auth">
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;