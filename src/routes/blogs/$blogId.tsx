import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'

import { formattedDate } from '#/lib/utils.ts'

const url = import.meta.env.VITE_MY_APP_URL

export const Route = createFileRoute('/blogs/$blogId')({
  beforeLoad: () => {
    const posts = allPosts
    const sortedPosts = posts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    return { blogs: sortedPosts }
  },
  loader: async ({ params }) => {
    const { blogId } = params
    const post = allPosts.find((post) => post.slug === blogId)
    if (!post) {
      throw new Response('Not Found', { status: 404 })
    }
    return post
  },
  head: ({ params, loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.title} | Esha IT Consultancy`,
      },
      {
        name: 'description',
        content: loaderData?.summary,
      },

      // Open Graph
      { property: 'og:title', content: loaderData?.title },
      {
        property: 'og:description',
        content: loaderData?.summary,
      },
      { property: 'og:image', content: loaderData?.image },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content: `${url}/blogs/${params.blogId}`,
      },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: loaderData?.title },
      {
        name: 'twitter:description',
        content: loaderData?.summary,
      },
      { name: 'twitter:image', content: loaderData?.image },
      { name: 'twitter:creator', content: loaderData?.title },
      { name: 'twitter:site', content: '@EshaITConsultancy' },
      {
        name: 'twitter:url',
        content: `${url}/blogs/${params.blogId}`,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: `${url}/blogs/${params.blogId}`,
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: loaderData?.title,
          description: loaderData?.summary,
          image: loaderData?.image,
          author: {
            '@type': 'Person',
            name: loaderData?.title,
          },
          datePublished: loaderData?.createdAt,
        }),
      },
    ],
  }),
  component: RouteComponent,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  const post = Route.useLoaderData()

  const firstThreeWords = post.title.split(' ').slice(0, 3).join(' ') + '...'

  const prevPost = post.prev
  const nextPost = post.next

  return (
    <main>
      <BreadCrumb title={firstThreeWords} innerTitle={post.title} />

      <article>
        <div className="blog__details section-padding">
          <div className="container">
            <div className="row gy-4 flex-wrap-reverse">
              <div className="col-xl-8">
                <div className="blog__details-thumb">
                  <span className="date">{formattedDate(post.createdAt)}</span>
                  <img
                    className="img__full"
                    src={post.image}
                    alt="blog-details-image"
                  />
                </div>
                <div className="blog__details-content">
                  <div className="blog__details-content-top">
                    <span>
                      <i className="far fa-user"></i> by {post.author}
                    </span>
                    <span>
                      <i className="far fa-clock"></i> Read {post.readTime} min
                    </span>
                  </div>

                  <h1
                    className={
                      'fs-1 my-3 link-underline-primary link-offset-2 link-underline-opacity-25'
                    }
                  >
                    {post.title}
                  </h1>

                  <MDXContent code={post.mdx} />
                </div>

                <div className="blog__details-pagination">
                  {prevPost ? (
                    <div className="blog__details-pagination-btn blog__details-pagination-prev">
                      <Link
                        to="/blogs/$blogId"
                        params={{ blogId: prevPost._meta.path }}
                        className="pagination-btn"
                      >
                        <i className="fas fa-arrow-left"></i>
                      </Link>
                      <div className="blog__details-pagination-text">
                        <span>Previous post</span>
                        {/* <span>{prevPost._meta.path}</span> */}
                      </div>
                    </div>
                  ) : (
                    <div className="blog__details-pagination-btn blog__details-pagination-prev">
                      <a
                        href="#"
                        className="pagination-btn"
                        title={'Previous post'}
                        aria-disabled={true}
                      >
                        <i className="fas fa-arrow-left"></i>
                      </a>
                      <div className="blog__details-pagination-text">
                        <span>Previous post</span>
                        {/* <span>No Blogs</span> */}
                      </div>
                    </div>
                  )}

                  {nextPost ? (
                    <div className="blog__details-pagination-btn blog__details-pagination-next">
                      <div className="blog__details-pagination-text">
                        <span>Next post</span>
                        {/* <span>{nextPost._meta.fileName}</span> */}
                      </div>
                      <Link
                        to={'/blogs/$blogId'}
                        params={{ blogId: nextPost._meta.path }}
                        className="pagination-btn"
                      >
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  ) : (
                    <div className="blog__details-pagination-btn blog__details-pagination-next">
                      <div className="blog__details-pagination-text">
                        <span>Next post</span>
                        {/* <span>No Blogs</span> */}
                      </div>
                      <Link to="." className="pagination-btn" disabled={true}>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-xl-4">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

const BlogSidebar = () => {
  const { blogs } = Route.useRouteContext()

  const categories = blogs.reduce((acc, blog) => {
    blog.categories.forEach((category) => {
      if (!acc.includes(category)) {
        acc.push(category)
      }
    })
    return acc
  }, [] as string[])

  return (
    <div className="all__sidebar dark_image ml-25 xl-ml-0">
      <div className="all__sidebar-item">
        <h6>Recent Post</h6>
        <div className="all__sidebar-item-post">
          {blogs.map((data) => (
            <div className="post__item" key={data._meta.filePath}>
              <div className="post__item-image">
                <Link to={`/blogs/$blogId`} params={{ blogId: data.slug }}>
                  <img src={data.image} alt="" />
                </Link>
              </div>
              <div className="post__item-title">
                <h6>
                  <Link to={`/blogs/$blogId`} params={{ blogId: data.slug }}>
                    {data.title}
                  </Link>
                </h6>
                <span>
                  <i className="far fa-calendar-alt"></i>
                  {formattedDate(data.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all__sidebar-item">
        <h6>Popular Tag</h6>
        <div className="all__sidebar-item-tag">
          <ul>
            {categories.map((category) => {
              return (
                <li key={category}>
                  <a href={'#'}>{category}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
