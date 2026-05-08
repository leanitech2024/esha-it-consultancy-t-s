import { ClientOnly, createFileRoute, Link } from '@tanstack/react-router'
import { CountUp } from 'use-count-up'

import about1 from '/assets/img/about/about-1.png'
import about2 from '/assets/img/about/about-2.png'
import brand1 from '/assets/img/brand/brand-1.png'
import brand2 from '/assets/img/brand/brand-2.png'
import brand3 from '/assets/img/brand/brand-3.png'
import brand4 from '/assets/img/brand/brand-4.png'
import brand5 from '/assets/img/brand/brand-5.png'

import teamData from '#/components/data/team-data.tsx'
import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import Testimonial from '#/components/pages/homes/home/testimonial'
import SectionHeadings from '#/components/SectionHeadings.tsx'
// import WorkArea from '#/components/pages/homes/home/work'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About Us | Esha IT Consultancy',
      },
      {
        name: 'description',
        content:
          'Esha IT Consultancy is a leading provider of IT solutions and services, dedicated to helping businesses leverage technology for growth and success. With a team of experienced professionals, we offer a wide range of services including software development, cloud computing, cybersecurity, and IT consulting. Our mission is to deliver innovative and customized solutions that meet the unique needs of our clients, enabling them to stay competitive in the ever-evolving digital landscape.',
      },
    ],
  }),
  component: About,
  notFoundComponent: NotFound,
})

function About() {
  return (
    <main className="">
      <BreadCrumb title="About Us" innerTitle="Company About" />

      <div className="about__one section-padding">
        <div className="container">
          <div className="row align-items-center flex-wrap-reverse gy-4">
            <div className="col-xl-6 col-lg-5">
              <div className="about__one-image">
                <div className="experience-bar animate-y-axis-slider">
                  <i className="flaticon-consultant"></i>
                  <div className="experience-bar-right">
                    <div className="experience-bar-counter">
                      <h4 className="counter">
                        <ClientOnly fallback={<span>0</span>}>
                          <CountUp isCounting end={25} duration={3.2} />
                        </ClientOnly>
                      </h4>
                      <span>+</span>
                    </div>
                    <span>Years Experience</span>
                  </div>
                </div>
                <div className="about__one-image-wrapper">
                  <img src={about1} alt="image" className="image-1" />
                  <img src={about2} alt="image" className="image-2" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="about__one-content">
                <span className="subtitle-one">About us</span>
                <h2>Transform Business to Technology</h2>
                <p>
                  At ESHA IT Consultancy Services, we redefine how businesses
                  experience technology. Based in Dubai, we deliver
                  sophisticated, future-ready IT solutions designed not just to
                  support your operations — but to elevate them.
                </p>
                <p>
                  We operate at the intersection of innovation, strategy, and
                  precision, helping organizations transform complex
                  technological challenges into seamless, scalable systems that
                  drive measurable growth.
                </p>
                <div className="about__one-content-service">
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Enterprise-Grade Cybersecurity</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Custom Software & Application Development</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>ERP & Business Process Automation</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Intelligent AI & Data-Driven Systems</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Digital Transformation & IT Strategy</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Managed IT Services & Ongoing Support</span>
                  </div>
                </div>
                <Link to="/about" className="btn-one">
                  Discover More<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesMain />

      <TeamMain />

      <Testimonial />

      <CompanyLogos />
    </main>
  )
}

function CompanyLogos() {
  return (
    <div className="brand__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="text__slider">
              <div className="text-slide">
                <div className="sliders scroll">
                  <div className="brand__area-item">
                    <img src={brand1} alt="image" />
                  </div>
                  <div className="brand__area-item">
                    <img src={brand2} alt="image" />
                  </div>
                  <div className="brand__area-item">
                    <img src={brand3} alt="image" />
                  </div>
                  <div className="brand__area-item">
                    <img src={brand4} alt="image" />
                  </div>
                  <div className="brand__area-item">
                    <img src={brand5} alt="image" />
                  </div>
                </div>
                <div className="sliders scroll">
                  <div className="brand__area-item">
                    <img src={brand1} alt="image" />
                  </div>
                  <div className="brand__area-item">
                    <img src={brand2} alt="image" />
                  </div>
                  <div className="brand__area-item">
                    <img src={brand3} alt="image" />
                  </div>
                  <div className="brand__area-item">
                    <img src={brand4} alt="image" />
                  </div>
                  <div className="brand__area-item">
                    <img src={brand5} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const aboutInfo = [
  {
    id: crypto.randomUUID(),
    title: 'Who We Are',
    description: '',
    features: [
      'We are a collective of highly skilled IT specialists, engineers, and consultants with deep expertise across cloud computing, cybersecurity, infrastructure, software development, AI, and enterprise solutions.',
      'Every project we undertake is approached with a commitment to excellence, attention to detail, and a clear understanding of your business objectives.',
      'We don’t offer one-size-fits-all services.',
      'We architect solutions that are tailored, secure, and built to scale.',
    ],
    info: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'What We Deliver',
    description: '',
    features: [
      'Our capabilities span across the full spectrum of modern IT',
      'Advanced Cloud & Infrastructure Solutions',
      'Enterprise-Grade Cybersecurity',
      'Custom Software & Application Development',
      'ERP & Business Process Automation',
      'Intelligent AI & Data-Driven Systems',
      'Digital Transformation & IT Strategy',
      'Managed IT Services & Ongoing Support',
      'Each solution is engineered to enhance performance, strengthen security, and unlock new opportunities for growth.',
    ],
    info: 'Each solution is engineered to enhance performance, strengthen security, and unlock new opportunities for growth.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Our Commitment to Excellence',
    description:
      'From initial consultation to final deployment and beyond, we maintain a relentless focus on delivering',
    features: [
      'Precision in execution',
      'Transparency in communication',
      'Reliability in performance',
      'Long-term value for our clients',
    ],
    info: '',
  },
]

const ServicesMain = () => {
  return (
    <>
      <div className="services__four pb-120">
        <div className="container">
          <div className="pb-50">
            <SectionHeadings
              title="Your success defines our success."
              subtitle="Why Choose Us"
              description="As technology continues to evolve, so do we.
              ESHA IT Consultancy Services remains committed to staying ahead of the curve — continuously adopting emerging in4novations to ensure our clients remain competitive in an ever-changing digital landscape."
            />
          </div>

          <div className="row gy-4">
            {aboutInfo.map((data, id) => {
              // const words = data.title.split(' ')
              // const firstAndSecondWord = words.slice(0, 2).join(' ')
              return (
                <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                  <div className="services__four-single-service">
                    {/* <div className="services__four-single-service-icon">
                      {data.icon}
                    </div> */}
                    <div className="services__four-single-service-content">
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      {/* <a href={`/services/${data.id}`} className="btn-three">
                        Read More<i className="fas fa-chevron-right"></i>
                      </a> */}
                      <ul>
                        {data.features.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

const TeamMain = () => {
  return (
    <div className="team__two section-paddingg">
      <div className="container">
        <div className="pb-50">
          <SectionHeadings
            title="Our Teams"
            subtitle="Why Choose Us"
            description="With ESHA, technology becomes more than a tool — it becomes a strategic advantage."
          />
        </div>

        <div className="row gy-4 justify-content-center">
          {teamData.map((data, id) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
              <div className="team__two-team-item">
                <img src={data.image} alt="image" />
                <div className="team__two-team-item-content">
                  <div className="member-name">
                    <h3>{data.name}</h3>
                    <span>{data.position}</span>
                  </div>
                  <div className="fas fa-share-alt share-link-wrapper">
                    <div className="share-links">
                      {data.social_link.map((social, id) => (
                        <Link
                          className="inner-link"
                          key={id}
                          to={social.link}
                          target={social.target}
                        >
                          {social.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
