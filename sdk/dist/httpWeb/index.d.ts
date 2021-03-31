import { Transport } from '../transport-interface';
export declare class WebTransport implements Transport {
    get(uri: string): Promise<string>;
}
