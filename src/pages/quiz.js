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
