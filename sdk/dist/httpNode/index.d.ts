import { Transport } from '../transport-interface';
export declare class NodeTransport implements Transport {
    get(uri: string): Promise<string>;
    private handle;
}
