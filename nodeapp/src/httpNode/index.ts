import * as http from 'http';
import * as https from 'https';
import { Transport } from '@xfonfria/sdk/dist';

export class NodeTransport implements Transport {

    // just to show the http from nodejs can be used here not doing any actual request to another server. As the usage of http allows to do so
    public async get(uri: string): Promise<string> {
        const res = await this.handle(uri);
        return res;
    }

    private handle(uri: string): Promise<string> {

        return new Promise((resolve, reject) => {

            const agent = uri.startsWith('https://') ? https : http;

            const request = agent.get(uri, response => {
                let statusCode = 500;
                
                if (response.statusCode ) statusCode = response.statusCode;
                if (statusCode < 200 || statusCode >= 300) {
                    return reject(new Error(`Error received from server ${statusCode}`));
                }

                let data: string = '';

                response.on('data', chunk => data += chunk);
                response.on('end', () => resolve(data));
            });

            request.on('error', reject);
            request.end();
        });
    }
}
