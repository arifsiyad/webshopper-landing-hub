
import { Zap, Clock, Paintbrush, Globe, Smartphone, Users, BarChart, Shield, Share2 } from 'lucide-react';

const features = [
  {
    title: 'Websites',
    description: 'Create beautiful websites that can be shared instantly via links and social media.',
    icon: Share2,
  },
  {
    title: 'Customizable Templates',
    description: 'Choose from 10+ beautiful templates and customize colors, fonts, and content.',
    icon: Paintbrush,
  },
  {
    title: 'Mobile Responsive',
    description: 'All websites work perfectly on all devices, from desktops to smartphones.',
    icon: Smartphone,
  },
  {
    title: 'Social Media Integration',
    description: 'Connect all your social profiles in one place for easy access.',
    icon: Globe,
  },
  {
    title: 'Business Hours',
    description: 'Display your business hours so customers know when you\'re available.',
    icon: Clock,
  },
  {
    title: 'Inquiry Management',
    description: 'Receive and manage inquiries directly through your website.',
    icon: BarChart,
  },
  {
    title: 'User Management',
    description: 'Admins can manage users, view statistics, and control access.',
    icon: Users,
  },
  {
    title: 'Analytics & Insights',
    description: 'Track views, clicks, and engagement on your websites.',
    icon: Shield,
  },
  {
    title: 'Instant Updates',
    description: 'Update your information anytime and see changes reflected instantly.',
    icon: Zap,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-secondary/30 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary dark:text-white">
            Powerful website features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto dark:text-gray-400">
            Our websites come packed with features to help you stand out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="premium-card p-8 flex flex-col items-start dark:bg-gray-900 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-gray-800 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary dark:text-gray-200" />
              </div>
              <h3 className="text-xl font-medium mb-3 dark:text-white">{feature.title}</h3>
              <p className="text-muted-foreground dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
