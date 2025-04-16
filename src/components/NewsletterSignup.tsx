
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-dealfindr-gray">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 border-0 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe for Deals Alerts
            </h2>
            <p className="text-gray-600">
              Get the best deals delivered to your inbox. We'll send you personalized deal alerts based on your interests.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="rounded-full flex-1" 
            />
            <Button type="submit" className="bg-dealfindr-green hover:bg-dealfindr-green-dark rounded-full">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;
