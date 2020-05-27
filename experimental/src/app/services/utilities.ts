import * as moment from 'moment';
import { MutatorService } from './Mutators';

/**
 * Parse the object as a moment in target timezone
 * @param timestamp object to parse as moment
 */
export function parseMoment(timestamp: string | Date | moment.Moment): moment.Moment {
  if (timestamp == null || typeof timestamp === 'undefined') {
    return null;
  }
  if (moment.isMoment(timestamp)) {
    return moment(timestamp);
  }
  return moment.parseZone(timestamp);
}

export function mutatorService(Mutator: MutatorService, news) {
  news.map(item => new Mutator(item));
  return news;
}
