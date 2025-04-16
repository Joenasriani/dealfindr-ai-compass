import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Search, DollarSign } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex items-center justify-center bg-dealfindr-blue p-2 rounded-lg">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-dealfindr-blue">Direct Price Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-gray-700 hover:text-dealfindr-blue transition-colors">
            Features
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-dealfindr-blue transition-colors">
            How It Works
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-dealfindr-blue transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-dealfindr-blue transition-colors">
            About
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center border rounded-full px-3 py-1 bg-gray-50 hover:bg-gray-100 transition-colors">
            <Globe className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">EN</span>
          </div>
          <Button variant="outline" size="sm" className="rounded-full">
            Log In
          </Button>
          <Button size="sm" className="rounded-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark">
            Sign Up Free
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link
              to="/features"
              className="text-gray-700 hover:text-dealfindr-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-700 hover:text-dealfindr-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-dealfindr-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-dealfindr-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <div className="flex items-center border rounded-full px-3 py-2 bg-gray-50 w-fit">
                <Globe className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700">EN</span>
              </div>
              <Button variant="outline" size="sm" className="rounded-full w-full">
                Log In
              </Button>
              <Button size="sm" className="rounded-full w-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark">
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
