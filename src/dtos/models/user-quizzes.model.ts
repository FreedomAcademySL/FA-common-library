import { QuizStatus } from '../../enums/user-quizzes';
import { User } from './user.model';

interface QuizData {
  sessionNumber: number;
  status: QuizStatus;
  dateAnswered: string;
  clickCount: number;
}

export interface UserQuizzes {
  uuid: string;
  userUuId: string;
  user: User;
  quizData: QuizData[];
}
