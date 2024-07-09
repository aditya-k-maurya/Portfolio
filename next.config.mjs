/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // This can be false if it's not a permanent redirect
      },
    ];
  },
};

export default nextConfig;
