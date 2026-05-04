import { createFileRoute } from '@tanstack/react-router'
// import { useState } from 'react'

// import blogData from '#/components/data/blog-data'
import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import SectionHeadings from '#/components/SectionHeadings'

import avatar1 from '/assets/img/avatar/avatar-1.jpg'
import avatar2 from '/assets/img/avatar/avatar-2.jpg'
import avatar3 from '/assets/img/avatar/avatar-3.jpg'
import avatar4 from '/assets/img/avatar/avatar-4.jpg'
import avatar5 from '/assets/img/avatar/avatar-5.jpg'
// import avatar6 from '/assets/img/avatar/avatar-6.jpg'
// import avatar7 from '/assets/img/avatar/avatar-7.jpg'
import image1 from '/assets/img/blog/blog-1.jpg'
import image2 from '/assets/img/blog/blog-2.jpg'
import image3 from '/assets/img/blog/blog-3.jpg'
import image4 from '/assets/img/blog/blog-4.jpg'
import image5 from '/assets/img/blog/blog-5.jpg'
// import image6 from '/assets/img/blog/blog-6.jpg'
// import image7 from '/assets/img/blog/blog-7.jpg'

export function getToday() {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date())
}

export function lowercaseAndHyphenate(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-')
}

const blogs = [
  {
    id: crypto.randomUUID(),
    title: 'The Future of AI in Business Transformation',
    description:
      'Artificial Intelligence is no longer an emerging concept—it is a competitive necessity. Discover how AI-driven automation, predictive analytics, and intelligent systems are reshaping industries and enabling smarter decision-making.',
    category: ['Artificial Intelligence'],
    date: getToday(),
    image: image1,
    avatar: avatar1,
    comment: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Building Scalable Cloud Infrastructure for Modern Enterprises',
    description:
      'Scalability, security, and performance define modern digital ecosystems. Learn how cloud-native architecture empowers businesses to operate with agility and resilience in a global environment.',
    category: ['Cloud Solutions'],
    date: getToday(),
    image: image2,
    avatar: avatar2,
    comment: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Cybersecurity in the Digital Age: Protecting What Matters',
    description:
      'With increasing digital dependency comes heightened risk. Understand the latest cybersecurity frameworks, risk mitigation strategies, and proactive defense systems essential for safeguarding business assets.',
    category: ['Security'],
    date: getToday(),
    image: image3,
    avatar: avatar3,
    comment: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Digital Marketing That Drives Measurable Growth',
    description:
      'Beyond visibility lies performance. Explore how data-driven digital marketing strategies—from SEO to paid media—create meaningful engagement and measurable ROI.',
    category: ['Digital Marketing'],
    date: getToday(),
    image: image4,
    avatar: avatar4,
    comment: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'UI/UX Design: Crafting Experiences That Convert',
    description:
      'User experience is the defining factor of digital success. Learn how intuitive design, user psychology, and seamless interfaces create impactful customer journeys.',
    category: ['Design'],
    date: getToday(),
    image: image5,
    avatar: avatar5,
    comment: '',
  },
]

export const Route = createFileRoute('/blogs/')({
  head: () => ({
    meta: [
      {
        title: 'Blogs | Esha IT Consultancy',
      },
      {
        name: 'description',
        content:
          'Esha IT Consultancy is a leading provider of IT solutions and services, dedicated to helping businesses leverage technology for growth and success. With a team of experienced professionals, we offer a wide range of services including software development, cloud computing, cybersecurity, and IT consulting. Our mission is to deliver innovative and customized solutions that meet the unique needs of our clients, enabling them to stay competitive in the ever-evolving digital landscape.',
      },
    ],
  }),
  component: RouteComponent,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="Blogs" innerTitle="Blogs" />
      <BlogGridMain />
    </main>
  )
}

const BlogGridMain = () => {
  // const blogItemShow = 6
  // const [currentPage, setCurrentPage] = useState(0)
  // const totalPages = Math.ceil(blogData.length / blogItemShow)
  // const startIndex = currentPage * blogItemShow
  // const endIndex = startIndex + blogItemShow
  // const currentBlogItems = blogData.slice(startIndex, endIndex)
  // const handleNextPage = () => {
  //   if (currentPage < totalPages - 1) {
  //     setCurrentPage(currentPage + 1)
  //   }
  // }
  // const handlePrevPage = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }

  return (
    <>
      <div className="blog__two section-padding">
        <div className="container">
          <SectionHeadings
            title="Insights That Shape the Future of Technology"
            subtitle="Our Blogs"
            description="At ESHA IT Consultancy Services, we believe that knowledge is the foundation of transformation. Our blog is a curated space where technology meets strategy—delivering expert insights, emerging trends, and actionable intelligence designed to help organizations stay ahead in a rapidly evolving digital landscape."
          />

          <div className="row gy-4 mt-5">
            {blogs.map((data) => (
              <BlogItem key={data.id} blog={data} />
            ))}
            {/* <BlogItem currentBlogItems={currentBlogItems} /> */}
          </div>
          {/* <Pagination
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </div>

        <div className={'container mt-80'}>
          <SectionHeadings
            title="From Technology to Transformation"
            subtitle="Thought Leadership Highlight"
            description="Technology alone does not create impact—strategy does. At ESHA IT Consultancy Services, we bridge the gap between innovation and execution by aligning technology with business objectives. Our thought leadership articles are designed to provide clarity, inspire innovation, and guide organizations toward sustainable growth."
          />
        </div>
      </div>
    </>
  )
}

// type BlogItemProps = {
//   currentBlogItems: typeof blogData
// }

const BlogItem = ({ blog }: { blog: (typeof blogs)[number] }) => {
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="blog__two-single-blog">
        <div className="blog__two-single-blog-img">
          <div className="blog__two-single-blog-date">
            <span className="date">{blog.date}</span>
            {/* <span className="month">Mar</span> */}
          </div>
          {/* <Link
            to={`/blogs/$blogId`}
            params={{ blogId: lowercaseAndHyphenate(blog.title) }}
            className="blog__two-single-blog-img-link"
          >
            <img src={blog.image} alt="blog" />
          </Link> */}
          <img src={blog.image} alt="blog" />
        </div>
        <div className="blog__two-single-blog-content">
          <div className="blog__two-single-blog-content-top">
            <span>
              <i className="far fa-user"></i>by Admin
            </span>
            <span>
              <i className="far fa-comment-dots"></i>Comments ({blog.comment})
            </span>
          </div>
          {/* <Link
            to={`/blogs/$blogId`}
            params={{ blogId: lowercaseAndHyphenate(blog.title) }}
            // href={`/blog/${data.id}`}
            className="blog__two-single-blog-content-title"
          >
            {blog.title}
          </Link> */}
          <h3 className={'fs-5 mb-2'}>{blog.title}</h3>
          <p className={'ls-3'}>{blog.description}</p>
          {/* <Link
            className="btn-three"
            to={`/blogs/$blogId`}
            params={{ blogId: lowercaseAndHyphenate(blog.title) }}
            // href={`/blog/${data.id}`}
          >
            Read More<i className="fas fa-chevron-right"></i>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export const Pagination = ({
  currentPage,
  handlePrevPage,
  totalPages,
  handleNextPage,
  setCurrentPage,
}: {
  currentPage: number
  handlePrevPage: () => void
  totalPages: number
  handleNextPage: () => void
  setCurrentPage: (page: number) => void
}) => {
  return (
    <div className="row t-center mt-55">
      <div className="col-xl-12">
        <div className="theme__pagination">
          <ul>
            <li className={`${currentPage === 0 ? 'd-none' : ''}`}>
              <span onClick={handlePrevPage}>
                <i className="fa-regular fa-angle-left"></i>
              </span>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index}>
                <span
                  className={`${currentPage === index ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index)}
                >
                  {index + 1}
                </span>
              </li>
            ))}
            <li className={`${currentPage === totalPages - 1 ? 'd-none' : ''}`}>
              <span onClick={handleNextPage}>
                <i className="fa-regular fa-angle-right"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
