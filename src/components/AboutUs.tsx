
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-6">
              About LitPages
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              LitPages is a digital business card platform that empowers professionals and businesses to create stunning
              digital business cards that can be shared instantly via QR code, link, or NFC technology.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Founded in 2023, our mission is to eliminate paper waste from traditional business cards
              while providing a more interactive, engaging, and effective networking tool for the modern professional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Easy to Use</h3>
                  <p className="text-sm text-muted-foreground">Create your digital card in minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">No more paper waste from traditional cards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Always Updated</h3>
                  <p className="text-sm text-muted-foreground">Change details instantly when needed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Analytics</h3>
                  <p className="text-sm text-muted-foreground">Track engagement with your digital card</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital Business Card" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 -left-10 w-2/3 h-2/3 bg-secondary/50 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
