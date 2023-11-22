import React from "react"

function GameOverBanner({ answer, guesses, gameStatus }) {
  if (gameStatus === "won") {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in {' '}
          <strong>{guesses.length > 1 ? `${guesses.length} guesses` : `${guesses.length} guess`}</strong>.
        </p>
      </div>
    )
  } else if (gameStatus === "lost") {
    return (
      <div className='sad banner'>
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }

  return null
}

export default GameOverBanner
