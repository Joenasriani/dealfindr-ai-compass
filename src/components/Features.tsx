
import React from 'react';
import { 
  Zap, 
  Search, 
  Bell, 
  Globe, 
  MessageSquare, 
  Chrome 
} from 'lucide-react';

const featureItems = [
  {
    icon: <Search className="h-8 w-8 text-dealfindr-blue" />,
    title: "Real-Time Price Comparison",
    description: "Compare prices across hundreds of retailers instantly and find the best deal available."
  },
  {
    icon: <Zap className="h-8 w-8 text-dealfindr-blue" />,
    title: "Smart Product Discovery with AI",
    description: "Our AI helps you find the perfect product based on your preferences and budget."
  },
  {
    icon: <Bell className="h-8 w-8 text-dealfindr-blue" />,
    title: "Personalized Deal Alerts",
    description: "Get notified when prices drop on products you're tracking or when new deals match your interests."
  },
  {
    icon: <Globe className="h-8 w-8 text-dealfindr-blue" />,
    title: "Multi-Store Search Engine",
    description: "Search across all major retailers simultaneously and find the best price in seconds."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-dealfindr-blue" />,
    title: "User Reviews Aggregation",
    description: "See ratings and reviews from multiple sources to make informed purchasing decisions."
  },
  {
    icon: <Chrome className="h-8 w-8 text-dealfindr-blue" />,
    title: "Browser Extension (Coming Soon)",
    description: "Shop online and automatically see better deals while browsing your favorite stores."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Shopping,{' '}
            <span className="gradient-text">Powered by AI</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            DealFindr uses advanced AI to help you shop smarter, save money, and discover products that perfectly match your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 card-shadow hover-scale">
              <div className="bg-dealfindr-gray rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
