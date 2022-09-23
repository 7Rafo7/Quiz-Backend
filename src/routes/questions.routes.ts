import {Router} from "express";
import {getAllQuestions} from "../controllers/questions.controller";

export const questionsRoutes = Router();

questionsRoutes.get('/get-all-questions', getAllQuestions)