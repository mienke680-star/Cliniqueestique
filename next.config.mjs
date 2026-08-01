/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/permanent-makeup",
        destination: "/treatments/permanent-makeup",
        permanent: true,
      },
      {
        source: "/cosmetic-treatments",
        destination: "/treatments",
        permanent: true,
      },
      {
        source: "/beauty-treatments",
        destination: "/treatments",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
