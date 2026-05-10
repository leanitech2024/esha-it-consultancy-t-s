import { createFileRoute } from '@tanstack/react-router'

import BreadCrumb from '#/components/pages/common/breadcrumb'

const projects = [
  {
    id: crypto.randomUUID(),
    title: 'Cloud Infrastructure Transformation',
    description:
      'Migrated legacy systems to a secure cloud environment, improving scalability and reducing operational costs significantly.',
    features: [
      '30% cost reduction',
      'Improved system uptime',
      'Scalable cloud architecture',
    ],
    cover: '/assets/img/portfolio/portfolio-1.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Enterprise Cybersecurity Implementation',
    description:
      'Designed and deployed a comprehensive cybersecurity framework including threat monitoring and compliance solutions.',
    features: [
      'Enhanced data protection',
      'Real-time threat detection',
      'Compliance readiness',
    ],
    cover: '/assets/img/portfolio/portfolio-2.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Custom ERP Solution',
    description:
      'Developed a fully customized ERP system to streamline operations, inventory, and financial management.',
    features: [
      'Automated workflows',
      'Improved operational efficiency',
      'Real-time reporting',
    ],
    cover: '/assets/img/portfolio/portfolio-3.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'AI-Powered Customer Support System',
    description:
      'Implemented AI chatbot and automation tools to improve customer engagement and reduce manual workload.',
    features: [
      'Faster response time',
      'Increased customer satisfaction',
      'Reduced support costs',
    ],
    cover: '/assets/img/portfolio/portfolio-4.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Network Infrastructure Upgrade',
    description:
      'Redesigned network architecture to ensure secure, high-speed connectivity across departments.',
    features: [
      'Improved network performance',
      'Enhanced security',
      'Seamless connectivity',
    ],
    cover: '/assets/img/portfolio/portfolio-5.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Business Intelligence Dashboard',
    description:
      'Developed interactive dashboards to provide real-time insights and data-driven decision-making.',
    features: [
      'Better forecasting',
      'Data transparency',
      'Faster decision-making',
    ],
    cover: '/assets/img/portfolio/portfolio-6.jpg',
  },
]

const servedIndustries = [
  {
    id: crypto.randomUUID(),
    work: 'Logistics & Supply Chain',
    icon: <i className="fa fa-cart-flatbed fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    work: 'Finance & Banking',
    icon: <i className="fa fa-building-columns fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    work: 'Retail & E-commerce',
    icon: <i className="fa fa-shop fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    work: 'Healthcare',
    icon: <i className="fa fa-hospital fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    work: 'Manufacturing',
    icon: <i className="fa fa-industry fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    work: 'Corporate Enterprises',
    icon: <i className="fa fa-building-shield fa-duotone"></i>,
  },
]

export const Route = createFileRoute('/portfolios')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title={'Portfolios'} innerTitle="Featured Projects" />

      <div className="services__one mt-50">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
              <span className="subtitle-one">Featured Projects</span>
              <h2>Our Work</h2>
              <p className={'mb-3 lh-base'}>
                At ESHA IT Consultancy Services, every project is a reflection
                of precision, innovation, and strategic execution. Our portfolio
                showcases how we transform complex business challenges into
                scalable, secure, and high-performance solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThreeColumns />

      <div className="services__one mb-120">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
              <span className="subtitle-one">Industries We Serve</span>
              <h2>Industries We Work With</h2>
              <p className={'mb-3 lh-base'}>
                At ESHA IT Consultancy Services, every project is a reflection
                of precision, innovation, and strategic execution. Our portfolio
                showcases how we transform complex business challenges into
                scalable, secure, and high-performance solutions.
              </p>
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            {servedIndustries.map((industry) => (
              <div className="col-md-4 col-sm-6" key={industry.id}>
                <div className="single-service">
                  <div className="services__one-single-service-icon">
                    {industry.icon}
                  </div>
                  <div className="services__one-single-service-content">
                    <h4>{industry.work}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services__one mb-50">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
              <span className="subtitle-one">Our Approach</span>
              <h2>Our Approach</h2>
              <p className={'mb-3 lh-base'}>
                Every project begins with understanding — your business, your
                challenges, and your vision. We then design, implement, and
                optimize solutions with a focus on performance, security, and
                long-term scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const ThreeColumns = () => {
  // const portfolioItem = portfolioData
  // const [items, setItems] = useState(portfolioItem)
  // const [next, setNext] = useState(showPortfolioItem)
  // const handleLoadData = () => {
  //   setNext((value) => value + 1)
  // }

  return (
    <div className="portfolio__two section-padding three-columns">
      <div className="container">
        <div className="row dark_image">
          {projects.map((data) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={data.id}>
              <div className="portfolio__two-single-item">
                <div className="portfolio__two-single-item-img-wrapper">
                  <img src={data.cover} alt={data.title} />
                </div>
                <div className="portfolio__two-single-item-content">
                  <div className="portfolio__two-single-item-content-left">
                    <h3>{data.title}</h3>
                    <p className={'lh-sm'}>{data.description}</p>
                    <ul className={'mt-3'}>
                      {data.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="portfolio__two-single-item-content-right">
                    <a href={`#`} title="View Details">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
