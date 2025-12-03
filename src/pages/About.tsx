import { Leaf, Heart, Users, Target, ArrowRight, Monitor, Globe, Sparkles, Handshake } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import farmImage from '@/assets/organic-farm.jpg';
import founderImage from '@/assets/founder-akshay.jpg';

const values = [
  {
    icon: Leaf,
    title: 'Natural First',
    description: 'We believe nature has the answers to most health challenges. Our content focuses on organic, natural solutions.'
  },
  {
    icon: Heart,
    title: 'Holistic Wellness',
    description: 'Health is more than the absence of disease. We promote physical, mental, and spiritual wellbeing.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'We support farmers growing organic medicinal plants and build a community of health-conscious individuals.'
  },
  {
    icon: Target,
    title: 'Evidence-Based',
    description: 'While respecting traditional wisdom, we back our content with scientific research and evidence.'
  }
];

const purposes = [
  {
    icon: Target,
    title: 'To Promote a Healthy Lifestyle',
    description: 'Many IT students and tech workers live hectic, unhealthy lives. HealthMantra teaches simple, natural habits using herbs, fruits, and Ayurvedic wisdom.'
  },
  {
    icon: Leaf,
    title: 'To Make Organic Products Accessible',
    description: 'We aim to bring pure, chemical-free products like aloe vera, stevia, turmeric, tulsi, and ashwagandha directly to people.'
  },
  {
    icon: Handshake,
    title: 'To Support Farmers',
    description: 'We buy crops at fair and respectful prices. We encourage them to grow organic medicinal plants. When farmers grow, the entire community grows.'
  },
  {
    icon: Globe,
    title: 'To Combine Technology + Nature',
    description: 'With IT background, we are building a digital platform with online posts, education content, and global reach. Ayurveda + Technology = Modern Organic Wellness.'
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={farmImage} 
            alt="Organic farm" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/85" />
        </div>
        
        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              About HealthMantra
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed animate-fade-up delay-100">
              We are on a mission to bring the ancient wisdom of Ayurveda and organic living 
              to everyone, while supporting the farmers who make it possible.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-up">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={founderImage} 
                  alt="Akshay - Founder of HealthMantra" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
            </div>

            {/* Content */}
            <div className="animate-fade-up delay-100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Meet the Founder
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Akshay
              </h2>
              <p className="text-xl text-primary font-medium mb-6">
                Founder of HealthMantra
              </p>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p className="text-lg leading-relaxed">
                  Hi, I am <strong className="text-foreground">Akshay</strong>, and I welcome you to the HealthMantra journey — 
                  a movement toward organic living, natural healing, and a healthier lifestyle.
                </p>
                
                <p className="leading-relaxed">
                  Coming from an IT background, I spent years in a world of screens, deadlines, and digital pressure. 
                  During this time, I realized something important:
                </p>
                
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground bg-sage-light py-3 pr-4 rounded-r-lg">
                  Technology can build our future, but health builds our life.
                </blockquote>
                
                <p className="leading-relaxed">
                  I saw many students, professionals, and young people trapped in unhealthy routines — poor diet, stress, 
                  irregular sleep, and no awareness of natural remedies. At the same time, I saw farmers struggling, 
                  despite growing some of the most healing plants on earth.
                </p>
                
                <p className="leading-relaxed text-foreground font-medium">
                  That is where the idea for HealthMantra was born.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section-padding bg-sage-light">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Monitor className="w-4 h-4" />
              Especially for IT Students & Young Professionals
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Purpose of This Business
            </h2>
            <p className="text-muted-foreground text-lg">
              Building a bridge between technology and traditional wellness for the modern generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purposes.map((purpose, index) => (
              <div 
                key={purpose.title}
                className="bg-card p-8 rounded-xl border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <purpose.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {purpose.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {purpose.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                HealthMantra was born from a simple belief: that the path to wellness lies in returning 
                to our roots. In a world overwhelmed by synthetic solutions and quick fixes, we saw 
                the need to revive the time-tested wisdom of organic living and Ayurvedic practices.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our journey began when we witnessed the incredible transformation that natural herbs 
                and organic foods can bring to people's lives. From the healing power of Tulsi to 
                the golden benefits of Turmeric, we realized that these gifts of nature were being 
                overlooked in modern healthcare.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                But it was not just about sharing knowledge. We also saw farmers struggling to sustain 
                organic cultivation of medicinal plants. That is why HealthMantra is committed to 
                supporting these farmers by promoting their produce and connecting them with 
                health-conscious consumers.
              </p>
              <p className="text-lg leading-relaxed">
                Today, HealthMantra is more than just a website — it is a growing community of 
                individuals committed to organic living, sustainable practices, and holistic 
                wellness. Through our WhatsApp channel, blog posts, and resources, we continue 
                to spread the message of natural health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary">
        <div className="container-page">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-6 rounded-xl border border-border hover-lift animate-fade-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Community */}
      <section className="section-padding">
        <div className="container-page">
          <div className="bg-forest rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Our WhatsApp Community
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Be part of the HealthMantra family! Our WhatsApp channel delivers daily wellness tips, 
              herb benefits, seasonal health advice, and exclusive content directly to you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="xl" className="bg-cream text-forest hover:bg-cream/90" asChild>
                <a 
                  href="https://whatsapp.com/channel/0029VaYjYaS9Gv7lWhwn1E0w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Join WhatsApp Channel
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-sage-light">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To inspire and empower individuals to embrace organic living, reconnect with 
              nature's healing wisdom, and build a healthier future — while supporting the farmers 
              who cultivate our earth's precious medicinal plants."
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
