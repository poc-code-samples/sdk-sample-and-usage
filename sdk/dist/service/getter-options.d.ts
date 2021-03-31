import { Transport } from './../transport-interface';
export declare type TransportFactory = () => Transport;
export interface IGetterOptions {
    name: string;
    transportFactory: TransportFactory;
}
