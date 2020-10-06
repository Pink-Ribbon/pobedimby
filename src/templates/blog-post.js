import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout
      location={location}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <header className="w-full">
        <h1 className="col-2/3" itemProp="headline">{post.frontmatter.title}</h1>
      </header>
      <div className="flex">
        <article
          className="blog-post space-y col col-2/3"
          itemScope
          itemType="http://schema.org/Article"
        >
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>
        <div className="side-menu col col-1/3 hidden md:visible">
          <div className="wrapper">
            <Link className="side-menu-link" to="/">Клиники</Link>
            <Link className="side-menu-link" to="/">Врачи</Link>
            <Link className="side-menu-link" to="/">Самопомощь</Link>
            <Link className="side-menu-link" to="/quiz/">Пройти тест</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
