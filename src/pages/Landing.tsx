import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { RocketIcon, Brain, Search, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <main className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 mb-16"
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <Brain className="h-16 w-16 text-blue-600" />
              <RocketIcon className="h-8 w-8 text-blue-400 absolute -bottom-2 -right-2 transform rotate-45" />
            </div>
          </motion.div>
          <h1 className="text-6xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to AI-PGF
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and connect with AI projects and funding opportunities through our intelligent platform
          </p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/auth">
              <Button size="lg" className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 border rounded-lg shadow-lg bg-white"
          >
            <Search className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
            <p className="text-gray-600">Powered by OpenAI, our intelligent search system helps you find the perfect AI projects and funding opportunities.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 border rounded-lg shadow-lg bg-white"
          >
            <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
            <p className="text-gray-600">Get personalized guidance and answers from our AI assistant trained on vast funding databases.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 border rounded-lg shadow-lg bg-white"
          >
            <Sparkles className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Project Launch</h3>
            <p className="text-gray-600">Launch your AI projects with intelligent matching to potential funders and collaborators.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Powered by Advanced AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform leverages OpenAI's powerful language models to provide intelligent project matching,
            smart search capabilities, and personalized funding recommendations.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Landing;