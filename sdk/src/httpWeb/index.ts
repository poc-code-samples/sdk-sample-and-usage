import { Transport } from '../transport-interface';

export class WebTransport implements Transport {

    async get(uri: string): Promise<string> {

        const response = await globalThis.fetch(uri);
        return response.text();
        
    }
}
