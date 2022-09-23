import {Request, Response} from "express";
import {createQuiz} from "../services/quiz.service";

export const saveResult = async (req: Request, res: Response) => {
  try {
    const data = req.body

    if (!data){
      res.status(400).send("Can't be created without content");
    }

    const quiz = await createQuiz(data)

    if (!quiz){
      res.status(400).send('Something gone wrong while saving quiz')
    }

    res.status(200).send('Created successfully')

  } catch (e){
    res.status(400).send(e)
  }
}