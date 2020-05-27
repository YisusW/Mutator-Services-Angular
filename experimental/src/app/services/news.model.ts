import * as moment from 'moment';

interface Company {
  ID: number;
  Symbol: string;
  Name: string;
  ISIN: string;
  CIK: number;
  TradeCount: number;
  ViewCount: number;
  Stock: string;
  Stream: string;
  LogoPath: string;
}

export interface TopNews {
  NewsID: number;
  Company: Company;
  Symbol: string;
  Title: string;
  Content: string;
  Type: number;
  // case when i am going to implement the mutator
  Created: moment.Moment | string;
  URL: string;
  GeneratedURL: string;
  Duration: string;
  LikesCount: number;
  DislikesCount: number;
  CommentsCount: number;
}
