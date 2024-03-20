/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  env: {
    API_KEY: process.env.NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY,
    API_URL: process.env.NEXT_PUBLIC_REACT_APP_OPENAI_ENDPOINT,
  },
};

export default nextConfig;
