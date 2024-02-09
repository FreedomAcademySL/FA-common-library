import { RecommendationLevels } from '../../enums';

export interface Readings {
  uuid: string;
  englishName: string;
  spanishName: string;
  author: string;
  recommendationLevel: RecommendationLevels;
  comment: string;
}
