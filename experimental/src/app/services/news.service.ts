import { Data } from './../../environments/DATA_SERVICE';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TopNews } from './news.model';
import { mutatorService } from './utilities';
import { TopNewsMutator } from './Mutators/TopNewsMutator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private endPoint: string;

  constructor(private http: HttpClient) {
    this.endPoint = environment.ExampleEndPoint;
  }

  private addDefaultHeaders(): HttpHeaders {
    const header = new HttpHeaders();

    header.set('x-rapidapi-host', 'myallies-breaking-news-v1.p.rapidapi.com');
    header.set('x-rapidapi-key', '86e32fa6e6mshe353c212fb05a22p15efdajsn709d73f63ea9');
    header.set('useQueryString', 'true');

    return header;
  }

  /**
   * @description this is a service without a mutator implemented
   * this End point is not working because you need to get a API-KEY to get ACCESS of data
   * BUT this example is a regular code to get access a any regular api.
   */
  public getTopNews(): Observable<Array<TopNews>> {
    const url = `${this.endPoint}/GetTopNews`;

    return this.http.get<Array<TopNews>>(url, { headers: this.addDefaultHeaders() });
  }

  /**
   * @description this is a service with a mutator class implemented
   */
  public getTopNewsMuTated(): Observable<Array<TopNews>> {
    const url = `${this.endPoint}/GetTopNews`;

    return this.http
      .get<Array<TopNews>>(url, { headers: this.addDefaultHeaders() })
      .pipe(map(topNews => mutatorService(TopNewsMutator, topNews) ));
  }

  /**
   * @description i was trying to get real data but i just return a observable with DATA_SERVICE.ts file
   */
  public getTopNewsMOCK(): Observable<Array<TopNews>> {
    const dataMock = new Array(...Data);

    return new Observable<Array<TopNews>>(observer => observer.next(dataMock));
  }

  /**
   * @description i was trying to get real data but i just return a observable with DATA_SERVICE.ts file
   */
  public getTopNewsMOCKMutated(): Observable<Array<TopNews>> {
    const dataMock = new Array(...Data);

    return new Observable<Array<TopNews>>(observer => observer.next( mutatorService(TopNewsMutator, dataMock)));
  }
}
