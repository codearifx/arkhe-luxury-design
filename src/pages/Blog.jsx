const BLOG_POSTS = [
  {
    title: 'Designing for Zero Gravity: The Next Frontier',
    excerpt:
      'How floating architecture challenges our assumptions about foundations, load-bearing, and spatial orientation.',
    date: 'May 12, 2026',
    category: 'Innovation',
    readTime: '8 min',
  },
  {
    title: 'Teal Energy Fields in Modern Facades',
    excerpt:
      'Exploring photonic cladding systems that create the illusion of anti-gravitational suspension.',
    date: 'Apr 28, 2026',
    category: 'Materials',
    readTime: '6 min',
  },
  {
    title: 'The Psychology of Levitating Spaces',
    excerpt:
      "Research shows floating environments increase creativity and reduce stress in workplace design.",
    date: 'Apr 15, 2026',
    category: 'Research',
    readTime: '5 min',
  },
];

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <span className="section-label reveal">Insights</span>
        <h2 className="section-title reveal">From the Anti-Gravity Journal</h2>
        <p className="section-subtitle reveal">
          Thoughts on levitating design, structural innovation, and the future of architecture beyond Earth's pull.
        </p>

        <div className="blog-grid">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.title}
              className="blog-card reveal"
              style={{ '--tilt': `${-4 + (i % 3) * 4}deg`, animationDelay: `${i * 0.3}s` }}
              data-gravity="1"
            >
              <div className="blog-card-thumb" />
              <div className="blog-card-body">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <a href="#blog" className="blog-read">
                  Read Article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

