import { Link } from '@tanstack/react-router'

import servicesData from '@/components/data/services-data'
import Social from '@/components/data/social'
import footerBg from '/assets/img/shape/footer-two-bg.png'
import ctaBg from '/assets/img/subscribe/subscribe-one-shape-1.png'

const FooterOne = () => {
  return (
    <>
      <div className="subscribe__one">
        <div className="container">
          <div
            className="row justify-content-center text-center subscribe__one-content"
            style={{ backgroundImage: `url(${ctaBg})` }}
          >
            <div className="col-xl-7 col-lg-8">
              <div className="subscribe__one-title">
                <h3>Ready to Transform Your Business?</h3>
                <p className={'text-light'}>
                  Let's have a conversation about your technology challenges. No
                  obligations — just expert advice.
                </p>
              </div>
              <form action="#" className="subscribe__one-form">
                <input type="email" placeholder="Enter Your Email" />
                <button className="btn-two" type="submit">
                  subscribe now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__two">
        <img className="footer__two-shape" src={footerBg} alt="image" />
        <div className="container">
          <div className="row gy-4 justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__two-widget">
                <div className="footer__two-widget-about">
                  <Link to="/">
                    <img
                      src={'/logo.jpeg'}
                      alt="image"
                      width={80}
                      height={80}
                    />
                  </Link>
                  <p>
                    Esha IT Consultancy is a leading IT consultancy firm
                    dedicated to empowering businesses with innovative
                    technology solutions.
                  </p>
                  <div className="footer__two-widget-about-location">
                    <div className="footer__two-widget-about-location-item">
                      <div className="footer__two-widget-about-location-item-icon">
                        <i className="flaticon-telephone-call"></i>
                      </div>
                      <div className="footer__two-widget-about-location-item-info">
                        <span>Phone Number</span>
                        <a href="tel:+971526063287">(+971)526063287</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__two-widget ml-855">
                <h4>Quick Link</h4>
                <div className="footer__two-widget-solution">
                  <ul>
                    <li>
                      <Link to="/services">
                        <i className="far fa-chevron-double-right"></i>Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolios">
                        <i className="far fa-chevron-double-right"></i>
                        Portfolios
                      </Link>
                    </li>
                    <li>
                      <a href="testimonial">
                        <i className="far fa-chevron-double-right"></i>
                        Testimonial
                      </a>
                    </li>
                    <li>
                      <Link to="/about">
                        <i className="far fa-chevron-double-right"></i>About Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__two-widget">
                <h4>Our Services</h4>
                <div className="footer__two-widget-solution">
                  <ul>
                    {servicesData.slice(0, 4).map((data, id) => {
                      const words = data.title.split(' ')
                      const firstAndSecondWord = words.slice(0, 2).join(' ')
                      return (
                        <li key={id}>
                          <a href={`/services/${data.id}`}>
                            <i className="far fa-chevron-double-right"></i>
                            {firstAndSecondWord}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__two-widget">
                <h4>Follow Us</h4>
                <div className="footer__two-widget-subscribe">
                  <p>The latest news, articles, sent to your inbox weekly.</p>
                  <div className="footer__two-widget-social">
                    <Social />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__one">
          <div className="container">
            <div className="row justify-content-between copyright__one-container-area">
              <div className="col-xl-5 col-lg-6">
                <div className="copyright__one-left">
                  <p>
                    © Esha IT Consultancy {new Date().getFullYear()} | All
                    Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="copyright__one-right">
                  <Link to=".">Privacy Policy</Link>
                  <Link to=".">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterOne
