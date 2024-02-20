const httpRequests = {
  getAllQuotes() {
    return fetch("https://quoting-bad-api.onrender.com/api/v1/quotes").then(
      (res) => res.json()
    );
  },
  getCharacters(character) {
    return fetch(
      `https://www.breakingbadapi.com/api/characters?name=${character}`
    )
      .then((res) => res.json())
      .then((characters) => {
        if (characters.length === 0) {
          return "error";
        } else {
          return characters[0].img;
        }
      });
  },
};

export default httpRequests;
