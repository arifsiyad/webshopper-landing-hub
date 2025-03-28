
import React from 'react';
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl font-display font-bold text-gradient-primary mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to our team and we'll be happy to help.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Fill out the form and we'll get back to you as soon as possible. We're here to help with any questions you might have.
          </p>
          
          <div className="space-y-6">
            <Card className="premium-card">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center dark:bg-white/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:contact@litpages.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@litpages.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="premium-card">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center dark:bg-white/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="premium-card">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center dark:bg-white/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Tech Park, Koramangala<br />
                    Bangalore, Karnataka 560034
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="premium-card p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What is this regarding?" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="How can we help you?" 
                rows={5} 
                required 
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
