import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />

      <h2>Рак молочной железы</h2>

      <p className="col-1/2">
        Один из самых распространенных «женских» раков в мире. 
        Занимает первое место среди всех онкологических заболеваний у женщин. 
        В течение жизни примерно 1 из 8 женщин ставят такой диагноз.
      </p>

      <div className="flex space-y">
        <div className="fact col col-1/3">
          <h3 className="text-pink">60 000</h3>
          <p>
            Человек только в нашей стране ежегодно заболевают раком молочной железы
          </p>
        </div>
        <div className="fact col col-1/3">
          <h3 className="text-pink">50 лет</h3>
          <p>
            Средний возраст женщины, старше которого увеличивается риск заболевания
          </p>
        </div>
        <div className="fact col col-1/3">
          <h3 className="text-pink">1%</h3>
          <p>
            Процент заболевания, которое случается у мужчин. Пройдите <Link to="/diagnose">профилактическое обследование</Link>
          </p>
        </div>
      </div>

      <div className="touts space-y">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Link key={post.fields.slug}  className="tout" to={post.fields.slug} itemProp="url">
              {title}
            </Link>
          )
        })}
      </div>

      <div className="actions flex space-y">
        <div className="action col col-1/2">
          <h3>Получить помощь</h3>
          <p>
            Согласно статистике, каждые 19 секунд одной женщине в мире ставят диагноз «рак молочной железы». 
            Профилактика важнее лечения, обращайтесь за помощью вовремя
          </p>
          <div className="links">
            <Link to="/">Клиники </Link> 
            <Link to="/">Врачи </Link> 
            <Link to="/">Психологи </Link> 
            <Link to="/">Самопомощь </Link> 
          </div>
        </div>
        <div className="action col col-1/2">
          <h3>Помочь проекту</h3>
          <p>
            Солидарность — самый большой вклад в борьбу с проблемой рака груди.
            Рассказывайте родным и знакомым о ранних симптомах и важности профилактики. Поделитесь ссылкой с друзьями
          </p>
          <div className="links">
            <Link to="/">Подробнее</Link>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
