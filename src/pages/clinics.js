import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RNPC_Alexandrova from '../../content/blog/clinics/RNPC_Alexandrova.jpg';
import Minsk_onkodispanser_3 from '../../content/blog/clinics/Minsk_onkodispanser_3.jpg';
import Brest_onkodispanser from '../../content/blog/clinics/Brest_onkodispanser.jpg';
import vitebsk_onkodispanser from '../../content/blog/clinics/vitebsk_onkodispanser.jpg';
import gomel_onkodispanser from '../../content/blog/clinics/gomel_onkodispanser.jpg';
import grodno_onkodispanser from '../../content/blog/clinics/grodno_onkodispanser.jpg';
import Mogilev_onkodispanser from '../../content/blog/clinics/Mogilev_onkodispanser.jpg';

const Page = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />

      <h3>Внешние ресурсы для поиска клиник</h3>
      <ul>
        <li><a href="https://www.103.by/cat/med/polikliniki/">Список поликлиник Беларуси - портал 103.by</a></li>
        <li><a href="https://doktora.by/clinics/">Список клиник Беларуси - портал doktora.by</a></li>
        <li><a href="https://www.103.by/cat/medcentry/mammologiya">Список клиник оказывающих частные услуги мамологов Беларуси - портал 103.by</a></li>
      </ul>

      <h3>Ведущие клиники Беларуси</h3>

      <div className="grid sm:grid-1/2 lg:grid-1/4">
        <div className="clinic">
          <h4><a href="https://omr.by/">Республиканский научно-практический центр онкологии и медицинской радиологии имени Н.Н. Александрова</a></h4>
          <img src={RNPC_Alexandrova} alt="РНПЦ онкологии и медицинской радиологии имени Н.Н. Александрова" />
          <div className="body">
            <div className="item">Крупнейший центр онкологии Беларуси. Опыт работы по диагностике и лечению более 55 лет. Время работы с 8:00 до 16:30 (Пн.- Пт.)</div>
            <div className="item"><strong>Адрес:</strong> Республика Беларусь, аг. Лесной, Минский район, Минская область</div>
            <div className="item"><strong>Контакты:</strong> +375 (17) 389-99-00,  +375 (17) 389-99-10</div>
          </div>
        </div>

        <div className="clinic">
          <h4><a href="http://www.mgkod.by/">Минский городской клинический онкологический диспансер</a></h4>
          <img src={Minsk_onkodispanser_3} alt="Минский городской клинический онкологический диспансер" />
          <div className="body">
            <div className="item">Специализированное онкологическое учреждение Республики Беларусь, осуществляющее диагностику, хирургическое, комбинированное и комплексное лечение больных с опухолями различных локализаций, а также их диспансерное наблюдение и реабилитацию.</div>
            <div className="item"><strong>Адрес:</strong> г. Минск, пр-т Независимости, 64</div>
            <div className="item"><strong>Контакты:</strong> +375 17 237-32-90</div>
          </div>
        </div>

        <div className="clinic">
          <h4><a href="https://www.oncology.brest.by/">Брестский областной онкологический диспансер</a></h4>
          <img src={Brest_onkodispanser} alt="Брестский областной онкологический диспансер" />
          <div className="body">
            <div className="item">УЗ "Брестский областной онкологический диспансер» является ведущим онкологическим учреждением Брестской области, оказывающим помощь пациентам с онкологическими заболеваниями.</div>
            <div className="item"><strong>Адрес:</strong> г. Брест, ул. Медицинская 6.</div>
            <div className="item"><strong>Контакты:</strong> +375 162 97-76-74</div>
          </div>
        </div>

        <div className="clinic">
          <h4><a href="https://onco.by/">Витебский областной онкологический диспансер</a></h4>
          <img src={vitebsk_onkodispanser} alt="Брестский областной онкологический диспансер" />
          <div className="body">
            <div className="item">Витебский областной клинический онкологический диспансер - это главное специализированное многопрофильное лечебно-профилактическое учреждение Витебский области, основной задачей которого является организация и оказание онкологической помощи населению.</div>
            <div className="item"><strong>Адрес:</strong> Витебск, ул. П.Бровки, 33</div>
            <div className="item"><strong>Контакты:</strong> +375 (212) 33 00 46, +375 (212) 33 00 39, +375 (212) 57 24 01</div>
          </div>
        </div>

        <div className="clinic">
          <h4><a href="https://www.grcoc.gomel.by/">Гомельский Областной Клинический Онкологический Диспансер</a></h4>
          <img src={gomel_onkodispanser} alt="Гомельский Областной Клинический Онкологический Диспансер" />
          <div className="body">
            <div className="item">Одно из ведущих клинических учреждений Гомельской области, проводит специализированное лечение онкологических больных. Широко использует комбинированное и комплексное лечение, которое включает использование химиотерапии и лучевой терапии</div>
            <div className="item"><strong>Адрес:</strong> г. Гомель, ул. Медицинская, 2</div>
            <div className="item"><strong>Контакты:</strong> 8 (0232) 50-42-66, 8 (0232) 49-19-45, 8 (0232) 49-19-37</div>
          </div>
        </div>

        <div className="clinic">
          <h4><a href="http://gocb.by/medical-service/oncology-center.html/">Поликлиника УЗ Областной Онкологический Диспансер Гродно</a></h4>
          <img src={grodno_onkodispanser} alt="Поликлиника УЗ Областной Онкологический Диспансер Гродно" />
          <div className="body">
            <div className="item">Cтруктурное подразделение УЗ "Гродненская университетская клиника" является ведущим онкологическим учреждением Гродненской области, оказывающим помощь пациентам с онкологическими заболеваниями.</div>
            <div className="item"><strong>Адрес:</strong> Гродно, Бульвар Ленинского комсомола, 52</div>
            <div className="item"><strong>Контакты:</strong> 8 (0152) 433772</div>
          </div>
        </div>

        <div className="clinic">
          <h4><a href="http://mood.by/">Могилевский областной онкологический диспансер</a></h4>
          <img src={Mogilev_onkodispanser} alt="Могилевский областной онкологический диспансер" />
          <div className="body">
            <div className="item">Могилевский областной онкологический диспансер - ведущее онкологическое учреждение Могилевский области. Оказывает помощь пациентам с всеми онкологическими заболеваниями.</div>
            <div className="item"><strong>Адрес:</strong> г. Могилев, ул. Академика Павлова, 2А</div>
            <div className="item"><strong>Контакты:</strong> 8(0222) 65-50-20, 8(0222) 65-50-30, 8(0222) 65-50-40</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
