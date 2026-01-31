/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Esto le dice a Vercel: "No te detengas por errores de formato"
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Esto le dice: "Sigue adelante aunque veas errores de tipos"
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
