import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { RocketIcon, Brain, Search, MessageSquare } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Brain className="h-16 w-16 text-blue-600" />
              <RocketIcon className="h-8 w-8 text-blue-400 absolute -bottom-2 -right-2 transform rotate-45" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900">Welcome to AI-PGF</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and connect with AI projects and funding opportunities through our intelligent platform
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" className="text-lg">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <Search className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
            <p className="text-gray-600">Find relevant AI projects and funding opportunities with our intelligent search system</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
            <p className="text-gray-600">Get personalized guidance and answers from our AI assistant</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <RocketIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Project Launch</h3>
            <p className="text-gray-600">Launch your AI projects and connect with potential funders</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;