import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bot, ShieldCheck, Heart, BarChart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16 bg-dealfindr-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">DealFindr AI</span>
            </h1>
            <p className="text-xl text-gray-700">
              My name is Joe Nasr, and I'm based in Dubai. Welcome to our platform—a comprehensive price comparison website covering global markets, with a particular emphasis on Chinese manufacturers. Here, you can effortlessly compare prices from around the world to find the best deals, ensuring you get the most affordable option every time.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                DealFindr AI was founded by Joe Nasr with a vision to revolutionize how people compare prices globally. Based in Dubai, we've built a platform that specializes in connecting buyers with manufacturers worldwide, particularly focusing on the Chinese market.
              </p>
              <p>
                Using the latest advancements in artificial intelligence and machine learning, we built a platform that not only compares prices across hundreds of retailers but also understands user preferences, predicts price trends, and delivers personalized deal recommendations.
              </p>
              <p>
                Today, DealFindr AI helps thousands of shoppers save money every day. Our technology continuously improves as more people use it, making the shopping experience better for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dealfindr-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-dealfindr-blue-light rounded-full p-3 mr-4">
                  <Bot className="h-6 w-6 text-dealfindr-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ethical AI</h3>
                  <p className="text-gray-600">
                    We're committed to developing AI systems that are transparent, fair, and designed with user privacy as a priority.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-dealfindr-blue-light rounded-full p-3 mr-4">
                  <ShieldCheck className="h-6 w-6 text-dealfindr-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">User Privacy</h3>
                  <p className="text-gray-600">
                    We never sell your personal data. Your shopping preferences and history are used only to improve your experience.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-dealfindr-blue-light rounded-full p-3 mr-4">
                  <Heart className="h-6 w-6 text-dealfindr-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                  <p className="text-gray-600">
                    Everything we build is designed with our users in mind. Your feedback shapes our product roadmap.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-dealfindr-blue-light rounded-full p-3 mr-4">
                  <BarChart className="h-6 w-6 text-dealfindr-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    We're upfront about how we make money and our relationship with retailers. No hidden agendas.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default About;
