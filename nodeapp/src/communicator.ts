import { NodeTransport } from './httpNode';
import * as sdk from '@xfonfria/sdk/dist';

export class Communicator {

    private static getter = sdk.initSDK({
        name: 'NodeClient',
        transportFactory: () => {
            return new NodeTransport();
        }
    });

    public getData(uri: string): Promise<string> {
        return Communicator.getter.getData(uri);
    } 
}
