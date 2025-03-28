
import React from 'react';
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does it take to set up my website?",
    answer: "Once you've selected a template and provided your content, we can have your website up and running within 24-48 hours."
  },
  {
    question: "Can I use my own domain name?",
    answer: "Yes, you can use your existing domain or we can help you register a new one. We'll handle all the technical setup for you."
  },
  {
    question: "Are there any monthly fees?",
    answer: "The one-time payment covers the website setup. You'll only need to pay for your domain registration and hosting separately, which typically costs around ₹1,000-2,000 per year."
  },
  {
    question: "Can I add more pages later?",
    answer: "Yes, additional pages can be added at a cost of ₹300 per page. We'll ensure they match the design of your existing website."
  },
  {
    question: "Do you provide website hosting?",
    answer: "We don't provide hosting directly, but we can recommend reliable hosting providers and help you set everything up."
  },
  {
    question: "What if I need changes after the website is launched?",
    answer: "We offer a week of free support for minor text and image changes. After that, we offer maintenance packages or hourly rates for updates."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our templates are fully responsive and optimized for mobile devices, tablets, and desktops."
  },
  {
    question: "Can I see examples of websites you've created?",
    answer: "Yes, you can browse our template collection to see examples of our work. We also have a portfolio of client websites we've customized."
  },
  {
    question: "Do you help with content creation?",
    answer: "We can provide basic content assistance, but for comprehensive content creation, we recommend working with a professional copywriter. We can refer you to our network of trusted partners."
  },
  {
    question: "How secure are your websites?",
    answer: "Security is a top priority. We implement best practices for website security, including SSL certificates, secure forms, and regular updates to protect against vulnerabilities."
  },
  {
    question: "Do you offer SEO services?",
    answer: "Our templates are built with SEO best practices. For more advanced SEO strategies, we offer additional services to help improve your search engine rankings."
  },
  {
    question: "Can I update the website myself?",
    answer: "Depending on your technical comfort level, we can set up a content management system (CMS) that allows you to make basic updates yourself. We also offer training sessions to help you learn how to manage your site."
  }
];

const FAQPage = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl font-display font-bold text-gradient-primary mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our templates, services, and process.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mb-16">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="premium-card px-6 border-none"
            >
              <AccordionTrigger className="text-left py-4 font-medium text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          If you couldn't find the answer to your question, our team is here to help. Contact us and we'll get back to you as soon as possible.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" size="lg">
            <a href="mailto:support@litpages.com">Email Support</a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
