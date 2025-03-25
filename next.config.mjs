import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Enables strict mode for React
    webpack(config) {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|avi|mov|wmv)$/, // Matches video file extensions
          type: 'asset/resource',               // Treats these files as static resources
          generator: {
            filename: 'static/media/[name].[hash][ext]', // Specifies output directory and filename pattern
          },
        });
        return config;
    },
};

export default withNextIntl(nextConfig);
