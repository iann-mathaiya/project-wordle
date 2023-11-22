import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessList from "../GuessList/GuessList"
import WonBanner from "../WonBanner/WonBanner"
import LostBanner from "../LostBanner/LostBanner"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import GuessInputForm from "../GuessInputForm/GuessInputForm"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState("running")

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)

    if (guess === answer) {
      setGameStatus("won")
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }

  return (
    <>
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}

      <GuessList guesses={guesses} answer={answer} />
      <GuessInputForm
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  )
}

export default Game
