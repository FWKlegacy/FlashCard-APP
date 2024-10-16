import { useState } from "react";



function FlashCardForm({onAdd}){
    const [question, setQuestion]= useState("");
    const [answer, setAnswer]= useState("");


    const handleSubmit =(e)=>{
        e.preventDefault();
        if(question && answer){
        onAdd({question, answer});
        setQuestion("");
        setAnswer("");

        };
    };

   return(
    <form className="flashcard-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Question" value={question} onChange={(e)=>setQuestion(e.target.value)}/>
        <input type="text" placeholder="Answer" value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
        <button type="submit">Add Card</button>
    </form>

   );

}


export default FlashCardForm;