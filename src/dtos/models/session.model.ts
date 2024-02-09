import { Question } from './question.model';

export interface Session {
  uuid: string;
  title: string;
  number: string;
  sessionUrl: string;
  homeworkUrl: string;
  questions: Question[];
}
