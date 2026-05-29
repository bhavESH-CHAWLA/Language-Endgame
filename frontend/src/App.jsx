import { languages } from "./language";
import { useState, useEffect } from "react";
import {clsx} from "clsx"
import { getRandomWord } from "./utlils";
import confetti from "canvas-confetti";


function App() {
  const [currentWord,setCurrentWord] = useState(getRandomWord());
  const [gussedWord,setgussedWord] = useState([]);
  const [forcedGameOver, setForcedGameOver] = useState(false);
  const maxWrongGuesses = languages.length - 1;
  
  const wrongGussedcount = gussedWord.filter(letter=> !currentWord.includes(letter)).length;

  const iswon = currentWord.split("").every(letter => gussedWord.includes(letter));
  const islost=wrongGussedcount>=maxWrongGuesses||forcedGameOver;
  const isover=iswon||islost;


  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setForcedGameOver(true);
      }
    };
    
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Trigger confetti when player wins
  useEffect(() => {
    if (iswon) {
      const duration = 3000; // 3 seconds of confetti
      const end = Date.now() + duration;
      
      const interval = setInterval(() => {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
        
        if (Date.now() > end) {
          clearInterval(interval);
        }
      }, 250); // Trigger every 250ms
      
      return () => clearInterval(interval);
    }
  }, [iswon]);


  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const letterElements = currentWord.split("").map((letter, index) => {
    const isRevealed = gussedWord.includes(letter);
    const isIncorrectGuess = !currentWord.includes(letter);
    
    return (
      <span 
        key={index}
        className={clsx({
          "incorrect-letter": islost && isIncorrectGuess
        })}
      >
        {islost ? letter.toUpperCase() : (isRevealed ? letter.toUpperCase() : "")}
      </span>
    );
  });

  function addgussed(letter){
    if (isover) return;

    setgussedWord(prevword=>
      prevword.includes(letter)?prevword:[...prevword,letter]

    )
  }

    function startNewGame() {
        setCurrentWord(getRandomWord())
        setgussedWord([])
        setForcedGameOver(false)
    }


  const languageElement = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGussedcount
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    const className = clsx("chip", isLanguageLost && "lost")
    return (
      <span
        className={className}
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })

  const keyElement = alphabet.split("").map((letter)=>{
    const isgussed=gussedWord.includes(letter);
    const iscorrect=isgussed&&currentWord.includes(letter);
    const iswrong=isgussed&&!currentWord.includes(letter);
    const className=clsx({
      correct:iscorrect,
      wrong: iswrong
    })

    return(
      <button
        className={className}
        key= {letter}
        onClick={()=>addgussed(letter)}
        disabled={isover}
      >
        {letter.toUpperCase()}
      </button>
    )
    
})

const lastgussedletter=gussedWord[gussedWord.length-1];
const islastgussedwrong= lastgussedletter&&!currentWord.includes(lastgussedletter);


const gamestatusclass=clsx("game-status",{
  won :iswon,
  lost:islost,
  farewell: !isover &&islastgussedwrong
})

function getfarwelltext(language){
  const farewellMessages = [
    `${language} has left the building! 🚪`,
    `See you later, ${language}! 👋`,
    `${language} wasn't the answer. Better luck next time! 🍀`,
    `That's not it! ${language} disagrees with you. 🙅`,
    `Wrong! ${language} just ghosted you. 👻`,
    `Nope! ${language} is taking a vacation. ✈️`,
    `Close, but ${language} says no way! ❌`,
    `${language} has entered the chat... to say you're wrong! 😬`,
    `Oops! ${language} is not amused. 😤`,
    `${language} called it wrong! Nice try though. 💪`,
    `That's a ${language} fail! 🔴`,
    `Wrong guess, friend! ${language} knew better. 🧠`
  ];
  
  return farewellMessages[Math.floor(Math.random() * farewellMessages.length)];
}

function rendergamestatus(){
  if(!isover&&islastgussedwrong){
    return <p className ="farewell-message">{getfarwelltext(languages[wrongGussedcount-1].name)}</p>
  }
  if(iswon){
    return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
  }
  if(islost){
    return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
  }

  return null;
}

  return (
    <div>
      <header>
                <h1>Language : Endgame</h1>
                <p>Guess the word within 8 attempts to keep the 
                programming world safe from Assembly!</p>
         </header>  
         <section className={gamestatusclass}>
          { rendergamestatus() }     
        </section>  
        <section className="language-chips">
          {languageElement}
        </section>
        <section className="word">{letterElements}</section>

        <section className="keyboard">
          {keyElement}

        </section>

        {isover&&<button className="new-game" onClick={startNewGame}>New Game</button>}
    </div>
    
  );
}

export default App;
