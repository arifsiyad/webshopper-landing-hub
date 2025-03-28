
import React from 'react';
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "₹1,200",
    description: "Perfect for individuals looking to establish an online presence.",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Contact form",
      "3 months of support",
      "Custom domain setup",
      "Basic SEO optimization"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "₹2,500",
    description: "Ideal for small businesses and professional services.",
    features: [
      "Multi-page website (up to 5 pages)",
      "Mobile responsive design",
      "Contact form with inquiry management",
      "6 months of support",
      "Custom domain setup",
      "Advanced SEO optimization",
      "Social media integration",
      "Google Analytics setup"
    ],
    popular: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: "₹4,800",
    description: "Complete solution for growing businesses with advanced needs.",
    features: [
      "Multi-page website (up to 10 pages)",
      "Mobile responsive design",
      "Advanced contact forms and CRM integration",
      "12 months of support",
      "Custom domain setup",
      "Premium SEO optimization",
      "Social media integration",
      "Google Analytics and Search Console setup",
      "E-commerce functionality",
      "Content management system"
    ],
    popular: false,
    buttonText: "Get Started"
  }
];

const PricingPage = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl font-display font-bold text-gradient-primary mb-4">
          Pricing Plans
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include our high-quality templates and exceptional support.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`premium-card p-6 flex flex-col h-full transition-all hover:shadow-lg relative ${
              plan.popular ? 'border-primary/50 shadow-md' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">
                Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground"> one-time</span>
            </div>
            <p className="text-muted-foreground mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="w-full mt-auto" 
              variant={plan.popular ? "default" : "outline"}
              asChild
            >
              <Link to="/register">{plan.buttonText}</Link>
            </Button>
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Plan?</h2>
        <p className="text-muted-foreground mb-6">
          We offer custom solutions for specific requirements. Contact our team to discuss your needs and get a personalized quote.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
