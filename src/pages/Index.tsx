import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import ChatInterface from '../components/ChatInterface';
import Footer from '../components/Footer';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <SearchBar />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResultsList />
            <ChatInterface />
          </div>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Index;