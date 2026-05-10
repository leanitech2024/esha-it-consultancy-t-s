import Social from '@/components/data/social'
import { Link } from '@tanstack/react-router'
import type { Dispatch, SetStateAction } from 'react'

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <>
      <div
        className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}
      >
        <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
          <i className="fal fa-times"></i>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-logo">
          <Link to="/">
            <img
              className="logo_one"
              src={'/logo.jpeg'}
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <p>
          Esha IT Consultancy is a leading IT consultancy firm dedicated to
          empowering businesses with innovative technology solutions.
        </p>
        <div className="header__area-menubar-right-sidebar-popup-contact">
          <h4 className="mb-30">Get In Touch</h4>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-phone-alt icon-animation"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Call Now</span>
              <h6>
                <a href="tel:+971526063287">(+971) 526063287</a>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-envelope"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Quick Email</span>
              <h6>
                <a href="mailto:eshaitconsultancyservices@gmail.com">
                  eshaitconsultancyservices@gmail.com
                </a>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Office Address</span>
              <h6>
                <a
                  href="https://maps.app.goo.gl/ZqrUPxNSqhLxCCfc9"
                  target="_blank"
                >
                  26th Floor, Amber Gem Tower, Ajman
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-social social__icon">
          <Social />
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
    </>
  )
}

export default SideBar
