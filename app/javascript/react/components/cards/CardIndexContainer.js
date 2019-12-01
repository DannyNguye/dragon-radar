import React, { useState, useEffect } from 'react'

const CardIndexContainer = props => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("/api/v1/cards")
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setCards(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <h1>Cards</h1>
  )
}

export default CardIndexContainer
