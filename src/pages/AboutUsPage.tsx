
import React from 'react';
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Heart, Landmark, GraduationCap, Briefcase, Award } from 'lucide-react';

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
  },
  {
    name: "Rohan Kapoor",
    role: "Marketing Director",
    bio: "Rohan drives our marketing strategy, ensuring that LitPages reaches businesses that can benefit from our services.",
    avatar: "https://i.pravatar.cc/150?img=60"
  },
  {
    name: "Meera Joshi",
    role: "Product Manager",
    bio: "Meera oversees product development, ensuring our features meet customer needs and stay ahead of industry trends.",
    avatar: "https://i.pravatar.cc/150?img=41"
  },
  {
    name: "Arjun Malhotra",
    role: "Business Development",
    bio: "Arjun builds strategic partnerships and explores new market opportunities to drive LitPages' growth.",
    avatar: "https://i.pravatar.cc/150?img=52"
  },
  {
    name: "Neha Singh",
    role: "UI/UX Designer",
    bio: "Neha creates intuitive and engaging user experiences that make our digital business cards a joy to use.",
    avatar: "https://i.pravatar.cc/150?img=45"
  }
];

const values = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Customer Focus",
    description: "We put our customers at the center of everything we do. Their success is our success."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: "Quality Excellence",
    description: "We're committed to delivering high-quality products and services that exceed expectations."
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical business practices in all our interactions."
  }
];

const milestones = [
  {
    year: "2019",
    title: "Company Founding",
    description: "LitPages was founded with a vision to revolutionize how professionals share contact information."
  },
  {
    year: "2020",
    title: "First Product Launch",
    description: "Launched our first version of digital business cards with basic customization options."
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 15 members and introduced advanced analytics and team management features."
  },
  {
    year: "2022",
    title: "Mobile App Launch",
    description: "Released our mobile app for Android and iOS, making digital business card management even easier."
  },
  {
    year: "2023",
    title: "International Expansion",
    description: "Expanded our services to international markets and added support for multiple languages."
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
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            LitPages was founded in 2019 with a simple mission: make professional web presence accessible to everyone, regardless of technical skills or budget.
          </p>
          <p className="text-muted-foreground mb-4">
            We noticed that many small businesses and professionals struggle to create websites that truly represent their brand. Many either settle for generic templates or overspend on custom development.
          </p>
          <p className="text-muted-foreground mb-6">
            Our solution bridges this gap with high-quality, affordable templates that look custom-built but require minimal setup. We're proud to have helped thousands of businesses establish their online presence.
          </p>
          <div className="flex gap-4">
            <Link to="/services">
              <Button>Our Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="premium-card p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            To empower professionals and businesses with innovative digital solutions that enhance their networking and brand representation in an increasingly digital world.
          </p>
          <p className="text-muted-foreground">
            We believe that everyone deserves access to professional digital tools without the complexity or high costs traditionally associated with them.
          </p>
        </div>
        <div className="premium-card p-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground mb-4">
            To become the global leader in digital identity solutions, making traditional business cards obsolete and replacing them with more effective, sustainable, and dynamic digital alternatives.
          </p>
          <p className="text-muted-foreground">
            We envision a world where professionals connect seamlessly through digital means, reducing paper waste while enhancing networking experiences.
          </p>
        </div>
      </div>
      
      {/* Core Values */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="premium-card p-8 text-center">
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Company Timeline */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div className="premium-card p-6 md:p-8 max-w-md">
                    <div className="text-xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-5 h-5 rounded-full bg-primary"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Meet Our Team */}
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
      
      {/* Achievements Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="premium-card p-8">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-3">10,000+</h3>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div className="premium-card p-8">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-3">98%</h3>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </div>
          <div className="premium-card p-8">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-3">15+</h3>
            <p className="text-muted-foreground">Countries Served</p>
          </div>
        </div>
      </div>
      
      {/* Join Our Team */}
      <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 text-center mb-20">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="text-muted-foreground mb-6">
          We're always looking for talented individuals to join our team. Check out our current openings or send us your resume for future opportunities.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">View Openings</Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
