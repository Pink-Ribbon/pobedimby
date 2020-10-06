import React from "react"
import { Link, graphql } from "gatsby"
import Quiz from 'react-quiz-component';

import Layout from "../components/layout"
import SEO from "../components/seo"

const quiz =  {
  "quizTitle": "Оценка риска",
  "questions": [
    {
      "question": "Укажите ваш возраст",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "20-40 лет",
        "40-50 лет",
        "Старше 50 лет"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Были ли в вашей семье (у ближайших родственников: мамы, сестры, дочери, бабушки, тети) случаи заболевания раком молочной железы или раннего заболевания раком яичников раком (до 50 лет)?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Да",
        "Нет",
        "Не знаю"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Ваша первая менструация пришла в каком возрасте?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "До 12 лет",
        "12-14 лет",
	"После 14 лет"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Ваши первые роды были в каком возрасте?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "До 30 лет",
        "После 30 лет",
	"Не рожала"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Принимаете ли вы сейчас или применяли ли вы в недавнем прошлом эстроген-прогестиновые препараты на регулярной основе?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Да",
        "Нет"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Принимаете ли вы сейчас или применяли ли вы в недавнем прошлом гормональные контрацептивы на регулярной основе?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Да",
        "Нет"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Как часто вы употребляете алкоголь?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Не употребляю вообще",
        "1-2 раза в год",
        "1-2 раза в месяц",
        "1-2 раза в неделю",
        "Практически ежедневно"
      ],
      "correctAnswer": "5"
    },
    {
      "question": "Вы курите?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Да",
        "Нет"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Есть ли у вас установленные диагнозы рака молочной железы или яичников?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Да",
        "Нет"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Есть ли у вас установленные мутации генов повышающих риск рака молочной железы?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Да",
        "Нет"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Получали ли вы лучевую терапию на область выше диафрагмы (грудная клетка, голова или шея) в возрасте до 30 лет?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Да",
        "Нет"
      ],
      "correctAnswer": "1"
   }
  ]
};

const ResultA = 'У Вас высокий риск';
const ResultB = 'У Вас низкий риск';

const renderCustomResultPage = (obj) => {
  const { numberOfCorrectAnswers } = obj;
  const text  = numberOfCorrectAnswers > 1 ? ResultA : ResultB;
  return ( 
    <div className="quiz-result"><h3>{`${text}`}</h3></div>
  )
};

const QuizPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <Quiz quiz={quiz} showDefaultResult={false} customResultPage={renderCustomResultPage}/>
      <div className="quiz-notice">
        <p>Этот тест позволяет приблизительно оценить риск заболевания раком молочной железы. Он состоит из нескольких вопросов, составленных на основе ведущих исследования в этой области.</p>
        <p>Результаты теста не сохраняются и никуда не отправляются (включая скрипты аналитики) - промежуточные результаты находятся исключительно в кэшэ вашего браузера и только на время прохождения теста.</p>
        <p>Тест находится в разработке и будет пополняться вопросами по мере развития проекта.</p>
        </div>

    </Layout>
  )
}

export default QuizPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
