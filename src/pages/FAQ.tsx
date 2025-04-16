
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: "How do alerts work?",
    answer: "DealFindr allows you to set up personalized price alerts for any product. Simply find a product you're interested in, set your desired price, and we'll notify you by email or push notification when the price drops to or below your target. You can manage all your alerts from your account dashboard."
  },
  {
    question: "Is DealFindr free?",
    answer: "Yes, DealFindr is completely free to use! We make money through affiliate commissions when users make purchases through our links. This means we can provide our price comparison and tracking services at no cost to you while maintaining high-quality service."
  },
  {
    question: "Do you take commissions?",
    answer: "Yes, we earn affiliate commissions from retailers when you make a purchase through our links. However, this never affects the prices you see or our product recommendations. Our AI is designed to show you the best deals regardless of our commission rates, ensuring you always get the best possible price."
  },
  {
    question: "How accurate are your price comparisons?",
    answer: "Our price comparisons are updated multiple times daily to ensure accuracy. We scan hundreds of retailers to find the most current pricing. However, prices can change rapidly, so we always link directly to the retailer's site where you can verify the final price before purchasing."
  },
  {
    question: "How do I install the browser extension?",
    answer: "Our browser extension is coming soon! Once available, you'll be able to download it from the Chrome Web Store, Firefox Add-ons, or other browser extension marketplaces. The extension will automatically show you better deals while you shop online and allow you to track prices with a single click."
  },
  {
    question: "How does DealFindr use AI?",
    answer: "We use AI in several ways: to aggregate and analyze product information from multiple sources, to predict price trends based on historical data, to personalize deal recommendations based on your shopping preferences, and to improve product search results. Our AI continuously learns from user interactions to provide better shopping insights."
  },
  {
    question: "Can I use DealFindr in my country?",
    answer: "DealFindr is available worldwide, but our retailer coverage varies by country. We have the most comprehensive coverage in the United States, Canada, UK, UAE, Saudi Arabia, and major European countries. We're constantly expanding our global coverage to include more local and regional retailers."
  },
  {
    question: "How do I delete my account?",
    answer: "You can delete your account at any time from your account settings page. When you delete your account, all your personal information and saved preferences will be permanently removed from our systems in accordance with our privacy policy."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16 bg-dealfindr-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-700">
              Find answers to the most common questions about DealFindr AI.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium px-4">{item.question}</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Please contact our customer support team.
              </p>
              <a href="/contact" className="text-dealfindr-blue hover:text-dealfindr-blue-dark font-medium underline">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default FAQ;
