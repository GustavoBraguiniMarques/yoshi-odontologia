import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

// Páginas do site. Se criar uma página nova, acrescente o caminho aqui.
const paths = ['/', '/privacy/', '/terms/'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
