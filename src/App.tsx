import React from 'react';
import './App.css';

const PROMPTS: string[] = []
const ANSWERS: string[] = []


function Start(props: { }) {
  return <>
    <h1>Cards Against Socials</h1>
    <div className='instructions'>
      <p>
        In this game you will get a prompt card that will be the beginning of a sentence, and three answer cards 
        that tell you the end of a sentence. Your job is to combine the prompt card with an answer card to come up with a funnier sentence than your opposition to win a round! 
        <br></br>
        <br></br>
        Press Start to begin.
      </p>
    </div>
    <button>Start</button>
  </>
}

function Game(props: { }) {
  return <>
    <h1>Cards Against Socials</h1>
    <div>
      <Prompt /> 
      <Answer />
    </div>
  </>
}

function Prompt () {
  return <>
    <h4>Prompt</h4>
    <div className='card-container'>
      <Card message='Hello my name is ' isPromptCard={true} />
    </div>
  </>
}

function Answer () {
  return <>
    <h4>Answer</h4>
    <p>Pick your answer:</p>
    <div className='card-container'>
      <Card message='Wut' isPromptCard={false} />
      <Card message='Wut' isPromptCard={false} />
      <Card message='Wut' isPromptCard={false} />
    </div>
  </>
}

function Card(props: { message: string, isPromptCard: boolean }) {
  let cardStyleType: string = props.isPromptCard ? 'prompt-card' : 'answer-card'

  return <div className={cardStyleType}>
    <p>{props.message}</p>
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="">
      </header>
      <div className="App-content">
        {/* <Start /> */}
        <Game />
      </div>
    </div>
  );
}

export default App;
