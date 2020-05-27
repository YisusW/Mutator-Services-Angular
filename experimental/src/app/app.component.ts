import { NewsService } from './services/news.service';
import { Component } from '@angular/core';
import { TopNews } from './services/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private newService: NewsService) {
    this.callServiceWithOutMutator();
    this.callServiceWithMutator();
  }

  private callServiceWithOutMutator() {
    this.newService.getTopNewsMOCK().subscribe(
      (news: Array<TopNews>) => console.log(news, 'withOut')
    );
  }

  private callServiceWithMutator() {
    this.newService.getTopNewsMOCKMutated().subscribe(
      (news: Array<TopNews>) => console.log(news, 'with')
    );
  }
}
