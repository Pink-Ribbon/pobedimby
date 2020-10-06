import React from "react"
import { Link, graphql } from "gatsby"
import Quiz from 'react-quiz-component';

import Layout from "../components/layout"
import SEO from "../components/seo"

const quiz =  {
  "quizTitle": "Оценка риска",
  "questions": [
    {
      "question": "Ваш возраст?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "60+",
        "50-59+",
        "40-49",
        "25-39"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "У вас ранее был рак груди?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Да",
        "Нет"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "У вас была операция на груди, показавшая атипию?",
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
