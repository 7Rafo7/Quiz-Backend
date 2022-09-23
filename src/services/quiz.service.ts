import {QuizModel} from "../models/quiz.model";

export const createQuiz = async (data: Object) => {
  return new QuizModel(data).save();
}