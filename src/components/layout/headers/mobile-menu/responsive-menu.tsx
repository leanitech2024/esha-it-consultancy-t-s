import { Link } from '@tanstack/react-router'
// import { useState } from 'react'

const ResponsiveMenu = () => {
  // const [activeMenu, setActiveMenu] = useState(null)
  // const active = (value: any) =>
  //     setActiveMenu(value === activeMenu ? null : value),
  //   activeIcon = (value: any) => (activeMenu == value ? 'mean-clicked' : ''),
  //   activeSubMenu = (value: any) =>
  //     value == activeMenu ? { display: 'block' } : { display: 'none' }

  // const [activeMenus, setActiveMenus] = useState(null)
  // const actives = (value: any) =>
  //     setActiveMenus(value === activeMenus ? null : value),
  //   activeIcons = (value: any) => (activeMenus == value ? 'mean-clicked' : ''),
  //   activeSubMenus = (value: any) =>
  //     value == activeMenus ? { display: 'block' } : { display: 'none' }

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolios">Portfolios</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        {/* <li className="menu-item-has-children">
          <a
            className={`mean-expand ${activeIcon('home')}`}
            onClick={() => active('home')}
          ></a>
        </li>
        <li className="menu-item-has-children">
          <a href="#">Pages</a>
          <ul className="sub-menu" style={activeSubMenu('pages')}>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/testimonial">Testimonials</a>
            </li>
            <li>
              <a href="/pricing-plan">Pricing Plan</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Teams</a>
              <ul className="sub-menu" style={activeSubMenus('team')}>
                <li>
                  <a href="/team">Team Style 01</a>
                </li>
                <li>
                  <a href="/team-two">Team Style 02</a>
                </li>
              </ul>
              <a
                className={`mean-expand ${activeIcons('team')}`}
                onClick={() => actives('team')}
              ></a>
            </li>
            <li>
              <a href="/request-quote">Request Quote</a>
            </li>
            <li>
              <a href="/404">404</a>
            </li>
          </ul>
          <a
            className={`mean-expand ${activeIcon('pages')}`}
            onClick={() => active('pages')}
          ></a>
        </li>
        <li className="menu-item-has-children">
          <a href="#">Services</a>
          <ul className="sub-menu" style={activeSubMenu('services')}>
            <li>
              <a href="/services">Services 01</a>
            </li>
            <li>
              <a href="/services-two">Services 02</a>
            </li>
            <li>
              <a href="/services/data-analytics">Services Details</a>
            </li>
          </ul>
          <a
            className={`mean-expand ${activeIcon('services')}`}
            onClick={() => active('services')}
          ></a>
        </li>
        <li className="menu-item-has-children">
          <a href="#">Project</a>
          <ul className="sub-menu" style={activeSubMenu('project')}>
            <li>
              <a href="/portfolio/2-columns">2 Columns</a>
            </li>
            <li>
              <a href="/portfolio/3-columns">3 Columns</a>
            </li>
            <li>
              <a href="/portfolio/gateway-integration">Portfolio Details</a>
            </li>
          </ul>
          <a
            className={`mean-expand ${activeIcon('project')}`}
            onClick={() => active('project')}
          ></a>
        </li>
        <li className="menu-item-has-children">
          <a href="#">Blog</a>
          <ul className="sub-menu" style={activeSubMenu('blog')}>
            <li>
              <a href="/blog">Blog Grid</a>
            </li>
            <li>
              <a href="/blog-standard">Blog Standard</a>
            </li>
            <li>
              <a href="/blog/ux-ui-designing-the-future-web-design">
                Blog Details
              </a>
            </li>
          </ul>
          <a
            className={`mean-expand ${activeIcon('blog')}`}
            onClick={() => active('blog')}
          ></a>
        </li> */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default ResponsiveMenu
