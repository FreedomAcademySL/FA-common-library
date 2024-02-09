import { Question } from './question.model';

export interface Answer {
  uuid: string;
  answer: string;
  isCorrect: boolean;
  questionUuid: string;
  question: Question;
}
