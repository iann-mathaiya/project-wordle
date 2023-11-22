import React from "react"

function GuessInputForm() {
  const [guess, setGuess] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()

    console.log({ guess })

    setGuess("")
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        type='text'
        maxLength={5}
        id='guess-input'
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInputForm
