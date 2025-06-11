
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: false,
//     formats: ['image/webp'],
//   }, 
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
//   typescript: {
//     ignoreBuildErrors: false,
//   },
// experimental: {
//     optimizeCss: true,
//     optimizePackageImports: ['lucide-react', '@radix-ui/*', 'recharts', 'framer-motion'], // Ishlatiladigan kutubxonalar
//   },
//   webpack: (config) => {
//     config.optimization.usedExports = true; // Ishlatilmaydigan eksportlarni olib tashlash
//     return config;
//   },
  
  
// }
// export default nextConfig


/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
//   // Faqat zarur optimizatsiyalar
//   experimental: {
//     optimizePackageImports: [
//       'lucide-react',
//       '@radix-ui/react-accordion',
//       '@radix-ui/react-alert-dialog',
//       '@radix-ui/react-avatar',
//       '@radix-ui/react-button',
//       '@radix-ui/react-card',
//       '@radix-ui/react-dialog',
//       '@radix-ui/react-dropdown-menu',
//       '@radix-ui/react-label',
//       '@radix-ui/react-select',
//       '@radix-ui/react-separator',
//       '@radix-ui/react-tabs',
//     ],
//   },
//   // Webpack konfiguratsiyasini olib tashlash yoki soddalashtirish
//   webpack: (config, { isServer }) => {
//     // Faqat zarur optimizatsiyalar
//     config.optimization.splitChunks = {
//       chunks: 'all',
//       cacheGroups: {
//         vendor: {
//           test: /[\\/]node_modules[\\/]/,
//           name: 'vendors',
//           chunks: 'all',
//         },
//       },
//     };
    /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // TypeScript xatolarini e'tiborsiz qoldirish
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint xatolarini ham e'tiborsiz qoldirish
    ignoreDuringBuilds: true,
  },
}

export default nextConfig

    
    return config;
  },
}

export default nextConfig
