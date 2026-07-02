import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: 'Shift+Build',
    description:
      'Perspektiv från någon som bygger på gränsen mellan kod, produkt och design. AI-arkitektur, tekniskt ledarskap och rollkonvergens, ungefär varannan vecka.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${base}/blog/${post.id.replace(/\.md$/, '')}/`,
    })),
    customData: '<language>sv-se</language>',
  });
}
