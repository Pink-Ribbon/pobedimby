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
          className="blog-post col col-2/3"
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
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/clinics">Клиники</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/doctors">Врачи</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/quiz/">Пройти тест</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/diagnose">Диагностика</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/about-cancer">Что такое рак груди</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/articles">Ссылки на статьи и истории</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/faq">Часто задаваемые вопросы</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/myths">Мифы</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/statistics">Статистика</Link>
            <Link activeClassName="active" partiallyActive={true} className="side-menu-link" to="/treatment">Лечение</Link>
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
