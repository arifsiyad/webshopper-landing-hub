
import { Check, Zap, Clock, Paintbrush, Globe, Smartphone } from 'lucide-react';

const features = [
  {
    title: 'Ready to Launch',
    description: 'Each template is fully responsive and ready for immediate launch, saving you time and effort.',
    icon: Zap,
  },
  {
    title: 'Quick Setup',
    description: 'Get your website up and running in minutes, not days or weeks.',
    icon: Clock,
  },
  {
    title: 'Customizable Design',
    description: 'Easily customize colors, fonts, and content to match your brand.',
    icon: Paintbrush,
  },
  {
    title: 'Mobile Responsive',
    description: 'Every website looks perfect on all devices, from desktops to smartphones.',
    icon: Smartphone,
  },
  {
    title: 'SEO Optimized',
    description: 'Built with best practices for search engines to help your site rank higher.',
    icon: Globe,
  },
  {
    title: 'Custom Domain',
    description: 'Use your own domain name or we can help you register a new one.',
    icon: Check,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
            Everything you need to succeed online
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our templates come packed with features to make your website stand out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="premium-card p-8 flex flex-col items-start"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-black/5 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
