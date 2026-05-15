import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import bootstrapJS from 'bootstrap/dist/js/bootstrap.min.js?url'
import appCss from '../global.css?url'

import CustomCursor from '#/components/layout/CustomCursor'
import FooterOne from '#/components/layout/footers/footer-one'
import HeaderOne from '#/components/layout/headers/header/header-one'
import NotFound from '#/components/not-found'
import ScrollToTop from '#/components/pages/common/scroll/scroll-to-top'
import WhatsappWidget from '#/components/WhatsappWidget.tsx'
import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

// const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Esha IT Consultancy',
      },
      {
        name: 'description',
        content:
          'Experience elite IT consultancy and bespoke digital solutions tailored for ambitious businesses. We craft innovative, scalable, and high-performance technology to elevate your brand.',
      },
      {
        name: 'keywords',
        content:
          'IT consultancy in Dubai, digital solutions UAE, software company Dubai, web development UAE, IT services Middle East',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/logo.jpeg',
      },
    ],
    scripts: [
      {
        src: bootstrapJS,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} /> */}
        <HeadContent />
      </head>
      <body className="font-sans antialiased selection:bg-[rgba(79,184,178,0.24)]">
        <HeaderOne />
        {children}
        <FooterOne />
        <ScrollToTop />
        <CustomCursor />
        <WhatsappWidget />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
            defaultOpen: true,
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
