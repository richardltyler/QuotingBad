const utilities = {
  getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  },
  getWrongAnswer(answers, wrongAnswer) {
    if (wrongAnswer) {
      answers = answers.filter(char => char !== wrongAnswer);
    }
    
    return answers[this.getRandomIndex(answers)];
  }
}

export default utilities;