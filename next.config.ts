/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./image-loader.ts",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
