import {Request, Response} from "express";
import {getAll} from "../services/questions.service";

export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await getAll();

    if (!questions){
      res.status(404).send('Questions not found')
    }

    res.status(200).send(questions)
  } catch (e){
    res.status(400).send(e)
  }
}