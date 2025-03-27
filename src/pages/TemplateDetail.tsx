
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const templates = [
  {
    id: 1,
    title: 'Modern Business',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    popular: true,
    price: '₹1,200',
    features: ['Responsive Design', 'Contact Form', 'About Section', 'Services Page', 'Portfolio Gallery'],
    description: 'Perfect for small businesses and startups looking for a professional online presence.',
    detailedDescription: 'This template is designed specifically for businesses looking to establish a strong online presence. With a modern and clean layout, it offers sections for showcasing your services, team members, and previous work. The responsive design ensures your site looks great on any device, from desktop to mobile.',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    ]
  },
  {
    id: 2,
    title: 'Creative Portfolio',
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    popular: false,
    price: '₹1,500',
    features: ['Project Showcase', 'Gallery View', 'Skills Display', 'Client Testimonials', 'Contact Information'],
    description: 'Showcase your creative work with this elegant portfolio template.',
    detailedDescription: 'The Creative Portfolio template is perfect for designers, photographers, artists, and other creative professionals. It features a stunning gallery to showcase your work, along with sections for your skills, client testimonials, and contact information. The minimalist design puts the focus on your creative pieces.',
    screenshots: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    ]
  },
  // Add more templates with detailed information
];

const TemplateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const template = templates.find(t => t.id === Number(id));

  if (!template) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
        <p className="mb-6">The template you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/templates">Back to Templates</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-6">
        <Button asChild variant="outline">
          <Link to="/templates" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Templates
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="aspect-video overflow-hidden rounded-lg mb-4">
            <img 
              src={template.image} 
              alt={template.title} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {template.screenshots.map((screenshot, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={screenshot} 
                  alt={`${template.title} screenshot ${index + 1}`} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{template.title}</h1>
          <p className="text-muted-foreground mb-6">{template.description}</p>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{template.price}</h2>
            <p className="text-sm text-muted-foreground">one-time payment</p>
          </div>

          <p className="mb-6">{template.detailedDescription}</p>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Features Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Button asChild size="lg" className="w-full">
            <Link to="/register">
              Purchase This Template <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetail;
