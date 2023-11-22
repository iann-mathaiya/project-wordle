import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessList from "../GuessList/GuessList"
import GuessInputForm from "../GuessInputForm/GuessInputForm"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses]
    nextGuesses.push(guess)

    setGuesses(nextGuesses)
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInputForm handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game
