
import { Smartphone, Users, BarChart, Mail, Settings, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Smartphone,
    title: "Digital Business Cards",
    description: "Create beautiful digital business cards that can be shared via QR code, link, or NFC technology."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage multiple team members and their digital business cards from a single dashboard."
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Track views, clicks, and engagement with your digital business cards to optimize performance."
  },
  {
    icon: Mail,
    title: "Inquiry Management",
    description: "Receive and respond to inquiries directly through your digital business card."
  },
  {
    icon: Settings,
    title: "Customization Services",
    description: "Need extra help? Our team can customize your digital business card to match your brand exactly."
  },
  {
    icon: ShieldCheck,
    title: "Technical Support",
    description: "Get technical support and assistance whenever you need it from our dedicated support team."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            LitPages offers a range of services to help you make the most of your digital business cards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="premium-card p-8 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-16 w-16 rounded-full bg-black/5 flex items-center justify-center mb-6 dark:bg-white/10">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
