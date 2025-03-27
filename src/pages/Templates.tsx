
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', label: 'All Templates' },
  { id: 'business', label: 'Business' },
  { id: 'professional', label: 'Professional' },
  { id: 'creative', label: 'Creative' },
  { id: 'personal', label: 'Personal' },
];

interface Template {
  id: number;
  title: string;
  category: string;
  image: string;
  popular: boolean;
  price: string;
  features: string[];
  description: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: 'Modern Business',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    popular: true,
    price: '₹1,200',
    features: ['Responsive Design', 'Contact Form', 'About Section', 'Services Page', 'Portfolio Gallery'],
    description: 'Perfect for small businesses and startups looking for a professional online presence.'
  },
  {
    id: 2,
    title: 'Creative Portfolio',
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    popular: false,
    price: '₹1,500',
    features: ['Project Showcase', 'Gallery View', 'Skills Display', 'Client Testimonials', 'Contact Information'],
    description: 'Showcase your creative work with this elegant portfolio template.'
  },
  {
    id: 3,
    title: 'Entrepreneur',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    popular: true,
    price: '₹1,800',
    features: ['Lead Generation', 'Service Listings', 'Testimonials', 'Call-to-Action Buttons', 'FAQ Section'],
    description: 'Designed for entrepreneurs who want to convert visitors into customers.'
  },
  {
    id: 4,
    title: 'Personal Brand',
    category: 'personal',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    popular: false,
    price: '₹1,000',
    features: ['Bio Section', 'Social Media Links', 'Resume Download', 'Blog Posts', 'Contact Form'],
    description: 'Build your personal brand with this modern and clean template.'
  },
  {
    id: 5,
    title: 'Corporate',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    popular: true,
    price: '₹2,000',
    features: ['Team Directory', 'Service Catalog', 'Client Logos', 'Case Studies', 'Newsletter Signup'],
    description: 'A professional template ideal for established businesses and corporations.'
  },
  {
    id: 6,
    title: 'Freelancer',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    popular: false,
    price: '₹1,300',
    features: ['Services Offered', 'Portfolio Gallery', 'Pricing Table', 'Client Testimonials', 'Contact Options'],
    description: 'Perfect for freelancers looking to attract new clients and showcase their work.'
  },
];

const TemplateCard = ({ template }: { template: Template }) => {
  return (
    <Card className="premium-card overflow-hidden transition-all hover:shadow-lg">
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
      <CardHeader>
        <CardTitle>{template.title}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="text-2xl font-bold">{template.price}</div>
          <p className="text-sm text-muted-foreground">one-time payment</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Features:</h4>
          <ul className="space-y-1">
            {template.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`/templates/${template.id}`} className="text-sm font-medium hover:underline">
          Preview
        </Link>
        <Button asChild>
          <Link to="/register">
            Purchase <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ComparisonTable = () => {
  return (
    <div className="w-full overflow-auto my-8">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Template</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Features</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.id}>
              <TableCell className="font-medium">
                {template.title}
                {template.popular && (
                  <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Popular
                  </span>
                )}
              </TableCell>
              <TableCell>{template.category}</TableCell>
              <TableCell>{template.price}</TableCell>
              <TableCell className="max-w-[300px] truncate">
                {template.features.slice(0, 3).join(', ')}
                {template.features.length > 3 && '...'}
              </TableCell>
              <TableCell className="text-right">
                <Button asChild variant="outline" size="sm">
                  <Link to={`/templates/${template.id}`}>
                    Preview
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const TemplatesPage = () => {
  const [category, setCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  const filteredTemplates = category === 'all' 
    ? templates 
    : templates.filter(template => template.category === category);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-gradient-primary mb-4">
          All Templates
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our collection of professionally designed templates for your digital business card.
          Each template is fully customizable to match your brand.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setCategory}>
          <TabsList className="w-full md:w-auto">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className={cn(
                  category === cat.id ? "bg-primary text-primary-foreground" : ""
                )}
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'grid' ? "default" : "outline"} 
            onClick={() => setViewMode('grid')}
            size="sm"
          >
            Grid View
          </Button>
          <Button 
            variant={viewMode === 'table' ? "default" : "outline"} 
            onClick={() => setViewMode('table')}
            size="sm"
          >
            Table View
          </Button>
        </div>
      </div>
      
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map(template => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      ) : (
        <ComparisonTable />
      )}
    </div>
  );
};

export default TemplatesPage;
