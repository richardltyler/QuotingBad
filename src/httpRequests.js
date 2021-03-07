const httpRequests = {
  getAllQuotes() {
    return (
      fetch('https://www.breakingbadapi.com/api/quotes')
      .then(res => {if (!res.ok) {
        return `Real smooth. Slippin' Jimmy went and got a ${res.status} error. Try again later or go to About to contact the developers with questions!`;
      } else {
        return res.json();
      }})
    )
  },
  getCharacters(character) {
    return (
      fetch(`https://www.breakingbadapi.com/api/characters?name=${character}`)
      .then(res => {if (!res.ok) {
        return `Real smooth. Slippin' Jimmy went and got a ${res.status} error. Try again later or go to About to contact the developers with questions!`;
      } else {
        return res.json();
      }})
        .then(characters => {
          if (typeof characters !== 'object') {
            return characters[0].img;
          } else {
             return characters;
          }
        })
    )
  }
}

export default httpRequests;