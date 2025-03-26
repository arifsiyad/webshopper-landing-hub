
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', label: 'All Templates' },
  { id: 'business', label: 'Business' },
  { id: 'professional', label: 'Professional' },
  { id: 'creative', label: 'Creative' },
  { id: 'personal', label: 'Personal' },
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
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    popular: false
  },
  {
    id: 3,
    title: 'Entrepreneur',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    popular: true
  },
  {
    id: 4,
    title: 'Personal Brand',
    category: 'personal',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    popular: false
  },
  {
    id: 5,
    title: 'Corporate',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    popular: true
  },
  {
    id: 6,
    title: 'Freelancer',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    popular: false
  },
];

const TemplateCard = ({ template }: { template: typeof templates[0] }) => {
  return (
    <div className="premium-card group cursor-pointer dark:bg-gray-800 dark:border-gray-700">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={template.image} 
          alt={template.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {template.popular && (
          <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full dark:bg-gray-700">
            Popular
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium dark:text-white">{template.title}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground dark:text-gray-400">Website Template</span>
          <Link to="/register" className="text-sm font-medium hover:underline dark:text-gray-300">Try Now</Link>
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
    <section id="templates" className="py-24 px-4 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary dark:text-white">
            10+ stunning website templates
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto dark:text-gray-400">
            Choose from our collection of professionally designed website templates.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setCategory}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-secondary/50 dark:bg-gray-800 p-1">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className={cn(
                    "text-sm font-medium px-4 py-2 transition-all",
                    category === cat.id 
                      ? "bg-white shadow-sm dark:bg-gray-700 dark:text-white" 
                      : "hover:bg-white/40 dark:hover:bg-gray-700/40"
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
