import NotFound from '#/components/not-found'
import HomeOne from '#/components/pages/homes/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Home | Esha IT Consultancy',
      },
      {
        name: 'description',
        content:
          'Experience elite IT consultancy and bespoke digital solutions tailored for ambitious businesses. We craft innovative, scalable, and high-performance technology to elevate your brand.',
      },
    ],
  }),
  component: App,
  notFoundComponent: NotFound,
})

function App() {
  return (
    <>
      <HomeOne />
    </>
  )
}
