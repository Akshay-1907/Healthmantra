import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-semibold">
                HealthMantra
              </span>
            </Link>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed">
              Promoting organic living for a better life. We believe in the power of nature 
              to heal and nourish. Join us on this journey to wellness.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://whatsapp.com/channel/0029VbBWzFh7YSd57xGOL41I" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/posts" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/posts?category=herbs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Herbs & Remedies
                </Link>
              </li>
              <li>
                <Link to="/posts?category=fruits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Healthy Fruits
                </Link>
              </li>
              <li>
                <Link to="/posts?category=wellness" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Wellness Tips
                </Link>
              </li>
              <li>
                <Link to="/posts?category=lifestyle" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} HealthMantra. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Made with 🌿 for a healthier world
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
