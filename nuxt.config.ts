// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',

  
  ],
  runtimeConfig:{
      appwriteApiKey:'',
      databaseKey: '',
 
      secret:{
        supabaseKey: process.env.NUXT_SUPABASE_KEY,
        supabaseUrl: process.env.NUXT_SUPABASE_URL,
      },
      public:{
        
        teste: process.env.NUXT_SUPABASE_URL,
      }
     
  },
  routeRules: {
    '/examples/*': { redirect: '/redirect-route' },
    '/modify-headers-route': { headers: { 'x-magic-of': 'nuxt and vercel' } },
    '/spa': { ssr: true },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  }
  
})
