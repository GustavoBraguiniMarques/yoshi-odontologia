import type { MetadataRoute } from 'next';
import { allowIndexing, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

// robots.txt: o rastreamento fica sempre liberado. Quem tira as prévias do Google é a
// meta tag noindex (ver lib/seo.ts); bloquear aqui impediria o Google de ler essa tag.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(allowIndexing && { sitemap: `${siteUrl}/sitemap.xml` }),
  };
}
