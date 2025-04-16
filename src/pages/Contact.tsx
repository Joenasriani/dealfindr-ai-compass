
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-6 gradient-text">Contact Us</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Full Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone Number</label>
                <Input 
                  type="tel" 
                  id="phone" 
                  placeholder="00971585636277" 
                  value="00971585636277" 
                  readOnly 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here..." 
                  rows={4} 
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-4 text-dealfindr-blue" />
                <span>+971 585 636 277</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 text-dealfindr-blue" />
                <span>support@dealfindr.ai</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 text-dealfindr-blue" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
