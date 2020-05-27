import { TopNews } from '../news.model';
import { parseMoment } from '../utilities';

export class TopNewsMutator {
  constructor(topNews: TopNews) {
    topNews.Created = parseMoment(topNews.Created);
  }
}
