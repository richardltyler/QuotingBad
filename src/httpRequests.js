const httpRequests = {
  getAllQuotes() {
    return (
      fetch('https://www.breakingbadapi.com/api/quotes')
      .then(response => response.json())
    )
  },
  getCharacters(character) {
    return (
      fetch(`https://www.breakingbadapi.com/api/characters?name=${character}`)
        .then(response => response.json()) 
        .then(characters => characters[0].img)
    )
  }
}

export default httpRequests;