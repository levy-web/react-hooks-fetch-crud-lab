import React, {useState} from "react";
import QuestionForm from "./QuestionForm";

const Question_Api = "http://localhost:4000/questions"

function QuestionItem({ question, onDeleteQuestion, onUpdateAnswer }) {
  
  
  const { id, prompt, answers, correctIndex } = question;

  const [answer, setAnswer] = useState('')
  console.log(onUpdateAnswer)

  function handleOptionChnge(event){
    setAnswer(event.target.value)


    const updateObj = {
      "correctIndex": event.target.value
      
    }

    fetch(`${Question_Api}/${id}`, {

      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(updateObj)
    })
    .then(r => r.json())
    .then(data => console.log(data))
    // onUpdateAnswer(id)

  }
  console.log(correctIndex)


  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`${Question_Api}/${id}`,{
      method:"DELETE"
    }).then((r)=>r.json()).then((data)=>console.log(data))
    onDeleteQuestion(id)
    console.log("item")
  }



  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleOptionChnge} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
