
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { Monitor, Smartphone, Brush, Gauge, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: <Monitor className="h-10 w-10 text-primary" />,
    title: "Responsive Design",
    description: "Our templates are designed to look great on all devices, from desktops to mobile phones."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Optimized",
    description: "Fast loading times and optimal viewing experience on smartphones and tablets."
  },
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: "Customizable",
    description: "Easily customize colors, fonts, and layouts to match your brand identity."
  },
  {
    icon: <Gauge className="h-10 w-10 text-primary" />,
    title: "Performance Focused",
    description: "Optimized for speed and performance to ensure your website loads quickly."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure & Reliable",
    description: "Built with security best practices to keep your website and visitors safe."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "User-Friendly",
    description: "Intuitive navigation and user experience to keep visitors engaged."
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

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl font-display font-bold text-gradient-primary mb-4">
          Features
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the powerful features that make our website templates stand out from the competition.
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
            {features.map((feature, index) => (
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
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
