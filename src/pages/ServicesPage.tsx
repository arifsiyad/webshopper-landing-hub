
import React from 'react';
import Footer from "@/components/Footer";
import { Smartphone, Users, BarChart, Mail, Settings, ShieldCheck, Clock, Award, Gift } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

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
  },
  {
    icon: Clock,
    title: "Scheduled Updates",
    description: "Set up automatic updates to your digital business card at scheduled intervals.",
    category: "premium",
    price: "₹350/mo",
    details: "Perfect for businesses with seasonal promotions or frequent updates. Schedule changes ahead of time and let us handle the rest."
  },
  {
    icon: Award,
    title: "Premium Templates",
    description: "Access to our exclusive collection of premium business card templates designed by professionals.",
    category: "addon",
    price: "₹1,500",
    details: "Stand out from the crowd with our premium templates that offer advanced animations, interactions, and design elements."
  },
  {
    icon: Gift,
    title: "White Label Solutions",
    description: "Rebrand our platform with your own company name and logo for a seamless client experience.",
    category: "addon",
    price: "₹5,000",
    details: "Perfect for agencies and larger businesses who want to offer digital business cards to their clients under their own brand."
  }
];

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'core', label: 'Core Services' },
  { id: 'premium', label: 'Premium Services' },
  { id: 'addon', label: 'Add-on Services' }
];

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a detailed consultation to understand your business, brand, and specific requirements."
  },
  {
    title: "Solution Design",
    description: "Our team designs a tailored solution based on your requirements, selecting the right services and features for your needs."
  },
  {
    title: "Implementation",
    description: "We implement your digital business card solution, including setting up all selected services and features."
  },
  {
    title: "Training & Onboarding",
    description: "We provide comprehensive training to ensure you can make the most of your digital business cards."
  },
  {
    title: "Ongoing Support",
    description: "Our team provides ongoing support and assistance to ensure your digital business cards continue to perform optimally."
  }
];

const testimonials = [
  {
    quote: "LitPages transformed how we share contact information. Our clients love the professional look and convenience of our digital business cards.",
    author: "Priya Mehta",
    company: "InnovateDesign Inc.",
    role: "Marketing Director"
  },
  {
    quote: "The analytics feature has been a game-changer for our sales team. We can now see exactly who's engaging with our business cards and follow up effectively.",
    author: "Aarav Sharma",
    company: "TechSolutions Ltd.",
    role: "Sales Manager"
  },
  {
    quote: "The custom design service was worth every penny. Our digital business cards perfectly reflect our brand identity and have received countless compliments.",
    author: "Neha Gupta",
    company: "Creative Visuals",
    role: "CEO"
  }
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
      
      {/* Service Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="premium-card p-8 text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-3">Digital Identity Solutions</h3>
          <p className="text-muted-foreground">Create a professional digital identity that represents your brand and makes a lasting impression.</p>
        </div>
        <div className="premium-card p-8 text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <BarChart className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-3">Data-Driven Insights</h3>
          <p className="text-muted-foreground">Make informed decisions with comprehensive analytics and insights about your digital business cards.</p>
        </div>
        <div className="premium-card p-8 text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Settings className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-3">Custom Solutions</h3>
          <p className="text-muted-foreground">Get tailored solutions that perfectly match your specific business requirements and goals.</p>
        </div>
      </div>
      
      {/* Services Tabs */}
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
      
      {/* Our Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Service Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative premium-card p-6 text-center flex flex-col items-center">
              <div className="absolute -top-5 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-medium mt-6 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 rotate-0 md:rotate-[-20deg]">
                  <svg width="40" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="premium-card p-8 flex flex-col">
              <div className="mb-4 text-primary">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.17,6L10.17,4H6.98L6,6H9.17ZM21.29,6.02L19.36,10H16.96L18.96,6.02H14.97L13,10H10.5L12.5,6.02H8.5L3.5,16H20.5L21.29,6.02Z" fill="currentColor" />
                </svg>
              </div>
              <p className="mb-6 flex-grow italic text-muted-foreground">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="premium-card p-6">
            <h3 className="text-xl font-medium mb-2">How long does it take to set up a digital business card?</h3>
            <p className="text-muted-foreground">With our core services, you can have your digital business card up and running in less than 30 minutes. Custom design services typically take 2-3 business days depending on complexity.</p>
          </div>
          <div className="premium-card p-6">
            <h3 className="text-xl font-medium mb-2">Can I update my digital business card after it's created?</h3>
            <p className="text-muted-foreground">Absolutely! You can update your digital business card anytime through our user-friendly dashboard. Changes are reflected immediately.</p>
          </div>
          <div className="premium-card p-6">
            <h3 className="text-xl font-medium mb-2">Do you offer bulk discounts for teams?</h3>
            <p className="text-muted-foreground">Yes, we offer special pricing for teams of 5 or more. Contact our sales team for a custom quote tailored to your team's specific needs.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 text-center mb-20">
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
