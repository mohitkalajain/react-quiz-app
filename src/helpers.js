export const shuffleAnswers = (question) => {
  const unsuffledAnswer = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unsuffledAnswer
    .map((unsuffledAnswer) => ({ sort: Math.random(), value: unsuffledAnswer }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
