import { Link } from '@tanstack/react-router'
import banner1 from '/assets/img/banner/banner-right-img.jpg'
import bannerShape from '/assets/img/shape/banner-shape-1.png'

const BannerOne = () => {
  return (
    <>
      <div className="banner__one">
        <div className="banner-shape">
          <div className="shape banner-shape-1"></div>
          <div className="shape banner-shape-2"></div>
          <div className="shape banner-shape-3"></div>
          <div className="shape banner-shape-4"></div>
          <img className="shape banner-shape-5" src={bannerShape} alt="image" />
          <div className="shape banner-shape-7"></div>
          <div className="shape banner-shape-6"></div>
        </div>
        <div className="container">
          <div className="row align-items-center gy-4 justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="banner__one-content">
                <span className="subtitle-one">Dubai's Premier IT Partner</span>
                <h2>
                  Powering Your <span>Digital Future</span>
                </h2>
                <p>
                  ESHA IT Consultancy Services delivers world-class technology
                  solutions to businesses across the UAE, transforming
                  challenges into competitive advantages.
                </p>
                <div className="d-flex align-items-center gap-2">
                  <Link to="/contact" className="btn-two">
                    Explore services
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link to="/contact" className="btn-one">
                    Free Consultation
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
              <div className="banner__one-image">
                <div className="banner__one-image-wrapper">
                  <div className="banner__one-image-wrapper-shapes animate-rotate">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                  </div>
                  <img src={banner1} alt="banner-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerOne
