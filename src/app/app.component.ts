import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chosenPage = 'recipe';

  onNavigate(page: string) {
    this.chosenPage = page;
  }
}
