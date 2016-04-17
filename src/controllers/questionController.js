import Question from '../models/question';

export function createQuestion(req, res) {
  const { type, text, reaction } = req.body;

  Question.create({
    type,
    text,
    reaction
  })
    .then(question => {
      res.json(question);
    })
}
