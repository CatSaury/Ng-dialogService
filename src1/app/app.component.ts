import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'demo3';

  constructor(
    public dialog: DialogService
  ) {
    this.dialog.open(ExampleComponent)
  }
}
