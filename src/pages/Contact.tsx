import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-sage-light">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions about organic living or want to collaborate? 
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-card">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Other Ways to Reach Us
                </h2>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a 
                    href="https://whatsapp.com/channel/0029VbBWzFh7YSd57xGOL41I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover-lift group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MessageCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp Channel</h3>
                      <p className="text-muted-foreground text-sm">
                        Join our community for daily wellness tips and updates.
                      </p>
                      <span className="text-primary text-sm font-medium mt-2 inline-block">
                        Join HealthMantra →
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm">
                        For business inquiries and collaborations.
                      </p>
                      <span className="text-foreground text-sm mt-2 inline-block">
                        hello@healthmantra.com
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-xl bg-earth/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-earth" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Based In</h3>
                      <p className="text-muted-foreground text-sm">
                        India - Serving wellness enthusiasts worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* FAQ Note */}
              <div className="p-6 bg-sage-light rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">
                  Looking for Quick Answers?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check out our blog posts for detailed information about herbs, 
                  wellness practices, and organic living tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
