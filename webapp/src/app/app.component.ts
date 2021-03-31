import { CommunicatorService } from './communicator.service';
import { Component } from '@angular/core';
import { initSDK } from '@xfonfria/sdk/dist';
import { transportFactory } from './util/transport-factory';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Awesome app';
  data = 'initial data';

  constructor(private getter: CommunicatorService) {}

  ngOnInit() {
    this.getter.getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data =>  {
      console.log(`Now the data ${data}`);
      this.data = data
    });
  }
}
