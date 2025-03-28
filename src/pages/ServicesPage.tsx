
import React from 'react';
import Footer from "@/components/Footer";
import { Smartphone, Users, BarChart, Mail, Settings, ShieldCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Smartphone,
    title: "Digital Business Cards",
    description: "Create beautiful digital business cards that can be shared via QR code, link, or NFC technology.",
    category: "core",
    price: "Included",
    details: "Our digital business cards are responsive, customizable, and include analytics to track their performance."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage multiple team members and their digital business cards from a single dashboard.",
    category: "core",
    price: "Included",
    details: "Add up to 10 team members and manage their cards, including customizing permissions and branding."
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Track views, clicks, and engagement with your digital business cards to optimize performance.",
    category: "core",
    price: "Included",
    details: "Get detailed metrics on who's viewing your cards, which links are being clicked, and how to improve engagement."
  },
  {
    icon: Mail,
    title: "Inquiry Management",
    description: "Receive and respond to inquiries directly through your digital business card.",
    category: "premium",
    price: "₹500/mo",
    details: "Set up automated responses, notifications, and tracking for inquiries received through your digital business card."
  },
  {
    icon: Settings,
    title: "Customization Services",
    description: "Need extra help? Our team can customize your digital business card to match your brand exactly.",
    category: "addon",
    price: "₹2,000",
    details: "Our design team will work with you to create a fully custom digital business card that perfectly matches your brand identity."
  },
  {
    icon: ShieldCheck,
    title: "Technical Support",
    description: "Get technical support and assistance whenever you need it from our dedicated support team.",
    category: "premium",
    price: "₹800/mo",
    details: "Priority support with a guaranteed response time of under 4 hours, plus dedicated account manager for your business."
  }
];

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'core', label: 'Core Services' },
  { id: 'premium', label: 'Premium Services' },
  { id: 'addon', label: 'Add-on Services' }
];

const ServicesPage = () => {
  const [category, setCategory] = React.useState('all');
  
  const filteredServices = category === 'all' 
    ? services 
    : services.filter(service => service.category === category);

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl font-display font-bold text-gradient-primary mb-4">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of services designed to help you establish and grow your online presence.
        </p>
      </div>
      
      <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setCategory}>
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
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className="premium-card p-6 flex flex-col h-full transition-all hover:shadow-lg"
              >
                <div className="h-12 w-12 rounded-full bg-black/5 flex items-center justify-center mb-4 dark:bg-white/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Price:</span>
                    <span className={service.category === 'core' ? 'text-green-600 dark:text-green-400' : ''}>{service.price}</span>
                  </div>
                  <Button className="w-full" variant={service.category === 'core' ? "default" : "outline"}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-6">
          We understand that every business is unique. Contact us to discuss your specific requirements and how we can help you achieve your goals.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">Contact Our Team</Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
