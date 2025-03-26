
import { Check } from 'lucide-react';

const features = [
  "Professional design",
  "Responsive on all devices",
  "Domain setup assistance",
  "Customized content placement",
  "SEO optimization",
  "Social media integration",
  "Contact form setup",
  "1-week support",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a professional website at an affordable price with no hidden fees.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="premium-card overflow-hidden">
            <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Pre-built Website Package</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-display font-bold">₹1,500</span>
                <span className="text-white/70">one-time</span>
              </div>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-black/5 rounded-full p-1 mt-0.5">
                      <Check className="h-4 w-4 text-black" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="button-primary w-full flex justify-center text-base font-medium"
                >
                  Get Started
                </a>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                Additional customization available at extra cost
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
