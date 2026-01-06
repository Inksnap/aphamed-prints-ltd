export default async function sitemap() {
  const baseUrl = 'https://aphamedprints.com';
  
  // Fetch all products
  let products = [];
  try {
    const response = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });
    products = await response.json();
  } catch (error) {
    console.error('Failed to fetch products for sitemap');
  }

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Product pages
  const productPages = products.map((product) => ({
    url: `${baseUrl}/Products/${product.slug || product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticPages, ...productPages];
}
