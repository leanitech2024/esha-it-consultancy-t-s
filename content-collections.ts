import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { z } from 'zod'

const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string(), // Changed from 'coverImage' to match JSON
  summary: z.string(),
  content: z.string(),
  categories: z.array(z.string()),
  author: z.string(),
  createdAt: z.coerce.date().transform((d) => d.toISOString()),
  draft: z.boolean().default(false),
})

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: ['**/*.md', '**/*.mdx'],
  schema: postSchema,
  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft')
    }

    const docs = await context.collection.documents()
    const idx = docs.findIndex(
      (d) => document._meta.filePath === d._meta.filePath,
    )

    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })

    const readTime = Math.ceil(mdx.split(' ').length / 200) // Assuming an average reading speed of 200 words per minute
    // const minutes = Math.ceil(readTime)
    // const readTimeText = `${minutes} min read`
    return {
      ...document,
      mdx,
      readTime,
      prev: idx > 0 ? docs[idx - 1] : null,
      next: idx < docs.length - 1 ? docs[idx + 1] : null,
    }
  },
})

export default defineConfig({
  content: [posts],
})
