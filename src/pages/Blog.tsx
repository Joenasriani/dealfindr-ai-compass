
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';

const blogPosts = [
  {
    title: "Foxconn: The Tech Giant Behind Apple's Success",
    excerpt: "Deep dive into how Foxconn, China's largest private employer, became Apple's main manufacturing partner and revolutionized electronic production.",
    category: "Manufacturer Spotlight",
    date: "March 15, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    link: "/blog/foxconn-apple-success"
  },
  {
    title: "How Chinese Manufacturers Shaped Nike's Supply Chain",
    excerpt: "Explore Nike's journey with Chinese manufacturing partners, from early challenges to creating one of the most efficient supply chains in sportswear.",
    category: "Case Study",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800",
    link: "/blog/nike-china-manufacturing"
  },
  {
    title: "BYD: From Battery Maker to Tesla Competitor",
    excerpt: "The fascinating story of how BYD evolved from a battery manufacturer for American electronics to becoming Tesla's main competitor in electric vehicles.",
    category: "Company Profile",
    date: "March 5, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
    link: "/blog/byd-tesla-competitor"
  },
  {
    title: "Chinese Manufacturing Zones: A Complete Guide",
    excerpt: "Understanding China's Special Economic Zones and how they've become global manufacturing hubs for U.S. companies seeking reliable production partners.",
    category: "Industry Guide",
    date: "February 28, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800",
    link: "/blog/china-manufacturing-zones"
  },
  {
    title: "From Shenzhen to Silicon Valley: Huawei's Journey",
    excerpt: "Analysis of Huawei's evolution from a small component manufacturer to a global telecommunications leader, and its impact on U.S. tech infrastructure.",
    category: "Company Profile",
    date: "February 20, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800",
    link: "/blog/huawei-global-impact"
  },
  {
    title: "Quality Control in Chinese Manufacturing",
    excerpt: "Best practices and standards implemented by top Chinese manufacturers to meet U.S. quality requirements, featuring success stories and lessons learned.",
    category: "Industry Guide",
    date: "February 15, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    link: "/blog/quality-control-china"
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
            <Button variant="outline" className="rounded-full">Manufacturer Spotlight</Button>
            <Button variant="outline" className="rounded-full">Case Study</Button>
            <Button variant="outline" className="rounded-full">Company Profile</Button>
            <Button variant="outline" className="rounded-full">Industry Guide</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <a href={post.link} className="block">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
                    <h3 className="text-xl font-semibold mb-3 hover:text-dealfindr-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-dealfindr-blue font-medium inline-flex items-center">
                      Read More 
                      <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-dealfindr-blue text-dealfindr-blue rounded-full px-8 hover:bg-dealfindr-blue hover:text-white transition-colors">
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
