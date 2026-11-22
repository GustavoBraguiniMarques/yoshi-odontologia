import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Site 100% estático: o build gera a pasta out/, publicada na Vercel e na Hostinger.
  output: 'export',
  // Gera /privacy/index.html em vez de /privacy.html: funciona em qualquer hospedagem estática.
  trailingSlash: true,
  // Sem otimização automática: as imagens já entram no projeto no tamanho final (ver CLAUDE.md).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
