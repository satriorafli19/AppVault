import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Ini kunci biar Vercel nggak error
  images: {
    unoptimized: true, // Biar nggak error masalah gambar
  },
};

export default nextConfig;