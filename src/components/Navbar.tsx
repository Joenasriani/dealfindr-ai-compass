
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, JapaneseYen, DollarSign, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleAuthClick = () => {
    navigate('/auth');
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex items-center justify-center bg-dealfindr-blue p-2 rounded-lg relative h-10 w-10">
            <DollarSign className="h-6 w-6 text-white absolute top-1" />
            <JapaneseYen className="h-6 w-6 text-white absolute bottom-1" />
          </div>
          <span className="text-2xl font-bold text-dealfindr-blue">Direct Price Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-dealfindr-blue transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-dealfindr-blue transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-dealfindr-blue transition-colors">
            Contact
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center border rounded-full px-3 py-1 bg-gray-50 hover:bg-gray-100 transition-colors">
            <Globe className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">EN</span>
          </div>
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">{user.email}</span>
              </div>
              <Button variant="outline" size="sm" className="rounded-full" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Button variant="outline" size="sm" className="rounded-full" onClick={handleAuthClick}>
                Log In
              </Button>
              <Button size="sm" className="rounded-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark" onClick={handleAuthClick}>
                Sign Up Free
              </Button>
            </>
          )}
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
              to="/"
              className="text-gray-700 hover:text-dealfindr-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-dealfindr-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-dealfindr-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <div className="flex items-center border rounded-full px-3 py-2 bg-gray-50 w-fit">
                <Globe className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700">EN</span>
              </div>
              {user ? (
                <>
                  <div className="flex items-center space-x-2 py-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-700">{user.email}</span>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full w-full" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="rounded-full w-full" onClick={handleAuthClick}>
                    Log In
                  </Button>
                  <Button size="sm" className="rounded-full w-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark" onClick={handleAuthClick}>
                    Sign Up Free
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
