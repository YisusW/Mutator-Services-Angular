import { NewsService } from './services/news.service';
import { Component, OnInit } from '@angular/core';
import { TopNews } from './services/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private newService: NewsService) {}

  ngOnInit() {
    this.callServiceWithOutMutator();
    this.callServiceWithMutator();
  }

  private callServiceWithOutMutator() {
    this.newService.getTopNewsMocked().subscribe(
      (news: Array<TopNews>) => console.log(news, 'withOut')
    );
  }

  private callServiceWithMutator() {
    this.newService.getTopNewsMockedMutated().subscribe(
      (news: Array<TopNews>) => console.log(news, 'with')
    );
  }
}
