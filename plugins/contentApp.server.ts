import contentful from 'contentful';
import { fetchPageBySlug } from '@content-app/core/dist/index.js';

export default defineNuxtPlugin(() => {
    return {
      provide: {
        fetchPageBySlug: async (slug: string) => {

              const client = contentful.createClient({
                space: process.env.CONTENTFUL_SPACE || '',
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
            });

            

            try {
              return await fetchPageBySlug({client, slug});  
            } catch (error) {
              console.error(error)
            }
            
        }
      }
    }
  })