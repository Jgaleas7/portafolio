import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      source: 'articles/**/*',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
      })
    })
  }
})
