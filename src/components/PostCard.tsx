import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { Post } from '@/data/posts';
import { cn } from '@/lib/utils';

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

const categoryColors: Record<string, string> = {
  herbs: 'bg-leaf/10 text-leaf',
  fruits: 'bg-accent/10 text-accent',
  wellness: 'bg-primary/10 text-primary',
  lifestyle: 'bg-earth/10 text-earth',
};

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard = ({ post, featured = false }: PostCardProps) => {
  const imageSrc = imageMap[post.image] || farmImage;

  if (featured) {
    return (
      <Link 
        to={`/posts/${post.slug}`}
        className="group block relative overflow-hidden rounded-2xl hover-lift"
      >
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img 
            src={imageSrc} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className={cn(
            "inline-block px-3 py-1 rounded-full text-sm font-medium mb-3",
            "bg-primary-foreground/20 text-primary-foreground"
          )}>
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
          <h3 className="font-display text-2xl md:text-4xl font-semibold text-primary-foreground mb-3">
            {post.title}
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mb-4 hidden md:block">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/posts/${post.slug}`}
      className="group block bg-card rounded-xl overflow-hidden hover-lift border border-border"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={imageSrc} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className={cn(
          "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
          categoryColors[post.category]
        )}>
          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
        </span>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
