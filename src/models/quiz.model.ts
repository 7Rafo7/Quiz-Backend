import {model, Schema} from "mongoose";

const quizSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  questions: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
},{
  timestamps: true
})

export const QuizModel = model('Quiz', quizSchema, 'quizzes')