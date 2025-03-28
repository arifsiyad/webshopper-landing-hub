import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import Footer from "@/components/Footer";

const categories = [
  { id: 'all', label: 'All Templates' },
  { id: 'business', label: 'Business' },
  { id: 'professional', label: 'Professional' },
  { id: 'creative', label: 'Creative' },
  { id: 'personal', label: 'Personal' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'blog', label: 'Blog' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'landing', label: 'Landing Page' },
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
  {
    id: 7,
    title: 'E-commerce Store',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    popular: true,
    price: '₹2,500',
    features: ['Product Listings', 'Shopping Cart', 'Checkout Process', 'Product Categories', 'Search Functionality'],
    description: 'Complete e-commerce solution for online stores with easy product management.'
  },
  {
    id: 8,
    title: 'Blog Standard',
    category: 'blog',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
    popular: false,
    price: '₹900',
    features: ['Article Layout', 'Comment Section', 'Author Profile', 'Category Filtering', 'Search Function'],
    description: 'Clean and readable blog template for writers and content creators.'
  },
  {
    id: 9,
    title: 'Restaurant Menu',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    popular: true,
    price: '₹1,600',
    features: ['Menu Display', 'Food Categories', 'Gallery Section', 'Online Ordering', 'Reservation System'],
    description: 'Showcase your culinary delights with this appetizing restaurant template.'
  },
  {
    id: 10,
    title: 'Photography Portfolio',
    category: 'portfolio',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
    popular: false,
    price: '₹1,400',
    features: ['Photo Gallery', 'Masonry Layout', 'Lightbox Viewer', 'Album Categories', 'Client Proofing'],
    description: 'Display your photography with this stunning visual-centric template.'
  },
  {
    id: 11,
    title: 'Real Estate Listings',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    popular: true,
    price: '₹2,200',
    features: ['Property Listings', 'Property Search', 'Agent Profiles', 'Mortgage Calculator', 'Map Integration'],
    description: 'Perfect platform for real estate agents to showcase their property listings.'
  },
  {
    id: 12,
    title: 'Law Firm',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc',
    popular: false,
    price: '₹1,900',
    features: ['Practice Areas', 'Attorney Profiles', 'Case Results', 'Testimonials', 'Consultation Form'],
    description: 'Professional template for law firms that conveys trust and expertise.'
  },
  {
    id: 13,
    title: 'Health & Fitness',
    category: 'personal',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    popular: true,
    price: '₹1,300',
    features: ['Class Schedule', 'Trainer Profiles', 'Membership Plans', 'Fitness Blog', 'Contact Information'],
    description: 'Energetic template for fitness trainers, gyms, and wellness services.'
  },
  {
    id: 14,
    title: 'Educational',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    popular: false,
    price: '₹1,700',
    features: ['Course Catalog', 'Student Resources', 'Faculty Directory', 'Event Calendar', 'Enrollment Forms'],
    description: 'Comprehensive template for educational institutions and online learning platforms.'
  },
  {
    id: 15,
    title: 'Product Launch',
    category: 'landing',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    popular: true,
    price: '₹1,400',
    features: ['Product Showcase', 'Feature Highlights', 'Pre-order Form', 'Countdown Timer', 'Email Signup'],
    description: 'High-converting landing page for product launches and marketing campaigns.'
  },
  {
    id: 16,
    title: 'Digital Agency',
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    popular: false,
    price: '₹2,100',
    features: ['Service Descriptions', 'Project Gallery', 'Team Profiles', 'Client List', 'Process Overview'],
    description: 'Modern and sleek template for digital agencies and creative studios.'
  },
  {
    id: 17,
    title: 'Medical Practice',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
    popular: true,
    price: '₹1,800',
    features: ['Doctor Profiles', 'Service Descriptions', 'Appointment Scheduler', 'Patient Resources', 'Insurance Information'],
    description: 'Trustworthy template for medical practices, clinics, and healthcare providers.'
  },
  {
    id: 18,
    title: 'Travel Blog',
    category: 'blog',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee',
    popular: false,
    price: '₹1,100',
    features: ['Destination Guides', 'Travel Tips', 'Photo Gallery', 'Interactive Maps', 'Booking Links'],
    description: 'Share your adventures with this travel-focused blog template.'
  },
  {
    id: 19,
    title: 'Tech Startup',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    popular: true,
    price: '₹1,700',
    features: ['Product Features', 'Team Showcase', 'Investor Information', 'Tech Stack', 'Contact Form'],
    description: 'Dynamic template for technology startups and SaaS companies.'
  },
  {
    id: 20,
    title: 'Event & Conference',
    category: 'landing',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
    popular: false,
    price: '₹1,500',
    features: ['Speaker Profiles', 'Schedule Timeline', 'Registration Form', 'Venue Information', 'Sponsor Showcase'],
    description: 'Comprehensive template for conferences, workshops, and events.'
  },
  {
    id: 21,
    title: 'Food Blog',
    category: 'blog',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
    popular: true,
    price: '₹1,000',
    features: ['Recipe Cards', 'Category Navigation', 'Food Gallery', 'Print Option', 'Newsletter Signup'],
    description: 'Delicious template for food bloggers and culinary enthusiasts.'
  },
  {
    id: 22,
    title: 'Nonprofit Organization',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a',
    popular: false,
    price: '₹1,400',
    features: ['Mission Statement', 'Donation Form', 'Event Calendar', 'Volunteer Signup', 'Impact Stories'],
    description: 'Meaningful template for nonprofits, charities, and cause-driven organizations.'
  },
  {
    id: 23,
    title: 'Music Artist',
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    popular: true,
    price: '₹1,600',
    features: ['Music Player', 'Tour Dates', 'Merchandise Store', 'Photo Gallery', 'Video Integration'],
    description: 'Showcase your music and connect with fans using this artist-focused template.'
  },
  {
    id: 24,
    title: 'Interior Design',
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    popular: false,
    price: '₹1,700',
    features: ['Project Gallery', 'Service Offerings', 'Testimonials', 'Design Process', 'Contact Information'],
    description: 'Elegant template for interior designers and decoration services.'
  },
  {
    id: 25,
    title: 'Personal Trainer',
    category: 'personal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    popular: true,
    price: '₹1,200',
    features: ['Training Programs', 'Client Testimonials', 'Booking System', 'Fitness Tips', 'Progress Tracking'],
    description: 'Motivating template for personal trainers and fitness coaches.'
  },
  {
    id: 26,
    title: 'Coaching Services',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    popular: false,
    price: '₹1,300',
    features: ['Coaching Programs', 'About the Coach', 'Client Success Stories', 'Booking Calendar', 'Free Resources'],
    description: 'Inspiring template for life coaches, business coaches, and mentors.'
  },
  {
    id: 27,
    title: 'Software Documentation',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    popular: true,
    price: '₹1,800',
    features: ['Documentation Layout', 'Code Examples', 'Search Functionality', 'Version History', 'Interactive Examples'],
    description: 'Clear and organized template for software documentation and technical guides.'
  },
  {
    id: 28,
    title: 'Wedding',
    category: 'personal',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
    popular: false,
    price: '₹900',
    features: ['Wedding Details', 'Photo Gallery', 'RSVP Form', 'Registry Links', 'Travel Information'],
    description: 'Beautiful template for wedding websites and special event announcements.'
  },
  {
    id: 29,
    title: 'Mobile App Landing',
    category: 'landing',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    popular: true,
    price: '₹1,500',
    features: ['App Screenshots', 'Feature Highlights', 'Download Links', 'User Testimonials', 'FAQ Section'],
    description: 'High-converting landing page for mobile applications and digital products.'
  },
  {
    id: 30,
    title: 'Online Course',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    popular: false,
    price: '₹2,000',
    features: ['Course Outline', 'Instructor Bio', 'Student Reviews', 'Enrollment Process', 'Learning Resources'],
    description: 'Complete template for online courses, workshops, and educational products.'
  },
  {
    id: 31,
    title: 'Fashion Store',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    popular: true,
    price: '₹2,200',
    features: ['Product Catalog', 'Size Guide', 'Shopping Cart', 'Wishlist', 'Featured Collections'],
    description: 'Stylish template for fashion brands and clothing stores.'
  },
  {
    id: 32,
    title: 'Podcast',
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc',
    popular: false,
    price: '₹1,100',
    features: ['Episode Player', 'Show Notes', 'Guest Information', 'Subscription Links', 'Archive Search'],
    description: 'Dynamic template for podcasters and audio content creators.'
  }
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
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-12">
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
      
      <Footer />
    </div>
  );
};

export default TemplatesPage;
