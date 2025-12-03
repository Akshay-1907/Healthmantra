import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Users, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { posts } from '@/data/posts';
import heroImage from '@/assets/hero-wellness.jpg';

const features = [
  {
    icon: Leaf,
    title: 'Organic Herbs',
    description: 'Discover the healing power of traditional herbs like Tulsi, Turmeric, and Ashwagandha.'
  },
  {
    icon: Heart,
    title: 'Healthy Living',
    description: 'Tips and guidance for incorporating wellness practices into your daily routine.'
  },
  {
    icon: Users,
    title: 'Supporting Farmers',
    description: 'We connect you with farmers growing organic medicinal plants sustainably.'
  },
  {
    icon: Sprout,
    title: 'Ayurvedic Wisdom',
    description: 'Ancient knowledge meets modern science for holistic health solutions.'
  }
];

const Index = () => {
  const featuredPosts = posts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Organic herbs and wellness" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/40" />
        </div>
        
        <div className="container-page relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Leaf className="w-4 h-4" />
              Welcome to HealthMantra
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up delay-100">
              Organic Living for a{' '}
              <span className="text-cream">Better Life</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up delay-200">
              Discover the power of nature through organic products, traditional herbs, 
              and time-tested Ayurvedic wisdom. Join our community dedicated to healthy, 
              sustainable living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/posts">
                  Explore Articles
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-sage-light leaf-pattern">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              HealthMantra is your guide to organic living, connecting ancient wisdom with modern wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-card p-6 rounded-xl border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Latest Articles
              </h2>
              <p className="text-muted-foreground">
                Explore our latest insights on herbs, wellness, and organic living.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/posts">
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-nature">
        <div className="container-page">
          <div className="bg-forest rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Our WhatsApp Community
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Get daily wellness tips, herb benefits, and exclusive content delivered 
              straight to your WhatsApp. Join thousands of health enthusiasts!
            </p>
            <Button variant="hero" size="xl" className="bg-cream text-forest hover:bg-cream/90" asChild>
              <a 
                href="https://whatsapp.com/channel/0029VaYjYaS9Gv7lWhwn1E0w" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join HealthMantra Channel
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
