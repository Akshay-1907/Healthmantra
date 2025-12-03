export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'herbs' | 'fruits' | 'wellness' | 'lifestyle';
  date: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'tulsi-holy-basil-benefits',
    title: 'Tulsi (Holy Basil): The Queen of Herbs',
    excerpt: 'Discover the incredible health benefits of Tulsi, a sacred plant in Ayurveda known for boosting immunity and reducing stress.',
    content: `
# Tulsi: The Queen of Herbs

Tulsi, also known as Holy Basil, has been revered in India for thousands of years. This sacred plant is not just spiritually significant but also a powerhouse of health benefits.

## Key Health Benefits

- **Boosts Immunity**: Tulsi is rich in Vitamin C and zinc, making it a natural immunity booster
- **Reduces Stress**: Acts as an adaptogen, helping the body cope with stress
- **Respiratory Health**: Excellent for treating cough, cold, and other respiratory issues
- **Anti-inflammatory**: Contains eugenol, which has anti-inflammatory properties
- **Digestive Aid**: Helps improve digestion and reduces bloating

## How to Use Tulsi

1. **Tulsi Tea**: Steep fresh leaves in hot water for 5-10 minutes
2. **Raw Leaves**: Chew 4-5 leaves on an empty stomach
3. **Tulsi Powder**: Add to smoothies or warm water

## Growing Tulsi at Home

Tulsi is easy to grow and requires minimal care. Plant it in a sunny spot with well-drained soil. Water regularly but avoid overwatering.

*"Where there is Tulsi, there is no disease." - Ancient Ayurvedic saying*
    `,
    image: 'tulsi',
    category: 'herbs',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  {
    id: '2',
    slug: 'turmeric-golden-spice',
    title: 'Turmeric: The Golden Spice of Life',
    excerpt: 'Learn how turmeric, with its active compound curcumin, can transform your health naturally.',
    content: `
# Turmeric: The Golden Spice of Life

Turmeric has been used in traditional medicine for over 4,000 years. Its active compound, curcumin, is responsible for most of its therapeutic benefits.

## Amazing Benefits of Turmeric

- **Powerful Anti-inflammatory**: Curcumin fights inflammation at the molecular level
- **Strong Antioxidant**: Neutralizes free radicals and boosts body's antioxidant enzymes
- **Brain Health**: May improve brain function and lower risk of brain diseases
- **Heart Health**: Improves the function of blood vessel lining
- **Joint Support**: Helps with arthritis and joint pain

## Best Ways to Consume Turmeric

1. **Golden Milk**: Mix turmeric with warm milk and black pepper
2. **Cooking**: Add to curries, soups, and rice dishes
3. **Turmeric Shots**: Fresh turmeric juice with lemon

## Important Tip

Always consume turmeric with black pepper - piperine in black pepper increases curcumin absorption by 2000%!

*Embrace the golden goodness of turmeric for a healthier life.*
    `,
    image: 'turmeric',
    category: 'herbs',
    date: '2024-01-20',
    readTime: '6 min read'
  },
  {
    id: '3',
    slug: 'aloe-vera-miracle-plant',
    title: 'Aloe Vera: Nature\'s Miracle Plant',
    excerpt: 'From skin care to digestive health, explore the versatile benefits of Aloe Vera.',
    content: `
# Aloe Vera: Nature's Miracle Plant

Aloe Vera is one of the most versatile plants known to humanity. Ancient Egyptians called it the "plant of immortality."

## Benefits of Aloe Vera

### For Skin
- Moisturizes and hydrates skin
- Helps heal sunburns and wounds
- Reduces acne and skin irritation
- Anti-aging properties

### For Health
- **Digestive Health**: Soothes digestive tract and helps with constipation
- **Blood Sugar**: May help regulate blood sugar levels
- **Oral Health**: Reduces dental plaque and treats mouth ulcers
- **Detoxification**: Helps cleanse the body

## How to Use Aloe Vera

1. **Topical Application**: Apply fresh gel directly on skin
2. **Juice**: Drink 2 tablespoons of pure aloe juice daily
3. **Hair Mask**: Mix with coconut oil for healthy hair

## Growing Tips

Aloe Vera thrives in indirect sunlight. Water sparingly - only when soil is completely dry.

*Let nature's miracle plant transform your wellness routine.*
    `,
    image: 'aloe',
    category: 'herbs',
    date: '2024-02-01',
    readTime: '5 min read'
  },
  {
    id: '4',
    slug: 'ashwagandha-stress-relief',
    title: 'Ashwagandha: Ancient Remedy for Modern Stress',
    excerpt: 'Discover how this powerful adaptogen can help you manage stress and boost energy naturally.',
    content: `
# Ashwagandha: Ancient Remedy for Modern Stress

Ashwagandha, also known as "Indian Ginseng," is one of the most important herbs in Ayurveda. Its name means "smell of horse," indicating its ability to give you the strength and vitality of a horse.

## Key Benefits

- **Stress Reduction**: Significantly lowers cortisol levels
- **Improved Sleep**: Promotes better quality sleep
- **Energy & Stamina**: Boosts physical performance
- **Mental Clarity**: Enhances memory and cognitive function
- **Immune Support**: Strengthens the immune system
- **Hormonal Balance**: Supports thyroid function

## How to Take Ashwagandha

1. **Powder Form**: 1/4 to 1/2 teaspoon with warm milk before bed
2. **Capsules**: 300-500mg twice daily
3. **Tea**: Steep root in hot water for 15 minutes

## Best Time to Take

For stress relief and sleep: Take before bedtime
For energy: Take in the morning

*Embrace this ancient wisdom for a balanced, stress-free life.*
    `,
    image: 'ashwagandha',
    category: 'herbs',
    date: '2024-02-10',
    readTime: '6 min read'
  },
  {
    id: '5',
    slug: 'seasonal-fruits-wellness',
    title: 'Seasonal Fruits: Your Path to Natural Wellness',
    excerpt: 'Why eating seasonal fruits is the key to optimal health and how to incorporate them into your diet.',
    content: `
# Seasonal Fruits: Your Path to Natural Wellness

Eating fruits in their natural season is one of the best things you can do for your health. Seasonal fruits are fresher, more nutritious, and more affordable.

## Benefits of Seasonal Eating

- **Higher Nutritional Value**: Fruits harvested at peak ripeness have maximum nutrients
- **Better Taste**: Naturally ripened fruits taste significantly better
- **Eco-Friendly**: Reduced transportation and storage needs
- **Cost-Effective**: Abundant supply means lower prices
- **Natural Body Rhythm**: Nature provides what we need each season

## Seasonal Fruit Guide

### Summer
- Mangoes, Watermelon, Litchi, Muskmelon

### Monsoon
- Jamun, Pomegranate, Plums, Peaches

### Winter
- Oranges, Guava, Strawberries, Grapes

### Year-round
- Bananas, Papayas, Apples

## Tips for Maximum Benefits

1. Eat fruits on an empty stomach for better absorption
2. Choose organic when possible
3. Eat the rainbow - variety ensures diverse nutrients
4. Local is always better than imported

*Let the seasons guide your nutrition for optimal health.*
    `,
    image: 'fruits',
    category: 'fruits',
    date: '2024-02-20',
    readTime: '5 min read'
  },
  {
    id: '6',
    slug: 'ayurvedic-morning-routine',
    title: 'The Ayurvedic Morning Routine for Optimal Health',
    excerpt: 'Start your day the Ayurvedic way with these simple yet powerful morning rituals.',
    content: `
# The Ayurvedic Morning Routine for Optimal Health

Ayurveda emphasizes that how you start your day sets the tone for everything that follows. A proper morning routine, or "Dinacharya," can transform your health.

## The Ideal Ayurvedic Morning

### 1. Wake Up Early (5-6 AM)
The "Brahma Muhurta" or divine time is ideal for waking. The air is fresh and the mind is calm.

### 2. Tongue Scraping
Remove overnight toxin buildup with a copper tongue scraper.

### 3. Oil Pulling
Swish sesame or coconut oil in your mouth for 10-15 minutes.

### 4. Warm Water with Lemon
Kickstart your digestion and metabolism.

### 5. Evacuation
Regular bowel movement is crucial for health.

### 6. Self-Massage (Abhyanga)
Massage warm oil into your skin before bathing.

### 7. Light Exercise or Yoga
20-30 minutes of gentle movement.

### 8. Meditation
Even 10 minutes creates a peaceful mindset.

## Benefits You'll Experience

- Increased energy throughout the day
- Better digestion
- Clearer skin
- Improved mental clarity
- Reduced stress

*Small morning rituals lead to big transformations.*
    `,
    image: 'wellness',
    category: 'wellness',
    date: '2024-03-01',
    readTime: '7 min read'
  }
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: Post['category']): Post[] => {
  return posts.filter(post => post.category === category);
};
