
import React from 'react';
import { Search, BarChart2, Bell, ShoppingCart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-white" />,
    title: "Search for any product",
    description: "Enter a product name, URL, or scan a barcode to start your search across hundreds of retailers.",
    bgColor: "bg-dealfindr-blue"
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-white" />,
    title: "Compare prices and specs",
    description: "View detailed price comparisons, price history, specifications, and user reviews from multiple sources.",
    bgColor: "bg-dealfindr-blue-dark"
  },
  {
    icon: <Bell className="h-10 w-10 text-white" />,
    title: "Set alerts and track prices",
    description: "Set your desired price and receive notifications when the product reaches your target price.",
    bgColor: "bg-dealfindr-green"
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-white" />,
    title: "Buy from the best source",
    description: "Purchase directly from your retailer of choice with confidence that you're getting the best deal.",
    bgColor: "bg-dealfindr-green-dark"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-dealfindr-gray" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How DealFindr{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Finding the best deals has never been easier. Our simple process helps you save time and money on all your purchases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
              <div className={`${step.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-4 absolute -top-8 left-6`}>
                {step.icon}
                <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-dealfindr-blue border-2 border-dealfindr-blue">
                  {index + 1}
                </div>
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-center">Use Cases</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-dealfindr-blue-light rounded-full p-2 mr-4">
                <Search className="h-6 w-6 text-dealfindr-blue" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Looking for the lowest iPhone price?</h4>
                <p className="text-gray-600">Compare prices across all major retailers and discover which store has the best deals on the latest iPhone models.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-dealfindr-blue-light rounded-full p-2 mr-4">
                <Bell className="h-6 w-6 text-dealfindr-blue" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Want to be notified when your favorite gadget is on sale?</h4>
                <p className="text-gray-600">Set up price alerts and get instant notifications when prices drop on products you're watching.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-dealfindr-blue-light rounded-full p-2 mr-4">
                <ShoppingCart className="h-6 w-6 text-dealfindr-blue" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Need a smarter way to shop during Black Friday?</h4>
                <p className="text-gray-600">Let our AI analyze historical pricing data to determine if Black Friday deals are actually worth it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
