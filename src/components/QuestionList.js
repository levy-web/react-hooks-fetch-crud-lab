import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({questions,API,setQuestions}) {
  const questionsList = questions.map((question)=>(
    <QuestionItem question={question} API={API} questions={questions} setQuestions={setQuestions} />
  ))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questionsList}
      </ul>
    </section>
  );
}

export default QuestionList;