# Mutator-Services-Angular
How to mutate some attributes of a json string response of httpClient of angular

## Solution

That code that I share is a way to perform conversions from one data to another type of data if our application requires it due to the need for the API

This code was inspired by the Laravel in PHP mutators.
https://laravel.com/docs/7.x/eloquent-mutators

Little bit example in TypeScript and Angular:

### Consists of changing the data type of one or more properties, let's see code:

```typescript
import { parseMoment } from '../utilities';

export interface TopNews {
  ...
  NewsID: number;
  // case when i am going to implement the mutator
  Created: moment.Moment | string;
}


/**
 * @description Mutator Class
 *
export class TopNewsMutator {
  constructor(topNews: TopNews) {
    // if the property Created is a <string>, now will change to Moment.
    topNews.Created = parseMoment(topNews.Created);
  }
}
```
When *parseMoment* function is returning a moment (Type) when spect a string argument
```typescript

/**
 * Parse the object as a moment in target timezone
 * @param timestamp object to parse as moment
 */
export function parseMoment(timestamp: string): moment.Moment {

  return moment.parseZone(timestamp);
}
```

Implementation in Service: 

```typescript

  /**
   * @description this is a service with a mutator class implemented
   */
  public getTopNewsMuTated(): Observable<Array<TopNews>> {
    const url = `${this.endPoint}/GetTopNews`;

    return this.http
      .get<Array<TopNews>>(url, { headers: this.addDefaultHeaders() })
      .pipe(map(topNews => mutatorService(TopNewsMutator, topNews) ));
  }
```
Every <TopNews> Object that has or contain a *Created* property <string> will be parse to Moment in this case.

mutatorService function is:

```typescript

// in this case <TopNewsMutator> in service is <MutatorService> in this function
export function mutatorService(Mutator: MutatorService, news) {
  news.map(item => new Mutator(item));
  return news;
}
``` 

Finally the type MutatorService is a Flexible type where you can add many mutator classes that you want:

```typescript
/**
 * @description this @type {ModelMutator} just for documentation of list of mutators classes
 */
type ModelMutator = Required<TopNewsMutator>;

// remember TopNewsMutator is our first class that we export in first example code

export type MutatorService = new(mutator: ModelMutator) => void;
```
