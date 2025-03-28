
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { Monitor, Smartphone, Brush, Gauge, Shield, Users, Zap, Shuffle, Share2, Globe, QrCode, Clock, Layers, Database, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Monitor className="h-10 w-10 text-primary" />,
    title: "Responsive Design",
    description: "Our templates are designed to look great on all devices, from desktops to mobile phones.",
    category: "design"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Optimized",
    description: "Fast loading times and optimal viewing experience on smartphones and tablets.",
    category: "design"
  },
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: "Customizable",
    description: "Easily customize colors, fonts, and layouts to match your brand identity.",
    category: "design"
  },
  {
    icon: <Gauge className="h-10 w-10 text-primary" />,
    title: "Performance Focused",
    description: "Optimized for speed and performance to ensure your website loads quickly.",
    category: "technical"
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure & Reliable",
    description: "Built with security best practices to keep your website and visitors safe.",
    category: "technical"
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "User-Friendly",
    description: "Intuitive navigation and user experience to keep visitors engaged.",
    category: "design"
  },
  {
    icon: <QrCode className="h-10 w-10 text-primary" />,
    title: "QR Code Generation",
    description: "Generate QR codes for your digital business cards for easy sharing in print materials.",
    category: "technical"
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "One-Click Actions",
    description: "Allow visitors to call, email, or connect on social media with a single click.",
    category: "technical"
  },
  {
    icon: <Shuffle className="h-10 w-10 text-primary" />,
    title: "Unlimited Updates",
    description: "Change your information anytime without needing to reprint business cards.",
    category: "technical"
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: "Easy Sharing",
    description: "Share your digital business card via email, SMS, social media, or NFC technology.",
    category: "technical"
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "International Support",
    description: "Multi-language support and region-specific contact formats for global business.",
    category: "support"
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "24/7 Access",
    description: "Your digital business card is available anytime, anywhere in the world.",
    category: "support"
  }
];

const highlightFeatures = [
  {
    icon: <Layers className="h-12 w-12 text-primary" />,
    title: "Comprehensive Ecosystem",
    description: "Our platform offers a complete ecosystem for digital business cards, from creation to analytics and management."
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: "Enterprise-Grade Infrastructure",
    description: "Built on secure, scalable infrastructure that ensures your digital business cards are always available and perform optimally."
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Innovative Features",
    description: "We're constantly innovating and adding new features to keep your digital business cards ahead of the competition."
  }
];

const categories = [
  { id: 'all', label: 'All Features' },
  { id: 'design', label: 'Design' },
  { id: 'technical', label: 'Technical' },
  { id: 'support', label: 'Support' }
];

const FeaturesPage = () => {
  const [category, setCategory] = React.useState('all');

  const filteredFeatures = category === 'all' 
    ? features 
    : features.filter(feature => feature.category === category);

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl font-display font-bold text-gradient-primary mb-4">
          Features
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the powerful features that make our digital business cards stand out from the competition.
        </p>
      </div>
      
      {/* Hero Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Next-Generation Digital Business Cards</h2>
          <p className="text-muted-foreground mb-6">
            Traditional business cards are a thing of the past. Our digital business cards offer dynamic content, real-time updates, and interactive elements that make a lasting impression.
          </p>
          <p className="text-muted-foreground mb-6">
            With detailed analytics, you can track views, clicks, and engagement to understand how your digital business card is performing and optimize it for better results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/templates">Explore Templates</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
        <div className="premium-card p-8 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" 
            alt="Digital Business Card Demo" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
      
      {/* Key Features Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {highlightFeatures.map((feature, index) => (
          <div key={index} className="premium-card p-8 text-center">
            <div className="flex justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
      
      {/* Feature Tabs */}
      <Tabs defaultValue="all" className="w-full mb-16" onValueChange={setCategory}>
        <TabsList className="w-full md:w-auto bg-secondary/50 mb-8">
          {categories.map(cat => (
            <TabsTrigger 
              key={cat.id} 
              value={cat.id}
              className="text-xs sm:text-sm font-medium px-2 py-2 transition-all whitespace-nowrap"
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={category} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="premium-card p-8 flex flex-col items-center text-center transition-all hover:shadow-lg"
              >
                <div className="h-16 w-16 rounded-full bg-black/5 flex items-center justify-center mb-6 dark:bg-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Feature Comparison */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Digital Business Cards?</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-4 px-6 text-left font-bold">Features</th>
                <th className="py-4 px-6 text-center font-bold">Traditional Cards</th>
                <th className="py-4 px-6 text-center font-bold">LitPages Digital Cards</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-6 font-medium">Updatable Information</td>
                <td className="py-4 px-6 text-center">❌</td>
                <td className="py-4 px-6 text-center">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-6 font-medium">Interactive Content</td>
                <td className="py-4 px-6 text-center">❌</td>
                <td className="py-4 px-6 text-center">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-6 font-medium">Analytics & Tracking</td>
                <td className="py-4 px-6 text-center">❌</td>
                <td className="py-4 px-6 text-center">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-6 font-medium">Unlimited Sharing</td>
                <td className="py-4 px-6 text-center">❌</td>
                <td className="py-4 px-6 text-center">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-6 font-medium">Environmental Impact</td>
                <td className="py-4 px-6 text-center">High</td>
                <td className="py-4 px-6 text-center">Minimal</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-6 font-medium">Direct Link to Social Media</td>
                <td className="py-4 px-6 text-center">❌</td>
                <td className="py-4 px-6 text-center">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 text-center mb-20">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Create your digital business card today and experience the full range of features that will transform how you connect with clients and colleagues.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/register">Get Started</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
