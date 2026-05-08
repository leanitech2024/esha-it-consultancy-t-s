import { createFileRoute, Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { allPosts } from 'content-collections'

// import { useState } from 'react'

// import blogData from '#/components/data/blog-data'
import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import SectionHeadings from '#/components/SectionHeadings'
import { formattedDate } from '#/lib/utils.ts'

// import avatar1 from '/assets/img/avatar/avatar-1.jpg'
// import avatar2 from '/assets/img/avatar/avatar-2.jpg'
// import avatar3 from '/assets/img/avatar/avatar-3.jpg'
// import avatar4 from '/assets/img/avatar/avatar-4.jpg'
// import avatar5 from '/assets/img/avatar/avatar-5.jpg'
// import avatar6 from '/assets/img/avatar/avatar-6.jpg'
// import avatar7 from '/assets/img/avatar/avatar-7.jpg'
// import image1 from '/assets/img/blog/blog-1.jpg'
// import image2 from '/assets/img/blog/blog-2.jpg'
// import image3 from '/assets/img/blog/blog-3.jpg'
// import image4 from '/assets/img/blog/blog-4.jpg'
// import image5 from '/assets/img/blog/blog-5.jpg'
// import image6 from '/assets/img/blog/blog-6.jpg'
// import image7 from '/assets/img/blog/blog-7.jpg'

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
  beforeLoad: () => {
    const posts = allPosts
    const sortedPosts = posts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    return { blogs: sortedPosts }
  },
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
  const { blogs } = Route.useRouteContext()
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
              <BlogItem key={data._meta.filePath} blog={data} />
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

const BlogItem = ({ blog }: { blog: Post }) => {
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="blog__two-single-blog">
        <div className="blog__two-single-blog-img">
          <div className="blog__two-single-blog-date">
            <span className="date">{formattedDate(blog.createdAt)}</span>
            {/* <span className="month">Mar</span> */}
          </div>
          <Link
            to={`/blogs/$blogId`}
            params={{ blogId: blog.slug }}
            className="blog__two-single-blog-img-link"
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{ aspectRatio: 16 / 9 }}
            />
          </Link>
        </div>
        <div className="blog__two-single-blog-content">
          <div className="blog__two-single-blog-content-top">
            <span>
              <i className="far fa-user"></i>by {blog.author}
            </span>
            {/* <span>
              <i className="far fa-comment-dots"></i>Comments ({blog.comment})
            </span> */}
          </div>
          <Link
            to={`/blogs/$blogId`}
            params={{ blogId: blog.slug }}
            className="blog__two-single-blog-content-title"
          >
            {blog.title}
          </Link>
          <p className={'ls-3'}>{blog.summary}</p>
          <Link
            className="btn-three mt-3"
            to={`/blogs/$blogId`}
            params={{ blogId: blog.slug }}
          >
            Read More<i className="fas fa-chevron-right"></i>
          </Link>
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
