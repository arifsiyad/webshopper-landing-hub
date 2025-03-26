
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Create your account',
    description: 'Register and verify your email to gain access to your admin dashboard.'
  },
  {
    number: '02',
    title: 'Choose a template',
    description: 'Select from our 10 professional website templates that match your style.'
  },
  {
    number: '03',
    title: 'Customize & share',
    description: 'Add your information, customize colors, and share your website instantly.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary dark:text-white">
            Simple three-step process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto dark:text-gray-400">
            Get your website up and running in minutes, not days.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary dark:bg-gray-700 hidden md:block" aria-hidden="true"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="premium-card p-8 flex flex-col items-start relative z-10 bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="text-3xl font-display font-bold text-black/10 dark:text-white/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-medium mb-3 dark:text-white">{step.title}</h3>
              <p className="text-muted-foreground dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#pricing" 
            className="button-primary group inline-flex items-center gap-2 text-base font-medium dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
