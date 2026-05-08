import { devtools } from '@tanstack/devtools-vite'
import { defineConfig } from 'vite'

import contentCollections from '@content-collections/vite'
import netlify from '@netlify/vite-plugin-tanstack-start' // ← add this
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact, { type Options } from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    contentCollections(),
    devtools(),
    tanstackStart(),
    nitro(),
    netlify(), // ← add this (anywhere in the array is fine)
    viteReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    } as Options),
  ],
})

export default config
