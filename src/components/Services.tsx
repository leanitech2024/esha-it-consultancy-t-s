import { Link } from '@tanstack/react-router'
// import servicesData from './data/services-data'

const services = [
  {
    id: crypto.randomUUID(),
    title: 'Cloud Computing & Migration',
    description:
      'Seamlessly migrate and optimize your operations on leading cloud platforms, reducing costs and boosting scalability.',
    features: [
      'Cloud Strategy & Roadmap Planning',
      'AWS / Azure / Google Cloud Migration',
      'Hybrid & Multi-Cloud Architecture',
      'Cloud Cost Optimization',
      'Disaster Recovery as a Service (DRaaS)',
    ],
    icon: <i className="fa fa-cloud-binary fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Cybersecurity Solutions',
    description:
      'Protecting your digital assets with enterprise-grade security frameworks, proactive monitoring, and compliance assurance.',
    features: [
      'Vulnerability Assessment & Penetration Testing',
      'Security Operations Center (SOC)',
      'Endpoint Detection & Response (EDR)',
      'Zero Trust Network Architecture',
      'ISO 27001 & GDPR Compliance',
    ],
    icon: <i className="fa fa-block-brick-fire fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'IT Infrastructure Management',
    description:
      'Build and maintain resilient IT foundations — from servers and networking to storage and virtualization.',
    features: [
      'Data Center Design & Setup',
      'Server Virtualization (VMware / Hyper-V)',
      'Storage & Backup Solutions',
      '24/7 Remote IT Monitoring',
      'Hardware Procurement & Lifecycle Management',
    ],
    icon: <i className="fa fa-server fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Software Development',
    description:
      'Custom software solutions tailored to your unique business requirements — built to scale and perform.',
    features: [
      'Web Application Development',
      'Mobile App Development (iOS & Android)',
      'API Design & System Integration',
      'UI/UX Design & Prototyping',
      'Quality Assurance & Testing',
    ],
    icon: <i className="fa fa-laptop-code fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'ERP & Business Solutions',
    description:
      'Unify your operations with integrated enterprise platforms that streamline workflows and enhance visibility.',
    features: [
      'SAP / Oracle / Microsoft Dynamics Implementation',
      'ERP Customization & Module Development',
      'CRM Systems (Salesforce, Zoho)',
      'HRMS & Payroll Automation',
      'ERP Support & Maintenance',
    ],
    icon: <i className="fa fa-panel-ews fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Network Solutions',
    description:
      'High-performance, secure networking that keeps your business connected — across offices, branches, and remote teams.',
    features: [
      'LAN / WAN Design & Deployment',
      'SD-WAN & MPLS Connectivity',
      'Wi-Fi 6 Enterprise Deployment',
      'Network Security & Firewall Management',
      'VoIP & Unified Communications',
    ],
    icon: <i className="fa fa-chart-network fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'AI & Intelligent Automation',
    description:
      'Harness artificial intelligence and automation to reduce manual effort, gain insights, and accelerate growth.',
    features: [
      'AI Strategy & Use-Case Identification',
      'Robotic Process Automation (RPA)',
      'Machine Learning Model Development',
      'Chatbots & Conversational AI',
      'AI-Powered Data Analytics',
    ],
    icon: <i className="fa fa-robot fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Data Analytics & Business Intelligence',
    description:
      'Transform raw data into actionable insights with advanced analytics platforms and real-time dashboards.',
    features: [
      'BI Dashboard Development (Power BI / Tableau)',
      'Data Warehouse Design',
      'ETL Pipeline Development',
      'Predictive Analytics & Forecasting',
      'Big Data Architecture',
    ],
    icon: <i className="fa fa-chart-scatter-3d fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Digital Transformation',
    description:
      'End-to-end guidance in reimagining your business through technology — strategy, change management, and execution.',
    features: [
      'Digital Readiness Assessment',
      'IT Strategy & Technology Roadmapping',
      'Process Digitization & Reengineering',
      'Change Management & Staff Enablement',
      'Innovation Lab & PoC Development',
    ],
    icon: <i className="fa fa-table-pivot fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'IT Support & Managed Services',
    description:
      'Reliable day-to-day IT support so your team stays productive — on-site, remote, or hybrid coverage.',
    features: [
      'Helpdesk & L1/L2/L3 Support',
      'Managed IT Services (MSP)',
      'IT Outsourcing & Staff Augmentation',
      'Asset & License Management',
      'SLA-based Support Contracts',
    ],
    icon: <i className="fa fa-headset fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'IoT & Smart Technology',
    description:
      'Connect and manage physical devices intelligently — from smart offices to industrial IoT deployments.',
    features: [
      'IoT Architecture & Platform Selection',
      'Smart Office & Building Automation',
      'Industrial IoT (IIoT) Solutions',
      'Device Management & Security',
      'Real-Time Monitoring & Alerting',
    ],
    icon: <i className="fa fa-brain-circuit fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'IT Training & Consulting',
    description:
      'Empower your workforce with technical training, certifications, and expert advisory services.',
    features: [
      'Corporate IT Training Programs',
      'Microsoft 365 & Google Workspace Adoption',
      'Cybersecurity Awareness Training',
      'Technology Vendor Advisory',
      'IT Audit & Governance Consulting',
    ],
    icon: <i className="fa fa-person-chalkboard fa-duotone"></i>,
  },
]

export default function Services() {
  return (
    <div className="services__two section-padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-40">
          <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
            <span className="subtitle-one">What We Do</span>
            <h2>Our Services</h2>
            <p>
              Comprehensive IT solutions designed to elevate your business, from
              strategy to implementation and beyond.
            </p>
          </div>
        </div>
        <div className="row gy-4">
          {services.map((data, id) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
              <div className="services__two-single-service">
                <div className="services__two-single-service-icon">
                  {/* {servicesData[0].icon} */}
                  {data.icon}
                </div>
                <div className="services__two-single-service-content">
                  <h4>{data.title}</h4>
                  <p className={'mb-2'}>{data.description}</p>
                  {/* <ul className="list-group list-group-flush"> */}
                  <ul>
                    {data.features.map((feature, index) => (
                      <li className="list-group-itemm" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={'mt-3'}>
                    <Link to={`.`} className="btn-three">
                      Read More<i className="fas fa-chevron-right"></i>
                    </Link>
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
