import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import goldenRibbonImage from '../../static/images/golden-ribbon.png';

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />

      <h2>Рак молочной железы</h2>

      <p className="col-1/2 space-y">
        Один из самых распространенных «женских» раков в мире. 
        Занимает первое место среди всех онкологических заболеваний у женщин. 
        В течение жизни примерно 1 из 8 женщин ставят такой диагноз.
      </p>

      <div className="flex space-y">
        <div className="fact col col-1/3">
          <h3 className="text-pink">4 500</h3>
          <p>
            Человек только в Беларуси ежегодно заболевают раком молочной железы
          </p>
        </div>
        <div className="fact col col-1/3">
          <h3 className="text-pink">49 лет</h3>
          <p>
            Пик заболеваемости раком молочной железы. Чаще всего выявляется в возрасте от 40 до 60 лет
          </p>
        </div>
        <div className="fact col col-1/3">
          <h3 className="text-pink">16,2%</h3>
          <p>
            От всех случаев рака, которые диагностируются у женщин в Беларуси. Пройдите <Link activeClassName="active" partiallyActive={true} to="/diagnose">профилактическое обследование</Link>
          </p>
        </div>
      </div>

      <div className="touts space-y">
        <Link activeClassName="active" partiallyActive={true} key="/about-cancer/"  className="tout" to="/about-cancer/" itemProp="url">
          <span>Что </span>
          <span>такое </span>
          <span>рак</span>
        </Link>
        <Link activeClassName="active" partiallyActive={true} key="/causes/"  className="tout" to="/causes/" itemProp="url">
          Причины
        </Link>
        <Link activeClassName="active" partiallyActive={true} key="/diagnose/"  className="tout" to="/diagnose/" itemProp="url">
          <span>Ранняя </span>
          <span>диагностика</span>
        </Link>
        <Link activeClassName="active" partiallyActive={true} key="/treatment/"  className="tout" to="/treatment/" itemProp="url">
          Лечение
        </Link>
        <Link activeClassName="active" partiallyActive={true} key="/myths/"  className="tout" to="/myths/" itemProp="url">
          Мифы
        </Link>
        <Link activeClassName="active" partiallyActive={true} key="/articles/"  className="tout" to="/articles/" itemProp="url">
          <span>Статьи </span>
          <span>и истории</span>
        </Link>        
        {/* Dinamic touts */}
        {/* {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Link activeClassName="active" partiallyActive={true} key={post.fields.slug}  className="tout" to={post.fields.slug} itemProp="url">
              {title}
            </Link>
          )
        })} */}
      </div>

      <div className="actions flex space-y">
        <div className="action col col-1/2">
          <h3>Получить помощь</h3>
          <p>
            Согласно статистике, каждые 19 секунд одной женщине в мире ставят диагноз «рак молочной железы». 
            Профилактика важнее лечения, обращайтесь за помощью вовремя
          </p>
          <div className="links space-y">
            <Link activeClassName="active" partiallyActive={true} className="col" to="/clinics">Клиники</Link>
            <Link activeClassName="active" partiallyActive={true} className="col" to="/doctors">Врачи</Link>
            <Link activeClassName="active" className="col" to="/">Психологи</Link>
            <Link activeClassName="active" partiallyActive={true} className="col" to="/diagnose">Самопомощь</Link>
          </div>
          <div className="buttons flex">
            <Link activeClassName="active" partiallyActive={true} className="btn btn-pink col col-1/2" to="/diagnose">Пройти диагностику</Link>
            <Link activeClassName="active" partiallyActive={true} className="btn btn-gray col col-1/2" to="/quiz">Оценить риск</Link>
          </div>
        </div>
        <div className="action col col-1/2 project-help">
          <h3>Помочь проекту</h3>
          <p>
            Солидарность — самый большой вклад в борьбу с проблемой рака груди.
            Рассказывайте родным и знакомым о ранних симптомах и важности профилактики. Поделитесь ссылкой с друзьями
          </p>
          <p>
            https://pobedim.by
          </p>
          <div className="links">
            <Link activeClassName="active" partiallyActive={true} to="/about-project/">Подробнее</Link>
          </div>
        </div>
      </div>

      <div className="hash-tag center space-y">
        <strong className="block space-y-st">ХЭШТЕГ</strong>
        <a className="block space-y-st" src="https://www.google.com/search?q=%23TimeToEndBreastCancer">
          #TimeToEndBreastCancer
        </a>
        <div>
          <img src={goldenRibbonImage} />
        </div>
        <p className="sm:col-1/2 lg:col-1/3 center">
          <strong>Pobedim.by</strong> присоединяется к <strong>Estée Lauder</strong> в информационном движении против заболевания рака груди. 
          Важно обратить внимание на профилактику и раннюю диагностику в Беларуси и не только. 
          Пора победить рак груди вместе! 
        </p>
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
