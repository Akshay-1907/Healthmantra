import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Facebook, Linkedin, Copy } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { getPostBySlug, posts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import { useToast } from '@/hooks/use-toast';

// Import images
import tulsiImage from '@/assets/tulsi-herb.jpg';
import turmericImage from '@/assets/turmeric-herb.jpg';
import aloeImage from '@/assets/aloe-vera.jpg';
import ashwagandhaImage from '@/assets/ashwagandha.jpg';
import fruitsImage from '@/assets/healthy-fruits.jpg';
import farmImage from '@/assets/organic-farm.jpg';

const imageMap: Record<string, string> = {
  tulsi: tulsiImage,
  turmeric: turmericImage,
  aloe: aloeImage,
  ashwagandha: ashwagandhaImage,
  fruits: fruitsImage,
  wellness: farmImage,
};

const PostDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <div className="container-page section-padding text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button variant="default" asChild>
            <Link to="/posts">Back to Posts</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const imageSrc = imageMap[post.image] || farmImage;
  const relatedPosts = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2);
  
  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link Copied!",
        description: "The article link has been copied to your clipboard.",
      });
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  // Simple markdown-like content renderer
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={elements.length} className={listType === 'ul' ? 'list-disc list-inside space-y-2 my-4 text-foreground/90' : 'list-decimal list-inside space-y-2 my-4 text-foreground/90'}>
            {currentList.map((item, i) => <li key={i}>{item}</li>)}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        flushList();
        return;
      }

      // Headers
      if (trimmed.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-8 mb-4">
            {trimmed.slice(2)}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="font-display text-2xl font-bold text-foreground mt-8 mb-3">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="font-display text-xl font-semibold text-foreground mt-6 mb-2">
            {trimmed.slice(4)}
          </h3>
        );
      }
      // List items
      else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '$1'));
      } else if (/^\d+\.\s/.test(trimmed)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(trimmed.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '$1'));
      }
      // Italic/Quote
      else if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
        flushList();
        elements.push(
          <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
            {trimmed.slice(1, -1)}
          </blockquote>
        );
      }
      // Regular paragraph
      else {
        flushList();
        const formatted = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p 
            key={index} 
            className="text-foreground/90 leading-relaxed my-4"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img 
          src={imageSrc} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/30 to-transparent" />
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </section>

      {/* Content */}
      <article className="container-page -mt-32 relative z-10 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Header Card */}
          <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-10 mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-6">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                Share:
              </span>
              <button 
                onClick={() => handleShare('twitter')}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleShare('facebook')}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleShare('copy')}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Copy link"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 md:p-8 bg-sage-light rounded-xl text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Enjoyed this article?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join our WhatsApp channel for daily wellness tips and herb benefits.
            </p>
            <Button variant="hero" asChild>
              <a 
                href="https://whatsapp.com/channel/0029VaYjYaS9Gv7lWhwn1E0w" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join HealthMantra
              </a>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container-page pb-20">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map(relatedPost => (
              <PostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default PostDetail;
