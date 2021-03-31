import { Transport } from '@xfonfria/sdk/dist';
export declare class NodeTransport implements Transport {
    get(uri: string): Promise<string>;
    private handle;
}
