import { NodeTransport } from './httpNode';
import * as sdk from '@xfonfria/sdk/dist';


const getter = sdk.initSDK({
    name: 'NodeClient',
    transportFactory: () => {
        return new NodeTransport();
    }
})

const run  = async () => {
    const data = await getter.getData('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);
}

run();
