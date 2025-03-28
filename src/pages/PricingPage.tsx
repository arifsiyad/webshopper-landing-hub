
import React, { useState } from 'react';
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const basicFeatures = [
  "Single page website",
  "Mobile responsive design",
  "Contact form",
  "3 months of support",
  "Custom domain setup",
  "Basic SEO optimization"
];

const professionalFeatures = [
  "Multi-page website (up to 5 pages)",
  "Mobile responsive design",
  "Contact form with inquiry management",
  "6 months of support",
  "Custom domain setup",
  "Advanced SEO optimization",
  "Social media integration",
  "Google Analytics setup"
];

const enterpriseFeatures = [
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
];

const featureComparison = [
  {
    name: "Digital Business Cards",
    basic: true,
    professional: true,
    enterprise: true,
    tooltip: "Create and share digital business cards"
  },
  {
    name: "Custom Domain",
    basic: true,
    professional: true,
    enterprise: true,
    tooltip: "Use your own domain name for your digital business cards"
  },
  {
    name: "Mobile Responsive",
    basic: true,
    professional: true,
    enterprise: true,
    tooltip: "Cards adapt to any screen size"
  },
  {
    name: "QR Code Generation",
    basic: true,
    professional: true,
    enterprise: true,
    tooltip: "Generate QR codes for easy sharing"
  },
  {
    name: "Social Media Links",
    basic: true,
    professional: true,
    enterprise: true,
    tooltip: "Add links to your social media profiles"
  },
  {
    name: "Team Management",
    basic: false,
    professional: true,
    enterprise: true,
    tooltip: "Manage multiple team members and their cards"
  },
  {
    name: "Analytics",
    basic: false,
    professional: true,
    enterprise: true,
    tooltip: "Track views, clicks, and engagement"
  },
  {
    name: "Custom Branding",
    basic: false,
    professional: true,
    enterprise: true,
    tooltip: "Remove LitPages branding"
  },
  {
    name: "Priority Support",
    basic: false,
    professional: false,
    enterprise: true,
    tooltip: "Get priority support and faster response times"
  },
  {
    name: "Premium Templates",
    basic: false,
    professional: false,
    enterprise: true,
    tooltip: "Access to exclusive premium templates"
  },
  {
    name: "Custom Development",
    basic: false,
    professional: false,
    enterprise: true,
    tooltip: "Custom features and functionality"
  }
];

const faqs = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial for all our plans. No credit card required."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, we'll prorate the difference. If you downgrade, we'll apply any remaining credit to your next billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied with our service, contact us within 30 days of your purchase for a full refund."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. We also support UPI payments for our customers in India."
  }
];

const plans = [
  {
    name: "Basic",
    price: {
      monthly: "₹149",
      yearly: "₹1,200",
    },
    description: "Perfect for individuals looking to establish an online presence.",
    features: basicFeatures,
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: {
      monthly: "₹299",
      yearly: "₹2,500",
    },
    description: "Ideal for small businesses and professional services.",
    features: professionalFeatures,
    popular: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: {
      monthly: "₹499",
      yearly: "₹4,800",
    },
    description: "Complete solution for growing businesses with advanced needs.",
    features: enterpriseFeatures,
    popular: false,
    buttonText: "Get Started"
  }
];

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [viewType, setViewType] = useState<'cards' | 'table'>('cards');
  
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
      
      {/* Billing Toggle */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <Label htmlFor="billing-toggle" className={!isAnnual ? "font-bold" : ""}>Monthly</Label>
        <Switch 
          id="billing-toggle" 
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
        />
        <Label htmlFor="billing-toggle" className={isAnnual ? "font-bold" : ""}>
          Annual
          <span className="ml-1 inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-800 dark:text-green-100">
            Save 33%
          </span>
        </Label>
      </div>
      
      {/* View Toggle */}
      <div className="flex justify-center mb-12">
        <Tabs defaultValue="cards" onValueChange={(value) => setViewType(value as 'cards' | 'table')}>
          <TabsList>
            <TabsTrigger value="cards">Card View</TabsTrigger>
            <TabsTrigger value="table">Comparison View</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {viewType === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`h-full transition-all hover:shadow-lg relative overflow-hidden ${
                plan.popular ? 'border-primary/50 shadow-md' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{isAnnual ? plan.price.yearly : plan.price.monthly}</span>
                  <span className="text-muted-foreground"> {isAnnual ? '/year' : '/month'}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/register">{plan.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto mb-16">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-4 px-4 text-left font-bold">Features</th>
                <th className="py-4 px-4 text-center font-bold">Basic</th>
                <th className="py-4 px-4 text-center font-bold">Professional</th>
                <th className="py-4 px-4 text-center font-bold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-muted/30">
                <td className="py-4 px-4 font-medium">Price</td>
                <td className="py-4 px-4 text-center font-bold">{isAnnual ? "₹1,200/year" : "₹149/month"}</td>
                <td className="py-4 px-4 text-center font-bold">{isAnnual ? "₹2,500/year" : "₹299/month"}</td>
                <td className="py-4 px-4 text-center font-bold">{isAnnual ? "₹4,800/year" : "₹499/month"}</td>
              </tr>
              {featureComparison.map((feature, index) => (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-4 font-medium flex items-center gap-2">
                    {feature.name}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{feature.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.basic ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.professional ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.enterprise ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Enterprise Features */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Enterprise Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle>White Label Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Rebrand our platform with your company name and logo. Ideal for agencies and larger businesses.
              </p>
            </CardContent>
          </Card>
          <Card className="premium-card">
            <CardHeader>
              <CardTitle>API Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Integrate our digital business card platform with your existing systems through our comprehensive API.
              </p>
            </CardContent>
          </Card>
          <Card className="premium-card">
            <CardHeader>
              <CardTitle>Dedicated Account Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get personalized support from a dedicated account manager who understands your business needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="premium-card">
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Money-Back Guarantee */}
      <div className="max-w-3xl mx-auto p-8 border border-green-200 bg-green-50 rounded-lg text-center mb-20 dark:bg-green-900/20 dark:border-green-900/30">
        <h3 className="text-xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
        <p className="text-muted-foreground mb-0">
          Try any plan risk-free. If you're not completely satisfied within 30 days, we'll refund your payment. No questions asked.
        </p>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 text-center mb-20">
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
