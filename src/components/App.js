import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const Question_Api = "http://localhost:4000/questions"

function App() {
  const [page, setPage] = useState("List");
  const [dataItems, setDataItems] = useState([])

  useEffect(()=>{
    fetch(Question_Api)
    .then((resp)=> resp.json())
    .then((data)=>setDataItems(data))
  }, [])
  console.log(dataItems)



  function addQuestions(newDataItems) {
    const updatedQuestions = [...dataItems, newDataItems]
    setDataItems(updatedQuestions);
  }

  function updateAnswer(newAnswer) {
    const updatedQuestions = [...dataItems, newAnswer]
    setDataItems(updatedQuestions);
  }

  function deleteQuestion(id) {
    const updatedQuestions = dataItems.filter(data => data.id !== id)
    setDataItems(updatedQuestions)
}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestions={addQuestions}/> : <QuestionList onUpdateAnswer={updateAnswer} onDeleteQuestion={deleteQuestion} queries={dataItems}/>}
    </main>
  );
}

export default App;
