
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    title: "Basic",
    price: "₹1,500",
    description: "Perfect for individuals",
    features: [
      "1 Digital Business Card",
      "5 Standard Templates",
      "Basic Customization",
      "Social Media Links",
      "Contact Information",
      "1 Month Support",
      "Analytics Dashboard",
      "Email Inquiries"
    ],
    popular: false
  },
  {
    title: "Professional",
    price: "₹3,500",
    description: "Ideal for professionals",
    features: [
      "3 Digital Business Cards",
      "All 10 Templates",
      "Full Customization",
      "Social Media Integration",
      "Business Hours",
      "Custom Inquiry Form",
      "3 Months Support",
      "Advanced Analytics",
      "Priority Support"
    ],
    popular: true
  },
  {
    title: "Business",
    price: "₹6,000",
    description: "Best for small businesses",
    features: [
      "10 Digital Business Cards",
      "All Templates",
      "Premium Customization",
      "Team Management",
      "API Access",
      "Dedicated Account Manager",
      "12 Months Support",
      "Custom Domain",
      "Advanced Analytics",
      "Priority Support"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
            Choose your plan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your needs with transparent pricing and no hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`premium-card overflow-hidden ${plan.popular ? 'ring-2 ring-black' : ''}`}>
              {plan.popular && (
                <div className="bg-black text-white py-1 px-3 text-xs uppercase font-medium text-center">
                  Most Popular
                </div>
              )}
              <div className={`p-8 text-center ${plan.popular ? 'bg-gradient-to-r from-black to-gray-800 text-white' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className={plan.popular ? "text-white/70" : "text-muted-foreground"}>one-time</span>
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="bg-black/5 rounded-full p-1 mt-0.5">
                        <Check className="h-4 w-4 text-black" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link 
                    to="/register" 
                    className={`w-full flex justify-center text-base font-medium py-3 rounded-full transition-all ${
                      plan.popular 
                      ? "bg-black text-white hover:bg-black/90" 
                      : "bg-white border border-black/10 text-black hover:bg-secondary"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
