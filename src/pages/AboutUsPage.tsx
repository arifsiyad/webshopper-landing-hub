
import React from 'react';
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in web development, Rajesh founded LitPages to help small businesses create professional online presence.",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    bio: "Priya brings her artistic vision and UX expertise to create beautiful, user-friendly templates that stand out.",
    avatar: "https://i.pravatar.cc/150?img=25"
  },
  {
    name: "Vikram Singh",
    role: "Technical Lead",
    bio: "Vikram ensures all our templates are optimized for performance, security, and SEO to give your website the best chance of success.",
    avatar: "https://i.pravatar.cc/150?img=15"
  },
  {
    name: "Ananya Patel",
    role: "Customer Success",
    bio: "Ananya is dedicated to helping our customers get the most out of their websites and resolve any issues promptly.",
    avatar: "https://i.pravatar.cc/150?img=33"
  }
];

const AboutUsPage = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl font-display font-bold text-gradient-primary mb-4">
          About Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get to know the team behind LitPages and our mission to make professional web presence accessible to all.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            LitPages was founded in 2022 with a simple mission: make professional web presence accessible to everyone, regardless of technical skills or budget.
          </p>
          <p className="text-muted-foreground mb-4">
            We noticed that many small businesses and professionals struggle to create websites that truly represent their brand. Many either settle for generic templates or overspend on custom development.
          </p>
          <p className="text-muted-foreground">
            Our solution bridges this gap with high-quality, affordable templates that look custom-built but require minimal setup. We're proud to have helped thousands of businesses establish their online presence.
          </p>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="premium-card overflow-hidden hover:shadow-lg transition-all">
              <CardHeader className="pb-0">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
