import { ClientOnly, createFileRoute } from '@tanstack/react-router'
import { CountUp } from 'use-count-up'

// import servicesData from '#/components/data/services-data'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import Testimonial from '#/components/pages/homes/home/testimonial'
import SectionHeadings from '#/components/SectionHeadings'

import image1 from '/assets/img/work-process/work-process-1.png'
import image2 from '/assets/img/work-process/work-process-2.png'
import workBg from '/assets/img/work-process/work-process-bg.png'

export const Route = createFileRoute('/services/')({
  component: RouteComponent,
})

const services = [
  {
    id: crypto.randomUUID(),
    title: 'Website Design & Development',
    description:
      'We create modern, responsive, and high-performance websites that reflect your brand identity and engage your audience.',
    offers: [
      'Custom website design',
      'Corporate & business websites',
      'E-commerce development',
      'UI/UX optimization',
      'SEO-friendly structure',
    ],
    outcome: 'A visually stunning, fast, and conversion-focused website.',
    icon: <i className="fa fa-browser fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Custom Software Development',
    description:
      'We build scalable and secure software solutions tailored to your unique business requirements.',
    offers: [
      'Web applications',
      'Enterprise software',
      'CRM & ERP systems',
      'API integrations',
      'Cloud-based solutions',
    ],
    outcome:
      'Efficient systems that streamline operations and improve productivity.',
    icon: <i className="fa fa-code fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Mobile App Development',
    description:
      'Transform your ideas into powerful mobile applications with seamless performance and intuitive design.',
    offers: [
      'Android & iOS apps',
      'Cross-platform development',
      'UI/UX design',
      'App maintenance & upgrades',
    ],
    outcome: 'High-performing mobile apps that enhance user engagement.',
    icon: <i className="fa fa-mobile-screen fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Digital Marketing',
    description:
      'Grow your online presence and generate quality leads through data-driven marketing strategies.',
    offers: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Google Ads & PPC campaigns',
      'Content marketing',
      'Lead generation strategies',
    ],
    outcome: 'Increased visibility, traffic, and conversions.',
    icon: <i className="fa fa-tachograph-digital fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'AI & Automation Solutions',
    description:
      'Leverage cutting-edge AI technologies to automate processes and enhance decision-making.',
    offers: [
      'AI chatbots',
      'Business process automation',
      'Predictive analytics',
      'Smart integrations',
    ],
    outcome: 'Reduced manual workload and improved operational efficiency.',
    icon: <i className="fa fa-arrow-progress fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'IT Consulting & Strategy',
    description:
      'We help businesses align technology with their goals through expert consulting and strategic planning.',
    offers: [
      'Digital transformation strategy',
      'IT infrastructure planning',
      'Business analysis',
      'Technology roadmap',
    ],
    outcome: 'Stronger, future-ready business operations.',
    icon: <i className="fa fa-chart-candlestick fa-duotone"></i>,
  },
]

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="Our Services" innerTitle="Our Services" />

      <div className="services__one section-padding">
        <div className="container pb-50">
          <SectionHeadings
            title="Our Services"
            subtitle="Our Services"
            description="At ESHA IT Consultancy Services, we provide a full spectrum of technology and digital solutions designed to empower businesses in a rapidly evolving digital world. From strategy to execution, our services are built to enhance performance, improve efficiency, and drive measurable results."
          />
        </div>
        <div className="container mx-auto row gy-4">
          {services.map((data) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={data.id}>
              <div className="services__two-single-service">
                <div className="services__two-single-service-icon">
                  {data.icon}
                </div>
                <div className="services__two-single-service-content">
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                  <ul>
                    {data.offers.map((offer, index) => (
                      <li key={index}>{offer}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Outcome:</strong> {data.outcome}
                  </p>
                  {/* <a href={`/services/${data.id}`} className="btn-three">
                    Read More<i className="fas fa-chevron-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="services__one">
        <div className="container pb-50">
          <SectionHeadings
            title="Our Services"
            subtitle="Our Services"
            description="At ESHA IT Consultancy Services, we provide a full spectrum of technology and digital solutions designed to empower businesses in a rapidly evolving digital world. From strategy to execution, our services are built to enhance performance, improve efficiency, and drive measurable results."
          />
        </div>
      </div> */}

      <WhoChooseUs />
      <Testimonial />
    </main>
  )
}

const reasonToChooseUs = [
  'Client-centric approach',
  'Cutting-edge technologies',
  'Experienced professionals',
  'Scalable solutions',
  'End-to-end support',
]

export default function WhoChooseUs() {
  return (
    <div
      className="work-process-area__one section-padding"
      style={{ backgroundImage: `url(${workBg})` }}
    >
      <div className="container">
        <div className="row align-items-end work-process-area__one-title">
          <div className="col-xl-7 col-lg-7">
            <div className="work-process-area__one-content-left">
              <span className="subtitle-one">Why Choose Us</span>
              <h2>Why Choose Us</h2>
            </div>
          </div>
          <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
            <div className="work-process-area__one-content-right">
              <p>
                Discuss strategies for reducing energy consumption in data
                centers, personal devices, and reduce power usage
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gy-4">
          <div className="col-xl-6">
            {reasonToChooseUs.map((reason, index) => (
              <div className="work-process-area__one-single-work">
                <span>0{index + 1}</span>
                <div className="work-process-area__one-single-work-content">
                  <h4>{reason}</h4>
                  {/* <p>
                    Begin by comprehensively understanding your business needs
                    to ensure a perfect fit for tech solutions.
                  </p> */}
                </div>
              </div>
            ))}
            {/* <div className="work-process-area__one-single-work">
              <span>01</span>
              <div className="work-process-area__one-single-work-content">
                <h4>Assess Requirements Precisely</h4>
                <p>
                  Begin by comprehensively understanding your business needs to
                  ensure a perfect fit for tech solutions.
                </p>
              </div>
            </div>
            <div className="work-process-area__one-single-work">
              <span>02</span>
              <div className="work-process-area__one-single-work-content">
                <h4>Develop Custom Solutions</h4>
                <p>
                  Engage in crafting tailor-made software designed meticulously
                  to align with your specific targets.
                </p>
              </div>
            </div>
            <div className="work-process-area__one-single-work">
              <span>03</span>
              <div className="work-process-area__one-single-work-content">
                <h4>Implement and Support</h4>
                <p>
                  Seamlessly integrate the new systems into framework with
                  ongoing support for continual optimization.
                </p>
              </div>
            </div> */}
          </div>
          <div className="col-xl-6">
            <div className="work-process-area__one-right-img">
              <img src={image1} alt="image" />
            </div>
            <div className="work-process-area__one-right-counter-img">
              <div className="img-counter">
                <div className="counter-only">
                  <h2 className="counter">
                    <ClientOnly fallback={<span>0</span>}>
                      <CountUp isCounting end={10} duration={3.2} />
                    </ClientOnly>
                  </h2>
                  <h2>+</h2>
                </div>
                <span>years of experiences</span>
              </div>
              <img src={image2} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
