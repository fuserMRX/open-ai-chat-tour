/** @type {import('next').NextConfig} */
const nextConfig = {
    // removes double rendering in development
    reactStrictMode: false,
    images: {
        remotePatterns: [
            // openai images API
            {
                protocol: 'https',
                hostname: 'oaidalleapiprodscus.blob.core.windows.net',
                port: '',
                pathname: '/private/**',
            },
            // unsplash images
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
