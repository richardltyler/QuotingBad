const httpRequests = {
  getAllQuotes() {
    return (
      fetch('https://www.breakingbadapi.com/api/quotes')
      .then(response => response.json())
    )
  }
}

export default httpRequests;