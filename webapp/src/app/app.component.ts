import { Component } from '@angular/core';
import { initSDK } from '@xfonfria/sdk/dist';
import { WebTransport } from './../shared/httpWeb'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getter = null;
  title = 'Awesome app';
  data = 'initial data';

  constructor() {
    this.getter = initSDK({
      name: 'WebGetter',
      transportFactory: () => {
        return new WebTransport();
      }
    });

    console.log(this.getter);
  }

  ngOnInit() {
    this.getter.getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data =>  {
      console.log(`Now the data ${data}`);
      this.data = data
    });
  }
}
