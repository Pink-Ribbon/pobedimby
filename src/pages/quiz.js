import React from "react"
import { Link, graphql } from "gatsby"
import Quiz from 'react-quiz-component';

import Layout from "../components/layout"
import SEO from "../components/seo"

const quiz =  {
  "quizTitle": "Quiz title 1",
  "questions": [
    {
      "question": "q1",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "a1.1",
        "a2.1"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "q2",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "a2.1",
        "a2.2"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "q2",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "a3.1",
        "a3.2"
      ],
      "correctAnswer": "1"
    }
  ]
};

const ResultA = 'ResultA';
const ResultB = 'ResultB';

const renderCustomResultPage = (obj) => {
  const { numberOfCorrectAnswers } = obj;
  const text  = numberOfCorrectAnswers > 1 ? ResultA : ResultB;
  console.log(obj);
  return ( 
    <div>{`${text}`}</div>
  )
};

const QuizPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />

      <h2>Оценить риски</h2>
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
