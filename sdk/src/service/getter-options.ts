import { Transport } from './../transport-interface';

export type TransportFactory = () => Transport;

export interface IGetterOptions {
    name: string,
    transportFactory:  TransportFactory
}
