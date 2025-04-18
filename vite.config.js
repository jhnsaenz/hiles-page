import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',  // Mantén actualizado el Service Worker
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'], // Añade cualquier otro archivo estático necesario
      manifest: {
        name: 'Hilos - Bolsos Tejidos',
        short_name: 'Hilos',
        description: 'Catálogo de bolsos tejidos a mano con amor y tradición.',
        theme_color: '#fef3c7',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/logo.png',  // Asegúrate de que esté en la carpeta 'public'
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo.png',  // Asegúrate de que esté en la carpeta 'public'
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',  // La carpeta de salida para la compilación
  },
  server: {
    port: 5173,  // Puerto para el servidor local
    open: true,  // Abre el navegador automáticamente
  }
})
