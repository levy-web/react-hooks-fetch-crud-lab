import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";



function QuestionList({queries ,onUpdateAnswer, onDeleteQuestion}) {
  console.log(onDeleteQuestion)

  const itemList = queries.map((item)=>{
    console.log(item.id)
   return <QuestionItem onUpdateAnswer={onUpdateAnswer} onDeleteQuestion={onDeleteQuestion} key={item.id} question={item} />
  })




  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {itemList}
      </ul>
    </section>
  );
}

export default QuestionList;
