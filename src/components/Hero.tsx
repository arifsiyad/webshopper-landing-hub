
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-6 animate-fade-in">
          <div className="inline-flex items-center justify-center rounded-full bg-secondary px-3 py-1 text-sm">
            <span className="text-primary/80">Digital Business Cards for Modern Professionals</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight max-w-4xl text-gradient-primary">
            Create stunning digital business cards in minutes
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-2">
            Get professionally designed digital business cards starting at just ₹1,500. Customize and share your online presence instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to="/register" className="button-primary group text-base font-medium flex items-center gap-2">
              Create Your VCard
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="#how-it-works" className="button-secondary text-base font-medium">
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
