/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: [
      "secure.gravatar.com",
      "via.placeholder.com",
      "fom-backend-9sv3ka92jj.common.studio",
    ],
  },
};

module.exports = nextConfig;
