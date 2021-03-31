import { Transport } from '@xfonfria/sdk/dist';

export class WebTransport implements Transport {

    async get(uri: string): Promise<string> {

        //this can be way lot better but is for demo purposes
        const response = await globalThis.fetch(uri);
        const obj = await response.json();
        const finalResult  = JSON.stringify(obj);
        return finalResult;

    }
}
