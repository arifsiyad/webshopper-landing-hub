
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    answer: "The ₹1,500 is a one-time payment for the website setup. You'll only need to pay for your domain registration and hosting separately, which typically costs around ₹1,000-2,000 per year."
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
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our pre-built websites.
          </p>
        </div>
        
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
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="button-secondary inline-block text-base font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
