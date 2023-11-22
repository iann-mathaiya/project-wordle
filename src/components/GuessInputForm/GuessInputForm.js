import React from "react"

function GuessInputForm({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (guess.length !== 5) {
      window.alert("Guess must be  5 characters!")
      return
    }

    handleSubmitGuess(guess)

    setGuess("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='guess-input-wrapper'>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required
          type='text'
          maxLength={5}
          value={guess}
          disabled={gameStatus !== 'running'}
          id='guess-input'
          pattern='[a-zA-Z]{5}'
          title='5 letter word'
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase())
          }}
        />
      </form>
    </>
  )
}

export default GuessInputForm
