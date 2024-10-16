import React, { useState } from "react";



function FlashCard({card, onDelete}){
    const [flipped, setFlipped]=useState(false);


    return(
        <div className="flashcard" onClick={()=>setFlipped(!flipped)}>
            <p>{flipped ? card.answer : card.question}</p>
            <button onClick={(e)=>{e.stopPropagation();
            onDelete(card.id) }}>Delete</button>

        </div>
    );
} 

export default FlashCard;