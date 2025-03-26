
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Choose a template',
    description: 'Browse our collection and select a template that matches your business needs.'
  },
  {
    number: '02',
    title: 'Customize your site',
    description: 'We help you add your content, images, and brand colors to make it uniquely yours.'
  },
  {
    number: '03',
    title: 'Launch with confidence',
    description: 'Your website goes live instantly with our help. Get online in minutes, not months.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
            Simple three-step process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your professional website up and running with minimal effort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary hidden md:block" aria-hidden="true"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="premium-card p-8 flex flex-col items-start relative z-10 bg-white"
            >
              <div className="text-3xl font-display font-bold text-black/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#pricing" 
            className="button-primary group inline-flex items-center gap-2 text-base font-medium"
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
