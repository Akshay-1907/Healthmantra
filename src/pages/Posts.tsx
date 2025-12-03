import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { posts, type Post } from '@/data/posts';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'herbs', name: 'Herbs' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'wellness', name: 'Wellness' },
  { id: 'lifestyle', name: 'Lifestyle' },
];

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const featuredPost = posts[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-sage-light">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Blog
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore articles on herbs, fruits, wellness tips, and organic lifestyle 
              to transform your health naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container-page -mt-8 mb-12 relative z-10">
        <PostCard post={featuredPost} featured />
      </section>

      {/* Category Filter */}
      <section className="container-page mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container-page pb-20">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No posts found in this category yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Posts;
