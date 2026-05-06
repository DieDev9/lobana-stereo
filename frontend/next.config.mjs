/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
 images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.eltiempo.com" },
      { protocol: "https", hostname: "**.rcnradio.com" },
      { protocol: "https", hostname: "**.bluradio.com" },
      { protocol: "https", hostname: "**.caracol.com.co" },
      { protocol: "https", hostname: "**.google.com" },
    ],
  },
}

export default nextConfig
