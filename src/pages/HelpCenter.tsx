
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Search, MessageCircle, PlayCircle } from 'lucide-react';

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Help Center</h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <BookOpen className="w-6 h-6 text-dealfindr-blue mr-3" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
                  <p className="text-gray-600 mb-4">New to DealFindr? Learn the basics and start saving money.</p>
                  <Link to="/faq" className="text-dealfindr-blue hover:underline">Read guides →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <Search className="w-6 h-6 text-dealfindr-blue mr-3" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Search Solutions</h2>
                  <p className="text-gray-600 mb-4">Browse our knowledge base for quick answers.</p>
                  <Link to="/faq" className="text-dealfindr-blue hover:underline">Find answers →</Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MessageCircle className="w-6 h-6 text-dealfindr-blue mr-3" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
                  <p className="text-gray-600 mb-4">Need personal assistance? Our team is here to help.</p>
                  <Link to="/contact" className="text-dealfindr-blue hover:underline">Get help →</Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <PlayCircle className="w-6 h-6 text-dealfindr-blue mr-3" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Video Tutorials</h2>
                  <p className="text-gray-600 mb-4">Watch step-by-step guides on using DealFindr.</p>
                  <a href="#" className="text-dealfindr-blue hover:underline">Watch now →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
