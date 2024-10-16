// src/components/FlashcardList.js
import React from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards, onDelete }) {
  return (
    <div className="flashcard-list">
      {flashcards.length === 0 ? (
        <p>No flashcards added yet!</p>
      ) : (
        flashcards.map((card) => (
          <Flashcard 
            key={card.id}  
            card={card} 
            onDelete={onDelete} 
          />
        ))
      )}
    </div>
  );
}

export default FlashcardList;





