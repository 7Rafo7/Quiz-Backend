import {Router} from "express";
import {saveResult} from "../controllers/quiz.controller";

export const quizRoutes = Router();

quizRoutes.post('/save-result', saveResult)