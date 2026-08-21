import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withMDX(nextConfig);
