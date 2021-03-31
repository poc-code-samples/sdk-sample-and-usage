import { transportFactory } from './util/transport-factory';
import { Injectable } from '@angular/core';
import * as sdk from '@xfonfria/sdk/dist';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private static getter = sdk.initSDK({ name: 'WebTransport', transportFactory});


  public getData(uri) {
    return CommunicatorService.getter.getData(uri);
  }
}
