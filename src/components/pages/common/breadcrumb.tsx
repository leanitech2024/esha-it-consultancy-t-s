import { Link } from '@tanstack/react-router'
import image from '/assets/img/banner/page-banner-img.png'
import shape from '/assets/img/shape/page-banner-shape-1.png'

const BreadCrumb = ({
  title,
  innerTitle,
}: {
  title: string
  innerTitle?: string
}) => {
  return (
    <div className="page__banner">
      <div className="page__banner-shape">
        <img src={shape} alt="image" />
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="page__banner-content">
              <h2>{title}</h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                {innerTitle}
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="page__banner-img">
              <img src={image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
