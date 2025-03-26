
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Templates' },
  { id: 'business', label: 'Business' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'blog', label: 'Blog' },
];

const templates = [
  {
    id: 1,
    title: 'Modern Business',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    popular: true
  },
  {
    id: 2,
    title: 'Creative Portfolio',
    category: 'portfolio',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    popular: false
  },
  {
    id: 3,
    title: 'E-Commerce Shop',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    popular: true
  },
  {
    id: 4,
    title: 'Personal Blog',
    category: 'blog',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    popular: false
  },
  {
    id: 5,
    title: 'Corporate Site',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    popular: true
  },
  {
    id: 6,
    title: 'Artist Portfolio',
    category: 'portfolio',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    popular: false
  },
];

const TemplateCard = ({ template }: { template: typeof templates[0] }) => {
  return (
    <div className="premium-card group cursor-pointer">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={template.image} 
          alt={template.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {template.popular && (
          <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium">{template.title}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">₹1,500</span>
          <button className="text-sm font-medium hover:underline">View Demo</button>
        </div>
      </div>
    </div>
  );
};

const Templates = () => {
  const [category, setCategory] = useState('all');
  
  const filteredTemplates = category === 'all' 
    ? templates 
    : templates.filter(template => template.category === category);

  return (
    <section id="templates" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
            Stunning templates for every need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of professionally designed templates ready for your business.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setCategory}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-secondary/50 p-1">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className={cn(
                    "text-sm font-medium px-4 py-2 transition-all",
                    category === cat.id ? "bg-white shadow-sm" : "hover:bg-white/40"
                  )}
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map(template => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Templates;
