import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ini buat matiin fitur Next.js yang mencoba meng-override file static
  output: 'standalone', 
};

export default nextConfig;