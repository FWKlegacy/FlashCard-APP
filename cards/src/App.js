
import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import FlashCardForm from './components/Flashcardform';
import FlashCardList from './components/Flashcardlist';

function App() {
 const [flashcards, setFlashCards]= useState([]);

 const addFlashCard=({question , answer})=>{
 const newCard = {id: Date.now(), question, answer};
  setFlashCards([...flashcards, newCard]);
 };

 const deleteFlashCard=(id)=>{
  setFlashCards(flashcards.filter((card)=> card.id !==id));
 };

 return(
  <div className='App'>
    <Header/>
    <FlashCardForm onAdd={addFlashCard}/>
    <FlashCardList flashcards={flashcards} onDelete={deleteFlashCard}/>
  </div>

 );

}

export default App;
