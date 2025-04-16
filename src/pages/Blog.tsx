
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';

const blogPosts = [
  {
    title: "Top 10 Smart TVs Worth Buying in 2023",
    excerpt: "Looking for a new smart TV? We've compared dozens of models to bring you the absolute best options for every budget.",
    category: "Shopping Guides",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "tv"
  },
  {
    title: "How to Save Money Using Price Trackers",
    excerpt: "Learn how to use price tracking tools effectively to save up to 20% on your online purchases year-round.",
    category: "Tips & Tricks",
    date: "May 28, 2023",
    readTime: "6 min read",
    image: "money"
  },
  {
    title: "Black Friday vs. Prime Day: When to Buy What",
    excerpt: "Which shopping event offers better deals? Our data analysis reveals surprising insights about when to buy different product categories.",
    category: "Deal Analysis",
    date: "July 3, 2023",
    readTime: "10 min read",
    image: "calendar"
  },
  {
    title: "7 Common Online Shopping Mistakes to Avoid",
    excerpt: "Are you making these common mistakes when shopping online? Learn how to shop smarter and avoid paying more than you should.",
    category: "Tips & Tricks",
    date: "June 5, 2023",
    readTime: "7 min read",
    image: "warning"
  },
  {
    title: "The Ultimate Guide to Buying Laptops in 2023",
    excerpt: "Confused by all the options? Our comprehensive guide breaks down everything you need to know before buying your next laptop.",
    category: "Shopping Guides",
    date: "July 12, 2023",
    readTime: "12 min read",
    image: "laptop"
  },
  {
    title: "How AI is Changing the Way We Shop Online",
    excerpt: "Artificial intelligence is revolutionizing the online shopping experience. Here's how AI is helping consumers find better deals.",
    category: "Technology",
    date: "June 22, 2023",
    readTime: "9 min read",
    image: "ai"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16 bg-dealfindr-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DealFindr <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Shopping guides, money-saving tips, and product recommendations from our experts.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input 
                type="text" 
                placeholder="Search articles" 
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dealfindr-blue focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <Button variant="outline" className="rounded-full">All Topics</Button>
            <Button variant="outline" className="rounded-full">Shopping Guides</Button>
            <Button variant="outline" className="rounded-full">Deal Analysis</Button>
            <Button variant="outline" className="rounded-full">Tips & Tricks</Button>
            <Button variant="outline" className="rounded-full">Technology</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden card-shadow hover-scale">
                <div className="h-48 bg-gray-300 relative">
                  {/* Placeholder for blog post image */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-dealfindr-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-dealfindr-blue font-medium hover:underline">
                    Read More →
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-dealfindr-blue text-dealfindr-blue rounded-full px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
