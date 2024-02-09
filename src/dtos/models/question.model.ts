import { Answer } from './answer.model';
import { Session } from './session.model';

export interface Question {
  uuid: string;
  question: string;
  sessionUuid: string;
  session: Session;
  answers: Answer[];
}
