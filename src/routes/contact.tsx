import ContactMap from '#/components/contact/contact-map'
import ContactSection from '#/components/contact/contact-section'
import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact | Esha IT Consultancy',
      },
    ],
  }),
  component: RouteComponent,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
      <ContactSection />
      <ContactMap />
    </main>
  )
}
